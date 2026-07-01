# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: leavebalanceapi.spec.ts >> Get, Add, Update, Delete Leave Balance
- Location: tests/leavebalanceapi.spec.ts:37:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 400
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import dotenv from 'dotenv';
  3  | dotenv.config({path: '.env/.env.test'});
  4  | 
  5  | let token: string;
  6  | const baseUrl = process.env.BASE_URL;
  7  | const email = process.env.EMAIL;
  8  | test.beforeAll(async ({ request }) => {
  9  |     // const response = await request.post('https://ecommerce-playground.lambdatest.io/index.php?route=account/login', {
  10 |     const response = await request.post(`${baseUrl}/user/login/`, {
  11 |         multipart: {
  12 |             // email: process.env.EMAIL!,
  13 |             email: `${email}`,
  14 |             password: process.env.PASSWORD!
  15 |         },
  16 |         headers: {
  17 |             "Content-Type": "application/json",
  18 |             "Accept": "application/json",
  19 |             "Connection": "keep-alive",
  20 |             'User-Agent': 'PostmanRuntime/7.39.0'
  21 |         }
  22 |     })
  23 | 
  24 |     const responseText = await response.text();
  25 | 
  26 |     console.log('Status:', response.status());
  27 |     console.log('Body:', responseText);
  28 | 
> 29 |     expect(response.status()).toBe(200);
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  30 | 
  31 |     const loginResponse = await response.json();
  32 |     console.log(loginResponse);
  33 | 
  34 |     token = loginResponse.token;
  35 | });
  36 | 
  37 | test("Get, Add, Update, Delete Leave Balance", async ({ request }) => {
  38 | 
  39 |     //get leave balance
  40 |     const getResponse = await request.get('https://test.workpay.co.ke/api/v2//leave/hrm/leave-balances/?auth_company_id=1073', {
  41 |         headers: {
  42 |             "Authorization": `Bearer ${token}`,
  43 |             "Content-Type": "application/json",
  44 |             "Accept": "application/json"
  45 |         }
  46 |     })
  47 | 
  48 |     const getResponseBody = await getResponse.json();
  49 |     console.log(getResponseBody);
  50 | 
  51 |     expect(getResponse.status()).toBe(200);
  52 |     expect(getResponseBody).toBeDefined();
  53 | 
  54 | })
  55 | 
```