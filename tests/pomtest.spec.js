import {test,expect} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { CartPage } from "../pages/CartPage";
test('Add to cart', async ({page}) =>{
   
    //Login Page
    const login=new LoginPage(page);
    await login.goToLoginPage();
    await login.login('pavanol','test@123')
    
    //Homepage
    const home=new HomePage(page);
    await home.addProductToCart("Samsung galaxy S6")
    await home.goToCart();
    
    //checking the product in cart
    const cart=new CartPage(page);
    await page.waitForTimeout(3000)
    const status=await cart.checkProduct("Samsung galaxy s6")
    expect(status).toBe(true)
    //console.log(status);

})