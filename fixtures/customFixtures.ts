import {test as base, expect} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"
import { InventoryPage } from "../pages/InventoryPage"

//1. declare type of fixtyeu
type MyFixtures = {
    loginPage: LoginPage;
    inventoryPage: InventoryPage;
}

//2. extend the base test object
export const test = base.extend<MyFixtures>({
    loginPage: async({page}, use) =>{
        const loginPage = new LoginPage(page);  // instantiate object
        await use(loginPage);                   //pass it to the test
    },
    inventoryPage: async({page},use) =>{
        const inventoryPage = new InventoryPage(page);  // instantiate object
        await use(inventoryPage);                       //pass it to the test
    }
})
export {expect} 