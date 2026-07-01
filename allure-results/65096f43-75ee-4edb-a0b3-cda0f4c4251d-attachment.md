# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api.spec.ts >> Get All Products API
- Location: tests/api.spec.ts:4:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 15
Received: undefined
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
  8  |     //convert response to json
  9  |     const data = await response.json();
  10 |     console.log(data);
  11 | 
  12 |     expect(response.status()).toBe(200);
  13 |     expect(response.ok()).toBeTruthy();
  14 | 
  15 |     //check if response code is 200
  16 |     expect(data.responseCode).toBe(200);
  17 |     //check if products is not empty
  18 |     expect(data.products.length).toBeGreaterThan(0);
  19 |     //check if products is an array
  20 |     expect(Array.isArray(data.products)).toBeTruthy();
  21 | 
  22 |     //check if first product id is 1
  23 |     expect(data.products[0].id).toBe(1);
  24 | 
  25 |     //check if products length is 15
> 26 |     expect(data.length).toBe(15);
     |                         ^ Error: expect(received).toBe(expected) // Object.is equality
  27 | 
  28 | })
  29 | 
  30 | test('Create A product API', async ({ request }) => {
  31 | 
  32 |     const response = await request.post('https://automationexercise.com/api/createProduct', {
  33 |         data: {
  34 |             name: "Sundress for Women",
  35 |             price: "Rs. 2000",
  36 |             brand: "Madame"
  37 |         }
  38 |     })
  39 |     const responseBody = await response.json();
  40 |     console.log(responseBody);
  41 |     expect(response.status()).toBe(201);
  42 | 
  43 | })
  44 | 
  45 | test('Verify Login with Invalid Details', async ({ request }) => {
  46 |     const response = await request.post('https://automationexercise.com/api/verifyLogin', {
  47 |         data: {
  48 |             email: "Binary@1234.com",
  49 |             password: "Binary@1234"
  50 |         }
  51 |     })
  52 |     console.log(await response.json());
  53 |     expect(response.status()).toBe(200);
  54 | })
  55 | 
  56 | test('Update Invalid User Details', async ({ request }) => {
  57 |     const response = await request.put('https://automationexercise.com/api/updateAccount', {
  58 |         data: {
  59 |             password: "Binarys@1234"
  60 |         }
  61 |     })
  62 |     console.log(await response.json());
  63 |     expect(response.status()).toBe(200);
  64 |     expect(await response.json()).toEqual({ "message": "Bad request, email parameter is missing in PUT request." });
  65 | })
  66 | 
  67 | test('Delete Invalid User Details', async ({ request }) => {
  68 |     const response = await request.delete('https://automationexercise.com/api/deleteAccount', {
  69 |         data: {
  70 |             email: "Binary@1234.com",
  71 |             password: "Binary@1234"
  72 |         }
  73 |     })
  74 |     const responseBody = await response.json();
  75 |     console.log(responseBody);
  76 |     expect(response.status()).toBe(200);
  77 |     expect(responseBody).toEqual({
  78 |         "responseCode": 400,
  79 |         "message": "Bad request, email parameter is missing in DELETE request."
  80 |     });
  81 | })
```