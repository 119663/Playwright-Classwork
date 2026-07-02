// import { test, expect } from '@playwright/test';
import{test, expect} from '../fixtures/myfixture';
import { LoginPage } from '../pages/loginPage';
import { dataStore } from '../utils_helper/dataStore';
import { faker } from '@faker-js/faker';
import users from '../test-data/users.json';
import dotenv from 'dotenv';

dotenv.config();

test('Login on system', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await expect(page).toHaveTitle('Account Login');

    //one user
    await loginPage.login(users[0].email, users[0].password);

    //login using password in env file
    await loginPage.login(users[0].email, process.env.password!);

    //loop users
    for (const user of users) {
        await loginPage.login(user.email, user.password);
    }

    await expect(page.locator("#WelcomeMessage")).toHaveText(users[0].expected);

    //login using faker and user data store
    // await loginPage.login(
    //     dataStore.get('email'),
    //     dataStore.get('password')
    //     // 'xibanot768@matkind.com', 
    //     // 'Binary@1234'
    // );

    await expect(page).toHaveTitle('My Account');
});


//loop users
users.forEach(user => {
    test(`Login test for ${user.email}`, async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.navigate();
        await loginPage.login(user.email, user.password);
        await expect(page.locator("#WelcomeMessage")).toHaveText(user.expected);

    })

})

test('Login test using fixture', async ({ mylogin, page }) => {
    await mylogin.navigate();
    await expect(page).toHaveTitle('My Account');
})

