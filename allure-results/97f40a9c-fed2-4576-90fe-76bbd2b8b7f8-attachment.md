# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: leavebalanceapi.spec.ts >> Get, Add, Update, Delete Leave Balance
- Location: tests/leavebalanceapi.spec.ts:31:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 302
Received: 200
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | let token: string;
  4  | test.beforeAll(async ({ request }) => {
  5  |     const response = await request.post('https://ecommerce-playground.lambdatest.io/index.php?route=account/login', {
  6  |     // const response = await request.post('https://test.workpay.co.ke/api/v2/user/login/', {
  7  |         data: {
  8  |             email: "xibanot768@matkind.com",
  9  |             password: "Binary@1234"
  10 |         },
  11 |         headers: {
  12 |             "Content-Type": "application/json",
  13 |             "Accept": "application/json",
  14 |             "Connection": "keep-alive"
  15 |         }
  16 |     })
  17 | 
  18 |     const responseText = await response.text();
  19 | 
  20 |     console.log('Status:', response.status());
  21 |     console.log('Body:', responseText);
  22 | 
> 23 |      expect(response.status()).toBe(302);
     |                                ^ Error: expect(received).toBe(expected) // Object.is equality
  24 | 
  25 |     const loginResponse = await response.json();
  26 |     console.log(loginResponse);
  27 | 
  28 |     token = loginResponse.token;
  29 | });
  30 | 
  31 | test("Get, Add, Update, Delete Leave Balance", async ({ request }) => {
  32 | 
  33 |     //get leave balance
  34 |     const getResponse = await request.get('https://test.workpay.co.ke/api/v2//leave/hrm/leave-balances/?auth_company_id=1073', {
  35 |         headers: {
  36 |             "Authorization": `Bearer ${token}`,
  37 |             "Content-Type": "application/json",
  38 |             "Accept": "application/json"
  39 |         }
  40 |     })
  41 | 
  42 |     const getResponseBody = await getResponse.json();
  43 |     console.log(getResponseBody);
  44 | 
  45 |     expect(getResponse.status()).toBe(200);
  46 |     expect(getResponseBody).toBeDefined();
  47 | 
  48 | })
  49 | 
```