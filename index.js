const { Keyboard } = require('puppeteer');
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const { executablePath } = require('puppeteer')
const cheerio = require("cheerio");

puppeteer.use(StealthPlugin());

(async () => {
   const browser = await puppeteer.launch({
      headless: true,
      args:[
         '--no-sandbox',
         '--disable-gpu',
         '--enable-webgl',
         '--window-size=800,800'
      ],
      executablePath: executablePath(),
      // devtools: true,
   }); 

   const page = await browser.newPage();

  await gotoForm(page);
  console.log('投票します...')

  let i = 0
  while (true) {
    const html = await page.content();
    const $ = cheerio.load(html);

    await clickAndSubmit(page);
    const linkToReturnPath = "a[href='https://docs.google.com/forms/d/e/1FAIpQLSczBmZtKOyWQkWdEAyF9yxB5vn4MmSVrcGpi5den2w43dGOXw/viewform?usp=form_confirm']"
    await page.waitForSelector(linkToReturnPath)
    await page.click(linkToReturnPath)

    await page.waitForSelector("span[class='NPEfkd RveJvd snByac']");

    i += 1
    console.log(`投票しました: ${i}回目`)
  }
})();

async function gotoForm(page) {
  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSczBmZtKOyWQkWdEAyF9yxB5vn4MmSVrcGpi5den2w43dGOXw/viewform"
  await page.goto(formUrl);
}

async function clickAndSubmit(page) {
  await page.waitForSelector("span[class='NPEfkd RveJvd snByac']");

  await page.evaluate(() => {
    // setup
    const targetName = '058 HACHI 89-ハチキュウ-';
    const listElements = [...document.querySelectorAll("div[role='list'] span[dir='auto']")]
    const targetIndex = listElements.findIndex(el => el.textContent === targetName)
    const targetEl = listElements[targetIndex]
    listElements.splice(targetIndex, 1)
    // /setup

    // click target
    targetEl.click()
    // click other randomly
    listElements[Math.floor(Math.random()*listElements.length)].click()
    // submit
    document.querySelector("div[role='button']").click()
  })

  await page.waitForTimeout(10000)
}
