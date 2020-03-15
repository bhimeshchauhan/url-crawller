import puppeteer from 'puppeteer';
import BFSTree from './bfs';

class Crawler {

  constructor(maxPagesToVisit, url, crawlRelative) {
    this.pagesToVisit = [];
    this.numPagesVisited = 0;
    this.pagesVisited = {};
    this.maxPagesToVisit = maxPagesToVisit;
    this.url = url;
    this.crawlRelative = crawlRelative;
    this.allFontsUsed = [];
    this.mainCrawler = this.mainCrawler.bind(this);
    this.depthCrawl = this.depthCrawl.bind(this);
    this.scrapePage = this.scrapePage.bind(this);
  }

  async mainCrawler(){
    console.log(this.numPagesVisited);
    console.log(this.url);
    // if (this.crawlRelative === 'depthCrawl') {
    //   this.pagesToVisit.push(this.url);
    //   const data = await this.depthCrawl()
    //   // return new Set(data);
    // }
    await this.depthCrawl()
  }

  // async depthCrawl(){
  //   console.log(new Set(this.allFontsUsed));
  //   if (this.numPagesVisited >= this.maxPagesToVisit){
  //     console.log("Reached maximum limit of pages to visit!");
  //     return;
  //   }
  //   const nextPage = this.pagesToVisit.shift();
  //   console.log(nextPage);
  //   if (nextPage in this.pagesVisited){
  //     this.depthCrawl();
  //   } else {
  //     return await this.scrapePage(nextPage);
  //   }
  // }

  async scrapePage(url) {
  //   const browser = await puppeteer.launch();
  //   const page = await browser.newPage();
  //   let response;
  //   let evaluate;
  //   try {
  //     response = await page.goto(url, {waitUntil: 'networkidle2'});
  //   } catch (e) {
  //     console.error('Not able to visit this url: ', url);
  //     this.pagesVisited[url] = true;
  //     this.depthCrawl();
  //   }
  //   if (response.status() >= 400){
  //     this.pagesVisited[url] = true;
  //     this.depthCrawl();
  //   }
  //   this.pagesVisited[url] = true;
  //   this.numPagesVisited++;
    evaluate = await page.evaluate(() => {
      // eslint-disable-next-line no-undef

      // const nodes = document.body.getElementsByTagName("*");
      // return [...nodes].map(currentNode => {
      //   let style;
      //   if (currentNode.style){
      //     // eslint-disable-next-line no-undef
      //     style = currentNode.style.fontFamily || getComputedStyle(currentNode).getPropertyValue('font-family');
      //     if (style){
      //       console.log('style', style)
      //       return Promise.resolve(style);
      //     }
      //   }
      // });
    });
  //
  //   evaluate.forEach(fonts => {
  //     this.allFontsUsed.push(fonts);
  //   });
  //
  //
  //   const allInternalLinks = await page.$$eval('a', as => as.map(a => a.href));
  //   allInternalLinks.forEach(link => {
  //     this.pagesToVisit.push(link);
  //   });
  //
    await browser.close();
  //   this.depthCrawl();
  //   // console.log(this.allFontsUsed)
  //   // Promise.all(this.allFontsUsed).then(function(values) {
  //   //   return values;
  //   // });
  // }
}

export default Crawler;
