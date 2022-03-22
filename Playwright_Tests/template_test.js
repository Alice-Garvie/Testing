const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext({
      recordVideo: {
          dir: 'videos'
      }
  });

  // Open new page
  const page = await context.newPage();

  // Go to https://dev.securigo.co.uk/
  await page.goto('https://dev.securigo.co.uk/');

  // Click text=Login
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://dev.securigo.co.uk/login' }*/),
    page.locator('text=Login').click()
  ]);

  // Click [placeholder="Enter your username\.\.\."]
  await page.locator('[placeholder="Enter your username\\.\\.\\."]').click();

  // Fill [placeholder="Enter your username\.\.\."]
  await page.locator('[placeholder="Enter your username\\.\\.\\."]').fill('agarv625');

  // Click [placeholder="Enter your password\.\.\."]
  await page.locator('[placeholder="Enter your password\\.\\.\\."]').click();

  // Fill [placeholder="Enter your password\.\.\."]
  await page.locator('[placeholder="Enter your password\\.\\.\\."]').fill('T*GNhCbfj(En');

  // Click #loginPage a:has-text("Login")
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://dev.securigo.co.uk/' }*/),
    page.locator('#loginPage a:has-text("Login")').click()
  ]);




  // takes a screenshot
  await page.screenshot({path: 'screens/recruitment_screen.png'});




  // ---------------------
  await context.close();
  await browser.close();
})();