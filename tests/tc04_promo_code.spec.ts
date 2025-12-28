import { test, expect } from "@playwright/test";

test.describe("TC01 - Navigation menu links", () => {
  test("should navigate to Sweets, About, Login, Basket", async ({ page }) => {
    await page.goto("https://sweetshop.netlify.app/");

    await page.getByRole("link", { name: "Sweets", exact: true }).click();
    await expect(page.locator("body")).toContainText(/browse sweets/i);

    await page.getByRole("link", { name: "About" }).click();
    await expect(page.locator("body")).toContainText(/sweet shop project/i);

    await page.getByRole("link", { name: "Login" }).click();
    await expect(page.getByLabel(/email/i)).toBeVisible();

    await page.getByRole("link", { name: /basket/i }).click();
    await expect(page.getByRole("heading", { name: "Your Basket", level: 1 })).toBeVisible();
  });
});


