exports.CartPage=class CartPage{
    constructor(page)
    {
        this.page=page;
        this.product="//*[@id='tbodyid']/tr/td[2]";

    }
    async checkProduct(productName)
    {
        const productLists=await this.page.$$(this.product)
        for(const productList of productLists)
        {
            if(productName===await productList.textContent())
            {
                return true;
                break;
            }
        }
      /* const productLists=await this.page.locator(this.product).allTextContents();
       return productLists.some(products=>products.includes(productName));*/
    }
}