import { Page } from '@playwright/test';

export class LoginPage{
    readonly page:Page;
    readonly email
    readonly password
    readonly loginBtn


    constructor(page: Page) {
        this.page = page;
        this.email = page.locator('#input-email');
        this.password = page.locator('#input-password');
        this.loginBtn = page.locator('input[value="Login"]');
    }

    async navigate(){
        await this.page.goto('/index.php?route=account/login');
    }

    async login(email: string, password: string) {
        await this.email.fill(email);
        await this.password.fill(password);
        await this.loginBtn.click();
    }

}