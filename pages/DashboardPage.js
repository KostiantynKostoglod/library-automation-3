import { expect } from "@playwright/test";
import { PageManager } from "../globalPagesSetup.js";
import { BasePage } from "./BasePage.js";

export class DashboardPage extends BasePage {

  // ADD YOUR LOCATORS HERE...
constructor (page) {
  super(page)
  this.userProfileModule = page.locator("//a[@id='navbarDropdown']");
  this.logoutButton = page.locator("//a[@class='dropdown-item']");
  this.initiaPageLogo = page.locator("//img[@class='mb-4']");
}
  async clickUserProfileModule() {
    await this.userProfileModule.click();
  }

  async clickLogoutButton() {
    await this.logoutButton.click();
  }

  async verifyLoggedOut() {
    const initialLogo = await this.initiaPageLogo.getAttribute('class');
    console.log(initialLogo);
    expect(initialLogo).toBe("mb-4");
  }

}
