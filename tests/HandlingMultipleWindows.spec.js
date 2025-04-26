import{test,expect,chromium} from '@playwright/test'
test('multiple windows', async()=>{
    const browser=await chromium.launch()
    const context=await browser.newContext();
    const page1=await context.newPage()
    const page2=await context.newPage()
    await page1.goto('https://demoblaze.com/')
    await page2.goto('https://www.opencart.com/index.php?route=cms/demo')
   

})
test.only('handling Event', async()=>{
    const browser=await chromium.launch()
    const context=await browser.newContext();
    //const page1=await context.newPage()
    const page2=await context.newPage()
    //await page1.goto('https://demoblaze.com/')
    await page2.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    const pagePromise=context.waitForEvent('page')
    await page2.locator("//a[text()='OrangeHRM, Inc']").click()
    await page2.waitForTimeout(3000)
    await pagePromise;

   

})