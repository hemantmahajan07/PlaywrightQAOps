import {test, expect} from "../fixtures/customFixtures"
import {validUser} from "../test-data/user.json"

test('Verify product added to cart', async({page, loginPage, inventoryPage})=>{

    await loginPage.navigateToLoginPage();
    await loginPage.login(validUser.username,validUser.password);
    await expect(page).toHaveURL(/inventory/);

    //add product to cart
    inventoryPage.addProductToCart();

    //verify cart count
    expect(await inventoryPage.getCartCount()).toBe("1");
})