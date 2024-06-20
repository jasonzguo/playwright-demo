import { test, expect } from '@playwright/test';

test('happy path', async ({ page }) => {
  await page.goto('/');

  const chatInput = page.getByTestId('chat-input');

  expect(chatInput).toBeTruthy();

  await chatInput.fill('Hello?');
  await chatInput.press('Enter');
  
  await expect(page.getByTestId('chat-message')).toHaveCount(2, { timeout: 500 });
});
