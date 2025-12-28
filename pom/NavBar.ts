import { Page } from "@playwright/test";

export class NavBar {
  constructor(private page: Page) { }

  async clickSweets() {
    await this.page.getByRole("link", { name: "Sweets" }).click();
  }
  async clickAbout() {
    await this.page.getByRole("link", { name: "About" }).click();
  }
  async clickLogin() {
    await this.page.getByRole("link", { name: "Login" }).click();
  }
  async clickBasket() {
    await this.page.getByRole("link", { name: /basket/i }).click();
  }
}

