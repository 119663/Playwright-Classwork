import { test, expect } from '@playwright/test';

test('Test Iframe', async({ page }) => {

      await page.goto('https://vinothqaacademy.com/iframe/');

      await expect(page).toHaveURL('https://vinothqaacademy.com/iframe/');

      const iframe = page.frameLocator('//*[@id="main"]/div[2]/div[1]/div/div/div/div/div/div/iframe[1]');
      const header = iframe.locator('//*[@id="main"]/div[2]/div[1]/div/section/div/div/div/div/div/center/h2');
      await expect(header).toBeVisible();
      await expect(iframe.getByText('Project Details')).toBeVisible();
      await iframe.locator('//*[@id="nameInput"]').fill('John');
      await iframe.locator('//*[@id="roleInput"]').fill('QA');


});

test('Test Dropdowns', async({ page }) => {
      await page.goto('https://www.automationtesting.co.uk/dropdown.html');

      await expect(page).toHaveTitle('Dropdown Menus');

      const dropdown = page.locator('//*[@id="cars"]');
      await page.selectOption('//*[@id="cars"]', 'audi');
      await page.selectOption('select#cars', 'bmw');
});

test('Test Hovering', async({ page }) => {
      await page.goto('https://practice-automation.com/hover/');

      await expect(page).toHaveTitle('Hover | Practice Automation');

      await page.hover('//*[@id="mouse_over"]');
});

test('Test Popups', async({ page }) => {
      await page.goto('https://www.automationtesting.co.uk/popups.html');

      await expect(page).toHaveTitle('Pop Ups');

      page.on('dialog', async dialog =>{
            console.log(dialog.message());
            await dialog.accept();
            await expect(page).toHaveURL('about:blank');
      });
      await page.locator('//*[@id="main"]/div/div[1]/div/button').click();
      // await expect(page).toHaveURL('about:blank');

});

test('Test Alerts', async({ page }) => { 
      await page.goto('https://www.automationtesting.co.uk/popups.html');

      page.on('dialog', async dialog =>{
            console.log(dialog.message());
            expect(dialog.message()).toBe('You have triggered the alert!');
            await dialog.dismiss();
      });
      await page.locator('//*[@id="main"]/div/div[2]/div/button').click();

});
