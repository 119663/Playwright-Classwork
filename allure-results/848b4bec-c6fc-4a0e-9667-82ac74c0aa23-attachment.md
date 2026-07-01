# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: leavebalanceapi.spec.ts >> Get, Add, Update, Delete Leave Balance
- Location: tests/leavebalanceapi.spec.ts:32:5

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
  6  |     // const response = await request.post('https://ecommerce-playground.lambdatest.io/index.php?route=account/login', {
> 7  |     const response = await request.post(`${baseUrl} /user/login/`, {
     |                                    ^ TypeError: apiRequestContext.post: Invalid URL
  8  |         multipart: {
  9  |             email:"process.env.EMAIL",
  10 |             password: "process.env.PASSWORD"
  11 |         }
  12 |         // headers: {
  13 |         //     "Content-Type": "application/json",
  14 |         //     "Accept": "application/json",
  15 |         //     "Connection": "keep-alive"
  16 |         // }
  17 |     })
  18 | 
  19 |     const responseText = await response.text();
  20 | 
  21 |     console.log('Status:', response.status());
  22 |     console.log('Body:', responseText);
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
  43 |     const getResponseBody = await getResponse.json();
  44 |     console.log(getResponseBody);
  45 | 
  46 |     expect(getResponse.status()).toBe(200);
  47 |     expect(getResponseBody).toBeDefined();
  48 | 
  49 | })
  50 | 
```