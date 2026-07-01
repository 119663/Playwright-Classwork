# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Login test using fixture
- Location: tests/login.spec.ts:57:5

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected: "Account Login"
Received: "My Account"
Timeout:  5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    13 × unexpected value "My Account"

```

```yaml
- heading "Top categories close" [level=5]:
  - text: Top categories
  - link "close":
    - /url: "#mz-component-1626147655"
    - text: 
- navigation:
  - list:
    - listitem:
      - link "Components":
        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=25
        - img
        - text: Components
    - listitem:
      - link "Cameras":
        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=33
        - img
        - text: Cameras
    - listitem:
      - link "Phone, Tablets & Ipod":
        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=57
        - img
        - text: Phone, Tablets & Ipod
    - listitem:
      - link "Software":
        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=17
        - img
        - text: Software
    - listitem:
      - link "MP3 Players":
        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=34
        - img
        - text: MP3 Players
    - listitem:
      - link "Laptops & Notebooks":
        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=18
        - img
        - text: Laptops & Notebooks
    - listitem:
      - link "Desktops and Monitors":
        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=28
        - img
        - text: Desktops and Monitors
    - listitem:
      - link "Printers & Scanners":
        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=30
        - img
        - text: Printers & Scanners
    - listitem:
      - link "Mice and Trackballs":
        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=29
        - img
        - text: Mice and Trackballs
    - listitem:
      - link "Fashion and Accessories":
        - /url: ""
        - img
        - text: Fashion and Accessories
    - listitem:
      - link "Beauty and Saloon":
        - /url: ""
        - img
        - text: Beauty and Saloon
    - listitem:
      - link "Autoparts and Accessories":
        - /url: ""
        - img
        - text: Autoparts and Accessories
    - listitem:
      - link "Washing machine":
        - /url: ""
        - img
        - text: Washing machine
    - listitem:
      - link "Gaming consoles":
        - /url: ""
        - img
        - text: Gaming consoles
    - listitem:
      - link "Air conditioner":
        - /url: ""
        - img
        - text: Air conditioner
    - listitem:
      - link "Web Cameras":
        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=32
        - img
        - text: Web Cameras
- heading "Quick Links close" [level=5]:
  - text: Quick Links
  - link "close":
    - /url: "#mz-component-162614767"
    - text: 
- navigation:
  - list:
    - listitem:
      - link " Special Hot":
        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/special
    - listitem:
      - link " Wishlist":
        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/wishlist
    - listitem:
      - link " Compare":
        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/compare
    - listitem:
      - link " My account":
        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/account
    - listitem:
      - link " Blog":
        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/home
    - listitem:
      - link " Tracking":
        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=information/tracking
    - listitem:
      - link " Contact us":
        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=information/contact
- separator
- paragraph: Place here any module, widget, design or HTML. for example menu, categories
- heading "Cart close" [level=5]:
  - text: Cart
  - link "close":
    - /url: "#cart-total-drawer"
    - text: 
- paragraph: Your shopping cart is empty!
- table:
  - rowgroup:
    - 'row "Sub-Total: $0.00"':
      - cell "Sub-Total:"
      - cell "$0.00":
        - strong: $0.00
    - 'row "Total: $0.00"':
      - cell "Total:"
      - cell "$0.00":
        - strong: $0.00
- button " Edit cart"
- button " Checkout"
- banner:
  - button ""
  - figure:
    - link "Poco Electro":
      - /url: https://ecommerce-playground.lambdatest.io/index.php?route=common/home
      - img "Poco Electro"
  - button "All Categories"
  - textbox "Search For Products"
  - button "Search"
  - link "Compare":
    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/compare
    - img
  - link "Wishlist":
    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/wishlist
    - img
  - button "0":
    - img
    - text: "0"
  - button "Shop by Category":
    - img
    - text: Shop by Category
  - navigation:
    - list:
      - listitem:
        - link "Home":
          - /url: https://ecommerce-playground.lambdatest.io/index.php?route=common/home
      - listitem:
        - link "Special Hot":
          - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/special
      - listitem:
        - link "Blog":
          - /url: https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/home
      - listitem:
        - button "Mega Menu"
      - listitem:
        - button "AddOns Featured"
      - listitem:
        - button " My account"
  - paragraph:
    - strong: This is a dummy website for Web Automation Testing
- navigation "breadcrumb":
  - list:
    - listitem:
      - link "":
        - /url: https://ecommerce-playground.lambdatest.io/index.php?route=common/home
    - listitem: / Account
- heading "My Account" [level=2]
- link " Edit your account information":
  - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/edit
- link " Change your password":
  - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/password
- link " Modify your address book entries":
  - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/address
- link " Modify your wish list":
  - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/wishlist
- link " Subscribe / unsubscribe to newsletter":
  - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/newsletter
- heading "My Orders" [level=2]
- link " View your order history":
  - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/order
- link " Downloads":
  - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/download
- link " Your Reward Points":
  - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/reward
- link " View your return requests":
  - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/return
- link " Your Transactions":
  - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/transaction
- link " Recurring payments":
  - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/recurring
- heading "My Affiliate Account" [level=2]
- link " Register for an affiliate account":
  - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/affiliate/add
- complementary:
  - link " My Account":
    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/account
  - link " Edit Account":
    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/edit
  - link " Password":
    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/password
  - link " Address Book":
    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/address
  - link " Wish List":
    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/wishlist
  - link " Notification":
    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/account/notification/product
  - link " Order History":
    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/order
  - link " Downloads":
    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/download
  - link " Recurring payments":
    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/recurring
  - link " Reward Points":
    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/reward
  - link " Returns":
    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/return
  - link " Transactions":
    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/transaction
  - link " Newsletter":
    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/newsletter
  - link " Logout":
    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/logout
- contentinfo:
  - paragraph: © LambdaTest - Powered by OpenCart
```

# Test source

```ts
  1  | // import { test, expect } from '@playwright/test';
  2  | import{test, expect} from '../fixtures/myfixture';
  3  | import { LoginPage } from '../pages/loginPage';
  4  | import { dataStore } from '../utils_helper/dataStore';
  5  | import { faker } from '@faker-js/faker';
  6  | import users from '../test-data/users.json';
  7  | import dotenv from 'dotenv';
  8  | 
  9  | dotenv.config();
  10 | 
  11 | test('Login on system', async ({ page }) => {
  12 | 
  13 |     const loginPage = new LoginPage(page);
  14 | 
  15 |     await loginPage.navigate();
  16 | 
  17 |     await expect(page).toHaveTitle('Account Login');
  18 | 
  19 |     //one user
  20 |     await loginPage.login(users[0].email, users[0].password);
  21 | 
  22 |     //login using password in env file
  23 |     await loginPage.login(users[0].email, process.env.password!);
  24 | 
  25 |     //loop users
  26 |     for (const user of users) {
  27 |         await loginPage.login(user.email, user.password);
  28 |     }
  29 | 
  30 |     await expect(page.locator("#WelcomeMessage")).toHaveText(users[0].expected);
  31 | 
  32 |     //login using faker and user data store
  33 |     // await loginPage.login(
  34 |     //     dataStore.get('email'),
  35 |     //     dataStore.get('password')
  36 |     //     // 'xibanot768@matkind.com', 
  37 |     //     // 'Binary@1234'
  38 |     // );
  39 | 
  40 |     await expect(page).toHaveTitle('My Account');
  41 | });
  42 | 
  43 | 
  44 | //loop users
  45 | users.forEach(user => {
  46 |     test(`Login test for ${user.email}`, async ({ page }) => {
  47 |         const loginPage = new LoginPage(page);
  48 | 
  49 |         await loginPage.navigate();
  50 |         await loginPage.login(user.email, user.password);
  51 |         await expect(page.locator("#WelcomeMessage")).toHaveText(user.expected);
  52 | 
  53 |     })
  54 | 
  55 | })
  56 | 
  57 | test('Login test using fixture', async ({ mylogin, page }) => {
  58 |     await mylogin.navigate();
> 59 |     await expect(page).toHaveTitle('Account Login');
     |                        ^ Error: expect(page).toHaveTitle(expected) failed
  60 | })
  61 | 
  62 | 
```