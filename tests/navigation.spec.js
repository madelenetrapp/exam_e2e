import { test, expect } from '@playwright/test'

test('kan navigera till mina böcker', async ({ page }) => {
  await page.goto('https://ha-fed25-testning.github.io/exam_e2e/')
})