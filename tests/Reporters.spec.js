import{test,expect} from '@playwright/test'
test('demoblaze',async({page})=>{
    await page.goto('https://demoblaze.com/')
    await expect(page).toHaveTitle('STORE')
})
test('opencart',async({page})=>{
    await page.goto('https://www.opencart.com/index.php?route=cms/demo')
    await expect(page).toHaveTitle('OpenCart - Demo')
})