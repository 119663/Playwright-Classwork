# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: leavebalanceapi.spec.ts >> Get, Add, Update, Delete Leave Balance
- Location: tests/leavebalanceapi.spec.ts:32:5

# Error details

```
SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import dotenv from 'dotenv';
  3  | dotenv.config({path: '.env/.env.test'});
  4  | 
  5  | let token: string;
  6  | const baseUrl = process.env.BASE_URL;
  7  | test.beforeAll(async ({ request }) => {
  8  |     // const response = await request.post('https://ecommerce-playground.lambdatest.io/index.php?route=account/login', {
  9  |     const response = await request.post(`${baseUrl}/user/login/`, {
  10 |         data: {
  11 |             email: process.env.EMAIL!,
  12 |             password: process.env.PASSWORD!
  13 |         },
  14 |         headers: {
  15 |             "Content-Type": "application/json",
  16 |             "Accept": "application/json",
  17 |             "Connection": "keep-alive",
  18 |             'User-Agent': 'PostmanRuntime/7.39.0'
  19 |         }
  20 |     })
  21 | 
  22 |     const responseText = await response.text();
  23 | 
  24 |     expect(response.status()).toBe(200);
  25 | 
  26 |     const loginResponse = await response.json();
  27 |     console.log(loginResponse);
  28 | 
  29 |     token = loginResponse.token;
  30 | });
  31 | 
  32 | test("Get, Add, Update, Delete Leave Balance", async ({ request }) => {
  33 | 
  34 |     //get leave balance
  35 |     const getResponse = await request.get('https://test.workpay.co.ke/api/v2//leave/hrm/leave-balances/?auth_company_id=1073', {
  36 |         headers: {
  37 |             "Authorization": `Bearer ${token}`,
  38 |             "Content-Type": "application/json",
  39 |             "Accept": "application/json"
  40 |         }
  41 |     })
  42 | 
> 43 |     const getResponseBody = await getResponse.json();
     |                             ^ SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
  44 |     console.log(getResponseBody);
  45 | 
  46 |     expect(getResponse.status()).toBe(200);
  47 |     expect(getResponseBody).toBeDefined();
  48 | 
  49 | })
  50 | 
```