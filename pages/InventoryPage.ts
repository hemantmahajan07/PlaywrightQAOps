import {Page, Locator} from "@playwright/test"
import {product} from "../test-data/productData.json"

export class InventoryPage{
    private readonly page: Page;
    private readonly productTitle: Locator;
    private readonly addToCart: Locator;
    private readonly cartBadge: Locator;    
    constructor(page: Page){
        this.page = page;
        this.productTitle = page.locator(".title");
        this.addToCart = page.locator(".inventory_item_description")
                        .filter({hasText: product.productName})
                        .getByRole('button',{name: 'Add to cart'});
        this.cartBadge = page.locator('.shopping_cart_badge');
    }

    async getProductTitle():Promise<Locator>{
        return this.productTitle;
    }

    async addProductToCart(){
        this.addToCart.click()
    }

    async getCartCount(){
        return await this.cartBadge.textContent();
    }

}