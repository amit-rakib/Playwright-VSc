import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');
  await page.locator('div').filter({ hasText: /^Cucumber - 1 Kg48–\+ADD TO CART$/ }).getByRole('button').click();
  await page.locator('div').filter({ hasText: /^Cauliflower - 1 Kg60–\+ADD TO CART$/ }).getByRole('button').click();
  await page.getByRole('link', { name: 'Cart' }).click();
  await page.getByRole('button', { name: 'PROCEED TO CHECKOUT' }).click();
  await page.getByRole('textbox', { name: 'Enter promo code' }).click();
  await page.getByRole('textbox', { name: 'Enter promo code' }).fill('890');
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.getByRole('button', { name: 'Place Order' }).click();
  await page.getByRole('combobox').selectOption('Albania');
  await page.getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Proceed' }).click();
  await page.getByText('Thank you, your order has').click();
});