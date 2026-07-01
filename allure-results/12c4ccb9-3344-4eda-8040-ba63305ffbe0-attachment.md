# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: leavebalanceapi.spec.ts >> Get, Add, Update, Delete Leave Balance
- Location: tests/leavebalanceapi.spec.ts:33:5

# Error details

```
TypeError: apiRequestContext.post: Invalid URL
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | let token: string;
  4  | const baseUrl = process.env.BASE_URL;
  5  | test.beforeAll(async ({ request }) => {
  6  |     console.log('Base URL in beforeAll:', baseUrl);
  7  |     // const response = await request.post('https://ecommerce-playground.lambdatest.io/index.php?route=account/login', {
> 8  |     const response = await request.post(`${baseUrl}/user/login/`, {
     |                                    ^ TypeError: apiRequestContext.post: Invalid URL
  9  |         multipart: {
  10 |             email:"process.env.EMAIL",
  11 |             password: "process.env.PASSWORD"
  12 |         }
  13 |         // headers: {
  14 |         //     "Content-Type": "application/json",
  15 |         //     "Accept": "application/json",
  16 |         //     "Connection": "keep-alive"
  17 |         // }
  18 |     })
  19 | 
  20 |     const responseText = await response.text();
  21 | 
  22 |     console.log('Status:', response.status());
  23 |     console.log('Body:', responseText);
  24 | 
  25 |     expect(response.status()).toBe(200);
  26 | 
  27 |     const loginResponse = await response.json();
  28 |     console.log(loginResponse);
  29 | 
  30 |     token = loginResponse.token;
  31 | });
  32 | 
  33 | test("Get, Add, Update, Delete Leave Balance", async ({ request }) => {
  34 | 
  35 |     //get leave balance
  36 |     const getResponse = await request.get('https://test.workpay.co.ke/api/v2//leave/hrm/leave-balances/?auth_company_id=1073', {
  37 |         headers: {
  38 |             "Authorization": `Bearer ${token}`,
  39 |             "Content-Type": "application/json",
  40 |             "Accept": "application/json"
  41 |         }
  42 |     })
  43 | 
  44 |     const getResponseBody = await getResponse.json();
  45 |     console.log(getResponseBody);
  46 | 
  47 |     expect(getResponse.status()).toBe(200);
  48 |     expect(getResponseBody).toBeDefined();
  49 | 
  50 | })
  51 | 
```