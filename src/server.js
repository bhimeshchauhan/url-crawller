/**
 * The server for the font scraper.
 */
import express from 'express';
import Crawler from './crawller';
import isEmpty from 'lodash/isEmpty';

export default async function serve({port}) {
  const app = express();
  app.use(express.json());

  app.post('/parseFonts', async (req, res, next) => {
    const url = req.body.url;
    let getFontData;
    try {
      const crawler = new Crawler(3, url, 'depthCrawl');
      getFontData = await crawler.mainCrawler();
      res.json({
        ok: true,
        fontFamilies: [...getFontData]
      });
    } catch (e) {
      console.error('There was an error Scraping the webpage:', e);
      res.json({
        ok: false,
        reason: 'Page responded with HTTP status 404',
      });
    }
  });

  return new Promise((resolve, reject) => {
    const _server = app.listen(port, err => {
      if (err) {
        reject(err);
        return;
      }
      console.log(`App listening on port ${port}.`);
      resolve(_server);
    });
  });
}
