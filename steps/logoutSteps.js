import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { BrowserUtility } from '../utilities/BrowserUtility.js';
import { PageManager } from "../globalPagesSetup.js";


// WRITE YOUR STEP DEFINITIONS HERE...
Given('user is already logged in as {string}', async function (string) {
    await PageManager.loginPage.login(string);
    await expect(PageManager.page).toHaveTitle("Library");
});

When('user clicks the user profile on the top right corner of the page', async function () {
    await PageManager.dashboardPage.clickUserProfileModule();
});

When('user clicks the “Log out” button under the account name', async function () {
    await PageManager.dashboardPage.clickLogoutButton();
});

Then('user should be logged out from the application', async function () {
await PageManager.dashboardPage.verifyLoggedOut();
await expect(PageManager.page).toHaveTitle("Login - Library");
});