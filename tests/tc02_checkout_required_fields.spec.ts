import { test } from '@playwright/test';
import { BasketPage } from '../pom/BasketPage';

test.describe('TC05 - Checkout required fields validation (negative)', () => {
  test('Checkout is blocked when required fields are empty', async ({ page }) => {
    const basket = new BasketPage(page);
    await basket.goto();

    await basket.attemptCheckoutWithoutFillingRequiredFields();
    await basket.expectSomeRequiredFieldErrors();
  });
});
