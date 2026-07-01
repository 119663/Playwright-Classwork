# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: leavebalanceapi.spec.ts >> Get, Add, Update, Delete Leave Balance
- Location: tests/leavebalanceapi.spec.ts:19:5

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
  9  |         }
  10 |     })
> 11 |     expect(response.status()).toBe(200);
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  12 | 
  13 |     const loginResponse = await response.json();
  14 |     console.log(loginResponse);
  15 | 
  16 |     token = loginResponse.token;
  17 | });
  18 | 
  19 | test("Get, Add, Update, Delete Leave Balance", async ({ request }) => {
  20 | 
  21 |     //get leave balance
  22 |     const getResponse = await request.get('https://test.workpay.co.ke/api/v2//leave/hrm/leave-balances/?auth_company_id=1073', {
  23 |         headers: {
  24 |             "Authorization": `Bearer ${token}`,
  25 |             "Content-Type": "application/json",
  26 |             "Accept": "application/json"
  27 |         }
  28 |     })
  29 | 
  30 |     const getResponseBody = await getResponse.json();
  31 |     console.log(getResponseBody);
  32 | 
  33 |     expect(getResponse.status()).toBe(200);
  34 |     expect(getResponseBody).toBeDefined();
  35 | 
  36 | })
```