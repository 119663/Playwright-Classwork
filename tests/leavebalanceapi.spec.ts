import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config({path: '.env/.env.test'});

let token: string;
const baseUrl = process.env.BASE_URL;
const auth_company_id = process.env.AUTH_COMPANY_ID;
test.beforeAll(async ({ request }) => {
    // const response = await request.post('https://ecommerce-playground.lambdatest.io/index.php?route=account/login', {
    const response = await request.post(`${baseUrl}/user/login/`, {
        data: {
            email: process.env.EMAIL!,
            password: process.env.PASSWORD!
        },
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Connection": "keep-alive",
            'User-Agent': 'PostmanRuntime/7.39.0'
        }
    })

    const responseText = await response.text();

    expect(response.status()).toBe(200);

    const loginResponse = await response.json();
    console.log(loginResponse);

    token = loginResponse.token;
});

test("Get, Add, Update, Delete Leave Balance", async ({ request }) => {

    //get leave balance
    const getResponse = await request.get(`${baseUrl}/leave/hrm/leave-balances/?auth_company_id=${auth_company_id}`, {
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    })

    const getResponseBody = await getResponse.json();
    console.log(getResponseBody);

    expect(getResponse.status()).toBe(200);
    expect(getResponseBody).toBeDefined();

})
