import { test, expect } from '@playwright/test';

test('Verify Registration of an Account', async({ page }) => {

    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');

    await expect(page).toHaveTitle('Register Account');

    await page.locator('//input[@id="input-firstname"]').fill('Mat');
    // await page.locator("#input-lastname").fill('Xinabot');
    await page.locator('//input[@id="input-lastname"]').fill('Xinabot');
    await page.locator('//input[@id="input-email"]').fill('xibanotsba@botkind.com');
    await page.locator('//input[@id="input-telephone"]').fill('0700000000');
    await page.locator('//input[@id="input-password"]').fill('Binary@1234');
    await page.locator('//input[@id="input-confirm"]').fill('Binary@1234');
    
    await page.locator('//input[@id="input-newsletter-no"]').check(); 

    await page.locator('//div[@class="custom-control custom-checkbox custom-control-inline"]').click();

    await page.locator('//input[@value ="Continue"]').click(); 

    await expect(page).toHaveTitle(' Your Account Has Been Created!');
});

test('Verify Login of an Account', async({ page}) =>{

    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');

    await expect(page).toHaveTitle('Account Login');

    await page.locator('//input[@id="input-email"]').fill('xibanot768@matkind.com');
    await page.locator('//input[@id="input-password"]').fill('Binary@1234'); 

    await page.locator('//input[@value="Login"]').click();

    await expect(page).toHaveTitle('My Account');
})