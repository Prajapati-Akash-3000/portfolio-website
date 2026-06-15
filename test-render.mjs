import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));
  page.on('pageerror', err => console.log('BROWSER ERROR:', err.toString()));

  try {
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle0', timeout: 10000 });
    const content = await page.content();
    if (content.includes('Something went wrong')) {
      console.log('REACT ERROR RENDERED.');
    } else {
      console.log('PAGE LOADED SUCCESSFULLY.');
    }
  } catch (e) {
    console.log('FAILED TO LOAD PAGE:', e.message);
  }
  
  await browser.close();
})();
