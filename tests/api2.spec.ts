import { test, expect } from '@playwright/test';

//pass page instead of request for api
test('Get All Products API', async ({ request }) => {

    const response = await request.get('https://automationexercise.com/api/productsList',{
            headers: {
            'Content-Type': 'application/json',
            "Authorization ": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vdGVzdC53b3JrcGF5LmNvLmtlL2FwaS92Mi91c2VyL2xvZ2luIiwiaWF0IjoxNzgyNDAxNDQ4LCJleHAiOjE3ODI0NDQ2NDgsIm5iZiI6MTc4MjQwMTQ0OCwianRpIjoiTjZaWEhMRlc2TXJESGJzTyIsInN1YiI6IjE1MzI0IiwicHJ2IjoiNTFlMmQxNjcwNzdhNmQzYjE3ZjhiYzg1YTczZTg4MjViOWFkMDlkNiIsImFmIjoiZXlKcGRpSTZJa3haZFhkeFZXeGhPRkpSTm5rMk1pOVpNekZaVFdjOVBTSXNJblpoYkhWbElqb2lNMlJ3VkVaR2NUSTVhWGRUYkU4clNWUTJUMHRaWmtsMVowMVZWa0UyYUVvMWRVRlRVbkIxYTI5NGVqTnBaRnBTVWtOT0wzbG9RazlKUkcxcFlVaDFZeUlzSW0xaFl5STZJalJrTTJZNU1EaGlaRGxoTUdZMFltSXhOVEZqT1ROaU1tUmtPV0UwWmpnME5Ua3lNR0V5TldWa04yUXpOamt4TkRSaE16bGlaREE0WlRkaE5HRmlabVVpTENKMFlXY2lPaUlpZlE9PSJ9.YvAwdT_d0_2AyHh6xX7Y4NujUbqXKkmmDEzuxaMwbRA"
        }
})

    //convert response to json
    const data = await response.json();
    console.log(data);

    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();

    //check if response code is 200
    expect(data.responseCode).toBe(200);
    //check if products is not empty
    expect(data.products.length).toBeGreaterThan(0);
    //check if products is an array
    expect(Array.isArray(data.products)).toBeTruthy();

    //check if first product id is 1
    expect(data.products[0].id).toBe(1);

    //better way to check first product details exp if nested object is there
    const firstProduct = data.products[0];
    expect(firstProduct.id).toBe(1);
    expect(firstProduct.name).toBe('Blue Top');
    expect(firstProduct.price).toBe('Rs. 500');
    expect(firstProduct.brand).toBe('Polo');
    expect(firstProduct.category).toBeDefined();

    //check if all products have id, name, price and brand
    for (const product of data.products) {
        expect(product.id).toBeDefined();
        expect(product.id).not.toBeNull();
        expect(typeof product.id).toBe('number');
        expect(product.id).toBeGreaterThan(0);
        expect(product.name).toBeDefined();
        expect(product.name).not.toBeNull();
        expect(typeof product.name).toBe('string');
        expect(product.price).toBeDefined();
        expect(product.brand).toBeDefined();
    }

    const postresponse = await request.post('https://automationexercise.com/api/createProduct', {
        data: {
            name: "Sundress for Women",
            price: "Rs. 2000",
            brand: "Madame"
        },
        headers: {
            'Content-Type': 'application/json',
            "Authorization ": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vdGVzdC53b3JrcGF5LmNvLmtlL2FwaS92Mi91c2VyL2xvZ2luIiwiaWF0IjoxNzgyNDAxNDQ4LCJleHAiOjE3ODI0NDQ2NDgsIm5iZiI6MTc4MjQwMTQ0OCwianRpIjoiTjZaWEhMRlc2TXJESGJzTyIsInN1YiI6IjE1MzI0IiwicHJ2IjoiNTFlMmQxNjcwNzdhNmQzYjE3ZjhiYzg1YTczZTg4MjViOWFkMDlkNiIsImFmIjoiZXlKcGRpSTZJa3haZFhkeFZXeGhPRkpSTm5rMk1pOVpNekZaVFdjOVBTSXNJblpoYkhWbElqb2lNMlJ3VkVaR2NUSTVhWGRUYkU4clNWUTJUMHRaWmtsMVowMVZWa0UyYUVvMWRVRlRVbkIxYTI5NGVqTnBaRnBTVWtOT0wzbG9RazlKUkcxcFlVaDFZeUlzSW0xaFl5STZJalJrTTJZNU1EaGlaRGxoTUdZMFltSXhOVEZqT1ROaU1tUmtPV0UwWmpnME5Ua3lNR0V5TldWa04yUXpOamt4TkRSaE16bGlaREE0WlRkaE5HRmlabVVpTENKMFlXY2lPaUlpZlE9PSJ9.YvAwdT_d0_2AyHh6xX7Y4NujUbqXKkmmDEzuxaMwbRA"
        }
    })
    const responseBody = await postresponse.json();
    console.log(responseBody);
    expect(postresponse.status()).toBe(201);

    //check if products length is 15
    // expect(data.length).toBe(5);

})


test('Verify Login with Invalid Details', async ({ request }) => {
    const response = await request.post('https://automationexercise.com/api/verifyLogin', {
        data: {
            email: "Binary@1234.com",
            password: "Binary@1234"
        }
    })
    console.log(await response.json());
    expect(response.status()).toBe(200);
})

test('Update Invalid User Details', async ({ request }) => {
    const response = await request.put('https://automationexercise.com/api/updateAccount', {
        data: {
            password: "Binarys@1234"
        }
    })
    console.log(await response.json());
    expect(response.status()).toBe(200);
    expect(await response.json()).toEqual({ "message": "Bad request, email parameter is missing in PUT request." });
})

test('Delete Invalid User Details', async ({ request }) => {
    const response = await request.delete('https://automationexercise.com/api/deleteAccount', {
        data: {
            email: "Binary@1234.com",
            password: "Binary@1234"
        }
    })
    const responseBody = await response.json();
    console.log(responseBody);
    expect(response.status()).toBe(200);
    expect(responseBody).toEqual({
        "responseCode": 400,
        "message": "Bad request, email parameter is missing in DELETE request."
    });
})