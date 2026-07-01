# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api2.spec.ts >> Get All Products API
- Location: tests/api2.spec.ts:4:5

# Error details

```
SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | //pass page instead of request for api
  4   | test('Get All Products API', async ({ request }) => {
  5   | 
  6   |     const response = await request.get('https://automationexercise.com/api/productsList')
  7   | 
  8   |     //convert response to json
  9   |     const data = await response.json();
  10  |     console.log(data);
  11  | 
  12  |     expect(response.status()).toBe(200);
  13  |     expect(response.ok()).toBeTruthy();
  14  | 
  15  |     //check if response code is 200
  16  |     expect(data.responseCode).toBe(200);
  17  |     //check if products is not empty
  18  |     expect(data.products.length).toBeGreaterThan(0);
  19  |     //check if products is an array
  20  |     expect(Array.isArray(data.products)).toBeTruthy();
  21  | 
  22  |     //check if first product id is 1
  23  |     expect(data.products[0].id).toBe(1);
  24  | 
  25  |     //better way to check first product details exp if nested object is there
  26  |     const firstProduct = data.products[0];
  27  |     expect(firstProduct.id).toBe(1);
  28  |     expect(firstProduct.name).toBe('Blue Top');
  29  |     expect(firstProduct.price).toBe('Rs. 500');
  30  |     expect(firstProduct.brand).toBe('Polo');
  31  |     expect(firstProduct.category).toBeDefined();
  32  | 
  33  |     //check if all products have id, name, price and brand
  34  |     for (const product of data.products) {
  35  |         expect(product.id).toBeDefined();
  36  |         expect(product.id).not.toBeNull();
  37  |         expect(typeof product.id).toBe('number');
  38  |         expect(product.id).toBeGreaterThan(0);
  39  |         expect(product.name).toBeDefined();
  40  |         expect(product.name).not.toBeNull();
  41  |         expect(typeof product.name).toBe('string');
  42  |         expect(product.price).toBeDefined();
  43  |         expect(product.brand).toBeDefined();
  44  |     }
  45  | 
  46  |     const postresponse = await request.post('https://automationexercise.com/api/createProduct', {
  47  |         data: {
  48  |             name: "Sundress for Women",
  49  |             price: "Rs. 2000",
  50  |             brand: "Madame"
  51  |         },
  52  |         headers: {
  53  |             'Content-Type': 'application/json'
  54  |         }
  55  |     })
> 56  |     const responseBody = await postresponse.json();
      |                          ^ SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
  57  |     console.log(responseBody);
  58  |     expect(postresponse.status()).toBe(201);
  59  | 
  60  |     //check if products length is 15
  61  |     // expect(data.length).toBe(5);
  62  | 
  63  | })
  64  | 
  65  | 
  66  | test('Verify Login with Invalid Details', async ({ request }) => {
  67  |     const response = await request.post('https://automationexercise.com/api/verifyLogin', {
  68  |         data: {
  69  |             email: "Binary@1234.com",
  70  |             password: "Binary@1234"
  71  |         }
  72  |     })
  73  |     console.log(await response.json());
  74  |     expect(response.status()).toBe(200);
  75  | })
  76  | 
  77  | test('Update Invalid User Details', async ({ request }) => {
  78  |     const response = await request.put('https://automationexercise.com/api/updateAccount', {
  79  |         data: {
  80  |             password: "Binarys@1234"
  81  |         }
  82  |     })
  83  |     console.log(await response.json());
  84  |     expect(response.status()).toBe(200);
  85  |     expect(await response.json()).toEqual({ "message": "Bad request, email parameter is missing in PUT request." });
  86  | })
  87  | 
  88  | test('Delete Invalid User Details', async ({ request }) => {
  89  |     const response = await request.delete('https://automationexercise.com/api/deleteAccount', {
  90  |         data: {
  91  |             email: "Binary@1234.com",
  92  |             password: "Binary@1234"
  93  |         }
  94  |     })
  95  |     const responseBody = await response.json();
  96  |     console.log(responseBody);
  97  |     expect(response.status()).toBe(200);
  98  |     expect(responseBody).toEqual({
  99  |         "responseCode": 400,
  100 |         "message": "Bad request, email parameter is missing in DELETE request."
  101 |     });
  102 | })
```