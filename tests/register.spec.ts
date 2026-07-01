import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/register';
import { generateCustomerData } from '../test-data/customerdata';
import { dataStore } from '../utils_helper/dataStore';
import { LoginPage } from '../pages/loginPage';

test('Register new user', async ({ page }) => {

    const registerPage = new RegisterPage(page);

    await registerPage.navigate();

    await expect(page).toHaveTitle('Register Account');

    const registerData = await generateCustomerData();

    await registerPage.register(
        registerData.first_name,
        registerData.last_name,
        registerData.email as string,
        registerData.phone_number,
        registerData.password,
        registerData.confirm_password

        // 'Mat', 
        // 'Xinabota', 
        // 'xibanot7689@matkind.com', 
        // '0700000000', 
        // 'Binary@1234', 
        // 'Binary@1234'
    );
    console.log("password: " + registerData.password);
    console.log("email: " + registerData.email);

    dataStore.set('email', registerData.email);
    dataStore.set('password', registerData.password);

    await expect(page).toHaveTitle(' Your Account Has Been Created!');
});

test('Login after registration', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login(
        dataStore.get('email'),
        dataStore.get('password')
    );
    await expect(page).toHaveTitle('My Account');
});