import{test,expect} from '@playwright/test'
test('Homepage', async({page})=>{
    await page.goto("https://demoblaze.com/");
    await page.locator("#login2").click();
    await page.locator("#loginusername").fill("pavanol");
    await page.locator("#loginpassword").fill("test@123");
    await page.locator("//button[text()='Log in']").click();
    
})