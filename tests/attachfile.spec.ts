import { test, expect } from '@playwright/test';

test("Attach a file", async ({ page }) => {
    page.goto('https://demoqa.com/automation-practice-form');
    const filePath = 'Screenshot 2026-06-17 at 17.16.20.png';
    await page.setInputFiles('//*[@id="uploadPicture"]', filePath);
})

test("Download a file", async ({ page }) => {
page.goto('https://demoqa.com/upload-download');
const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.click('#downloadButton')
])
//to save the file
const filename = download.suggestedFilename();
await download.saveAs(filename);
})