exports.HomePage=
class HomePage{
    constructor(page)
    {
        this.page=page;
        this.productList='//div[@id="tbodyid"]/div/div/div/h4/a';
        this.addToCart='//a[text()="Add to cart"]';
        this.cart='#cartur';
    }
    async addProductToCart(productName)
    {
        await this.page.locator(this.productList,{hasText:productName}).first().click();
        await this.page.locator(this.addToCart).click();
        this.page.on('dialog',async(dialog)=>{
            if(dialog.message().includes('added'))
            await dialog.accept()
        })
        
        
    }
    async goToCart()
        {
        await this.page.locator(this.cart).click()
        }
}