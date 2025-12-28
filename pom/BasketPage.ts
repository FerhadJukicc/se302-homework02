import { expect, Locator, Page } from '@playwright/test';

export class BasketPage {
  readonly page: Page;
  readonly heading: Locator;
  readonly continueToCheckoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.getByRole("heading", { name: "Your Basket", level: 1 });
    this.continueToCheckoutButton = page.getByRole('button', { name: /Continue to checkout/i });
  }

  async goto() {
    await this.page.goto('/basket');
    await expect(this.heading).toBeVisible();
  }

  async attemptCheckoutWithoutFillingRequiredFields() {
    await this.continueToCheckoutButton.click();
  }

  async expectSomeRequiredFieldErrors() {
    await expect(this.page.getByText(/Valid first name is required\./i)).toBeVisible();
    await expect(this.page.getByText(/Credit card number is required/i)).toBeVisible();
  }
}
