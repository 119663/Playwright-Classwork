# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: leavebalanceapi.spec.ts >> Get, Add, Update, Delete Leave Balance
- Location: tests/leavebalanceapi.spec.ts:35:5

# Error details

```
TypeError: apiRequestContext.post: Invalid URL
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import dotenv from 'dotenv';
  3  | dotenv.config();
  4  | 
  5  | let token: string;
  6  | const baseUrl = process.env.BASE_URL;
  7  | test.beforeAll(async ({ request }) => {
  8  |     console.log('Base URL in beforeAll:', baseUrl);
  9  |     // const response = await request.post('https://ecommerce-playground.lambdatest.io/index.php?route=account/login', {
> 10 |     const response = await request.post(`${baseUrl}/user/login/`, {
     |                                    ^ TypeError: apiRequestContext.post: Invalid URL
  11 |         multipart: {
  12 |             email:"process.env.EMAIL",
  13 |             password: "process.env.PASSWORD"
  14 |         }
  15 |         // headers: {
  16 |         //     "Content-Type": "application/json",
  17 |         //     "Accept": "application/json",
  18 |         //     "Connection": "keep-alive"
  19 |         // }
  20 |     })
  21 | 
  22 |     const responseText = await response.text();
  23 | 
  24 |     console.log('Status:', response.status());
  25 |     console.log('Body:', responseText);
  26 | 
  27 |     expect(response.status()).toBe(200);
  28 | 
  29 |     const loginResponse = await response.json();
  30 |     console.log(loginResponse);
  31 | 
  32 |     token = loginResponse.token;
  33 | });
  34 | 
  35 | test("Get, Add, Update, Delete Leave Balance", async ({ request }) => {
  36 | 
  37 |     //get leave balance
  38 |     const getResponse = await request.get('https://test.workpay.co.ke/api/v2//leave/hrm/leave-balances/?auth_company_id=1073', {
  39 |         headers: {
  40 |             "Authorization": `Bearer ${token}`,
  41 |             "Content-Type": "application/json",
  42 |             "Accept": "application/json"
  43 |         }
  44 |     })
  45 | 
  46 |     const getResponseBody = await getResponse.json();
  47 |     console.log(getResponseBody);
  48 | 
  49 |     expect(getResponse.status()).toBe(200);
  50 |     expect(getResponseBody).toBeDefined();
  51 | 
  52 | })
  53 | 
```