import { Page } from "@playwright/test";

class DataStore {
    private data: Record<string, any> = {};

    set(key: string, value: any) {
        this.data[key] = value;
    }

    get(key: string) {
        return this.data[key];
    }
}

export const dataStore = new DataStore();

// class Popup(Page){

// await page.goto('https://www.automationtesting.co.uk/popups.html');

// page.on('dialog', async dialog =>{
//                 console.log(dialog.message());
//           });
// }

// export const popup = new Popup();