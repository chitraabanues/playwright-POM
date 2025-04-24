import{test,expect} from '@playwright/test'
test('homepage', async({page})=>{
    await page.goto("https://demoblaze.com/");
    await page.screenshot({path:'tests/screenshots/'+Date.now()+'Homepage.png'});
})
test('Homepage-full', async({page})=>{
    await page.goto("https://demoblaze.com/");
    await page.screenshot({path:'tests/screenshots/'+Date.now()+'fullpage.png',fullPage:true});
})
test('Homepage-Locator', async({page})=>{
    await page.goto("https://demoblaze.com/");
    await page.locator("#login2").click();
    await page.locator("#loginusername").fill("pavanol");
    await page.locator("#loginpassword").fill("test@123");
    await page.locator("//button[text()='Log in']").screenshot({path:'test/scressnshots/'+Date.now()+'LoginPage.png'})
    await page.screenshot({path:'tests/screenshots/'+Date.now()+'fullpage.png',fullPage:true});
})