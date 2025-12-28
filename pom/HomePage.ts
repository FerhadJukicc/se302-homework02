import { expect, Locator, Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly navLogin: Locator;
  readonly navBasket: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navLogin = page.getByRole('link', { name: 'Login' });
    this.navBasket = page.getByRole('link', { name: /Basket/i });
  }

  async goto() {
    await this.page.goto('/');
    await expect(this.page.getByRole('heading', { name: /Welcome to the sweet shop!/i })).toBeVisible();
  }

  async openLogin() {
    await this.navLogin.click();
    await expect(this.page).toHaveURL(/\/login/);
  }

  async openBasket() {
    await this.navBasket.click();
    await expect(this.page).toHaveURL(/\/basket/);
  }
}
