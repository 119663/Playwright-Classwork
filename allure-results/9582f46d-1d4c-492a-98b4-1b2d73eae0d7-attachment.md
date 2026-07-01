# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api.spec.ts >> Delete Invalid User Details
- Location: tests/api.spec.ts:50:5

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  - 1
+ Received  + 1

  Object {
    "message": "Bad request, email parameter is missing in DELETE request.",
-   "response_code": 400,
+   "responseCode": 400,
  }
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | //pass page instead of request for api
  4  | test('Get All Products API', async ({ request }) => {
  5  | 
  6  |     const response = await request.get('https://automationexercise.com/api/productsList')
  7  | 
  8  |     console.log(await response.json());
  9  | 
  10 |     expect(response.status()).toBe(200);
  11 | })
  12 | 
  13 | test('Create A product API', async ({ request }) => {
  14 | 
  15 |     const response = await request.post('https://automationexercise.com/api/createProduct', {
  16 |       data:{
  17 |         name: "Sundress for Women",
  18 |         price: "Rs. 2000",
  19 |         brand : "Madame"
  20 |       }
  21 |     })
  22 |     const responseBody = await response.json();
  23 |     console.log(responseBody);
  24 |     expect(response.status()).toBe(201);
  25 | 
  26 | })
  27 | 
  28 | test ('Verify Login with Invalid Details', async ({ request }) => {
  29 |     const response = await request.post('https://automationexercise.com/api/verifyLogin', {
  30 |         data:{
  31 |             email: "Binary@1234.com",
  32 |             password: "Binary@1234"
  33 |         }
  34 |     })
  35 |     console.log(await response.json());
  36 |     expect(response.status()).toBe(200);
  37 | })
  38 | 
  39 | test ('Update Invalid User Details', async ({ request }) => {
  40 |     const response = await request.put('https://automationexercise.com/api/updateAccount', {
  41 |         data:{
  42 |             password: "Binarys@1234"
  43 |         }
  44 |     })
  45 |     console.log(await response.json());
  46 |     expect(response.status()).toBe(200);
  47 |         expect(await response.json()).toEqual({ "message": "Bad request, email parameter is missing in PUT request." });
  48 | })
  49 | 
  50 | test ('Delete Invalid User Details', async ({ request }) => {
  51 |     const response = await request.delete('https://automationexercise.com/api/deleteAccount', {
  52 |         data:{
  53 |              email: "Binary@1234.com",
  54 |             password: "Binary@1234"
  55 |         }
  56 |     })
  57 |     const responseBody = await response.json();
  58 |     console.log(responseBody);
  59 |     expect(response.status()).toBe(200);
> 60 |     expect (responseBody).toEqual({ 
     |                           ^ Error: expect(received).toEqual(expected) // deep equality
  61 |         "response_code": 400,
  62 |         "message": "Bad request, email parameter is missing in DELETE request."
  63 |      });
  64 |     })
```