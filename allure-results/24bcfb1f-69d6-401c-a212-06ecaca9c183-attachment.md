# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: leavebalanceapi.spec.ts >> Get, Add, Update, Delete Leave Balance
- Location: tests/leavebalanceapi.spec.ts:25:5

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
  11 | 
  12 |     const responseText = await response.text();
  13 | 
  14 |     console.log('Status:', response.status());
  15 |     console.log('Body:', responseText);
  16 |     
> 17 |     expect(response.status()).toBe(200);
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  18 | 
  19 |     const loginResponse = await response.json();
  20 |     console.log(loginResponse);
  21 | 
  22 |     token = loginResponse.data.token;
  23 | });
  24 | 
  25 | test("Get, Add, Update, Delete Leave Balance", async ({ request }) => {
  26 | 
  27 |     //get leave balance
  28 |     const getResponse = await request.get('https://test.workpay.co.ke/api/v2//leave/hrm/leave-balances/?auth_company_id=1073', {
  29 |         headers: {
  30 |             "Authorization": `Bearer ${token}`,
  31 |             "Content-Type": "application/json",
  32 |             "Accept": "application/json"
  33 |         }
  34 |     })
  35 | 
  36 |     const getResponseBody = await getResponse.json();
  37 |     console.log(getResponseBody);
  38 | 
  39 |     expect(getResponse.status()).toBe(200);
  40 |     expect(getResponseBody).toBeDefined();
  41 | 
  42 | })
```