exports.LoginPage=class LoginPage{
    constructor(page)
    {
        this.page=page;
        this.loginPage="//a[text()='Log in']";
        this.userName='#loginusername';
        this.passWord='#loginpassword';
        this.loginButton="//button[text()='Log in']";
    }
    async goToLoginPage()
    {
        await this.page.goto('https://demoblaze.com/')
    }
    async login(username,password)
    {
        await this.page.locator(this.loginPage).click()
        await this.page.locator(this.userName).fill(username)
        await this.page.locator(this.passWord).fill(password)
        await this.page.locator(this.loginButton).click()
    }

}