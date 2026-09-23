import {test,expect} from "../fixtures/customFixtures"
import {validUser} from "../test-data/user.json"

test('Verify SauceDemo login', async({page, baseURL, loginPage, inventoryPage })=>{
    await loginPage.navigateToLoginPage();
    await loginPage.login(validUser.username,validUser.password);
    await expect(page).toHaveURL(/inventory/);
    await expect(await inventoryPage.getProductTitle()).toHaveText("Products");
})