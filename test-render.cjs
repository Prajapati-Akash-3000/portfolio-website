const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log('BROWSER ERROR:', msg.text());
    }
  });
  
  page.on('pageerror', err => {
    console.log('PAGE ERROR:', err.toString());
  });

  await page.goto('http://localhost:5173', { waitUntil: 'networkidle2' }).catch(e => console.log(e));
  
  const content = await page.content();
  if (content.includes('Something went wrong')) {
    console.log("ErrorBoundary triggered!");
  } else if (content.includes('<div id="root"></div>')) {
    console.log("Page is empty!");
  }
  
  await browser.close();
})();
