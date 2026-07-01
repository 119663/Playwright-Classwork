# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: leavebalanceapi.spec.ts >> Get, Add, Update, Delete Leave Balance
- Location: tests/leavebalanceapi.spec.ts:30:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 403
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | let token: string;
  4  | test.beforeAll(async ({ request }) => {
  5  |     const response = await request.post('https://test.workpay.co.ke/api/v2/user/login/', {
  6  |         data: {
  7  |             email: "evel@myworkpay.com",
  8  |             password: "Evelyne@1234"
  9  |         },
  10 |         headers: {
  11 |             "Content-Type": "application/json",
  12 |             "Accept": "application/json",
  13 |             "Connection": "keep-alive"
  14 |         }
  15 |     })
  16 | 
  17 |     const responseText = await response.text();
  18 | 
  19 |     console.log('Status:', response.status());
  20 |     console.log('Body:', responseText);
  21 | 
> 22 |     expect(response.status()).toBe(200);
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  23 | 
  24 |     const loginResponse = await response.json();
  25 |     console.log(loginResponse);
  26 | 
  27 |     token = loginResponse.data.token;
  28 | });
  29 | 
  30 | test("Get, Add, Update, Delete Leave Balance", async ({ request }) => {
  31 | 
  32 |     //get leave balance
  33 |     const getResponse = await request.get('https://test.workpay.co.ke/api/v2//leave/hrm/leave-balances/?auth_company_id=1073', {
  34 |         headers: {
  35 |             "Authorization": `Bearer ${token}`,
  36 |             "Content-Type": "application/json",
  37 |             "Accept": "application/json"
  38 |         }
  39 |     })
  40 | 
  41 |     const getResponseBody = await getResponse.json();
  42 |     console.log(getResponseBody);
  43 | 
  44 |     expect(getResponse.status()).toBe(200);
  45 |     expect(getResponseBody).toBeDefined();
  46 | 
  47 | })
```