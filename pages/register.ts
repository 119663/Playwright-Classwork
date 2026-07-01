import { Page } from '@playwright/test';

export class RegisterPage {
    readonly page: Page;
    readonly firstName
    readonly lastName
    readonly email
    readonly telephone
    readonly password
    readonly confirmPassword
    readonly newsletter
    readonly privatePolicy
    readonly continueBtn

    constructor(page: Page) {
        this.page = page;
        this.firstName = page.locator('#input-firstname');
        this.lastName = page.locator('#input-lastname');
        this.email = page.locator('#input-email');
        this.telephone = page.locator('#input-telephone');
        this.password = page.locator('#input-password');
        this.confirmPassword = page.locator('#input-confirm');
        this.newsletter = page.locator('#input-newsletter-no');
        this.privatePolicy = page.locator('//div[@class="custom-control custom-checkbox custom-control-inline"]');
        this.continueBtn = page.locator('input[value="Continue"]');
    }

    async navigate(){
        await this.page.goto('/index.php?route=account/register');
    }

    async register(firstName: string, lastName: string, email: string, telephone: string, password: string, confirmPassword: string) {
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.email.fill(email);
        await this.telephone.fill(telephone);
        await this.password.fill(password);
        await this.confirmPassword.fill(confirmPassword);
        await this.newsletter.check();
        await this.privatePolicy.click();
        await this.continueBtn.click();
    }
}
