# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api2.spec.ts >> Create A product API
- Location: tests/api2.spec.ts:51:5

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
  46  |     //check if products length is 15
  47  |     // expect(data.length).toBe(5);
  48  | 
  49  | })
  50  | 
  51  | test('Create A product API', async ({ request }) => {
  52  | 
  53  |     const response = await request.post('https://automationexercise.com/api/createProduct', {
  54  |         data: {
  55  |             name: "Sundress for Women",
  56  |             price: "Rs. 2000",
  57  |             brand: "Madame"
  58  |         },
  59  |         headers:{
  60  |             'Content-Type': 'application/json'
  61  |         }
  62  |     })
> 63  |     const responseBody = await response.json();
      |                          ^ SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
  64  |     console.log(responseBody);
  65  |     expect(response.status()).toBe(201);
  66  | 
  67  | })
  68  | 
  69  | test('Verify Login with Invalid Details', async ({ request }) => {
  70  |     const response = await request.post('https://automationexercise.com/api/verifyLogin', {
  71  |         data: {
  72  |             email: "Binary@1234.com",
  73  |             password: "Binary@1234"
  74  |         }
  75  |     })
  76  |     console.log(await response.json());
  77  |     expect(response.status()).toBe(200);
  78  | })
  79  | 
  80  | test('Update Invalid User Details', async ({ request }) => {
  81  |     const response = await request.put('https://automationexercise.com/api/updateAccount', {
  82  |         data: {
  83  |             password: "Binarys@1234"
  84  |         }
  85  |     })
  86  |     console.log(await response.json());
  87  |     expect(response.status()).toBe(200);
  88  |     expect(await response.json()).toEqual({ "message": "Bad request, email parameter is missing in PUT request." });
  89  | })
  90  | 
  91  | test('Delete Invalid User Details', async ({ request }) => {
  92  |     const response = await request.delete('https://automationexercise.com/api/deleteAccount', {
  93  |         data: {
  94  |             email: "Binary@1234.com",
  95  |             password: "Binary@1234"
  96  |         }
  97  |     })
  98  |     const responseBody = await response.json();
  99  |     console.log(responseBody);
  100 |     expect(response.status()).toBe(200);
  101 |     expect(responseBody).toEqual({
  102 |         "responseCode": 400,
  103 |         "message": "Bad request, email parameter is missing in DELETE request."
  104 |     });
  105 | })
```