import {Locator, Page} from "@playwright/test"
import {InventoryPage} from "./InventoryPage"

export class LoginPage{
    private readonly page: Page;
    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;
    constructor(page: Page){
        this.page = page;
        this.usernameInput = page.getByPlaceholder("Username");
        this.passwordInput = page.getByPlaceholder("Password");
        this.loginButton = page.getByRole('button', {name: 'Login'});
    }

    async enterUsername(username:string){
        await this.usernameInput.fill(username);
    }

    async enterPassword(password:string){
        await this.passwordInput.fill(password);
    }
    async navigateToLoginPage(){
        await  this.page.goto("/");
    }
    async login(username:string, password: string):Promise<void>{
        await this.enterUsername(username)
        await this.enterPassword(password)
        await this.loginButton.click();
    }
}