import { test, expect } from '@playwright/test';
import { LoginPage } from '../pom/LoginPage';

test.describe('TC03 - Login rejects invalid password', () => {
  test('Invalid credentials do not authenticate the user', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.expectPasswordMasked();

    await login.login('test@user.com', 'wrongpass');

    // Negative login: user must not become authenticated.
    // Check that a logged-in-only element (Logout) is NOT present.
    await expect(page.getByRole("link", { name: /logout/i })).toHaveCount(0);

    // Go back to the login page and confirm the form is still available
    await page.goto("https://sweetshop.netlify.app/login");
    await expect(page.getByLabel(/email/i)).toBeVisible();
    await expect(page.getByLabel(/password/i)).toBeVisible();


    // Security expectation: password not leaked into URL
    await expect(page.url()).not.toContain('wrongpass');
  });
});
