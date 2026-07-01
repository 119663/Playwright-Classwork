import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

type myFixtures = {
    mylogin: LoginPage;
};

export const test = base.extend<myFixtures>({
    mylogin: async ({ page }, use) => {
        const mylogin = new LoginPage(page);
        await page.goto('/index.php?route=account/login');
        await page.fill('#input-email', 'xibanot768@matkind.com');
        await page.fill('#input-password', 'Binary@1234');
        await page.click('input[value="Login"]');

        await use(mylogin);
    }
});

export { expect } from '@playwright/test';
