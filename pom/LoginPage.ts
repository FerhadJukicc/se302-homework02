import { expect, Locator, Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly email: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.email = page.getByLabel(/Email address/i);
    this.password = page.getByLabel(/Password/i);
    this.loginButton = page.getByRole('button', { name: /^Login$/i });
  }

  async goto() {
    await this.page.goto('/login');
    await expect(this.page.getByRole('heading', { name: /Login/i })).toBeVisible();
  }

  async login(email: string, password: string) {
    await this.email.fill(email);
    await this.password.fill(password);
    await this.loginButton.click();
  }

  async expectPasswordMasked() {
    await expect(this.password).toHaveAttribute('type', /password/i);
  }
}
