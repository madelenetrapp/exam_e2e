import { test, expect } from '@playwright/test'

test('kan navigera till mina böcker', async ({ page }) => {
  await page.goto('https://ha-fed25-testning.github.io/exam_e2e/')
})

test('kan navigera mellan vyerna', async ({ page }) => {

  await page.getByRole('button', { name: 'Katalog' }).click()
  await expect(page.getByText('Välkommen!')).toBeVisible()

  await page.getByRole('button', { name: 'Lägg till bok' }).click()
  await expect(page.getByText('Titel')).toBeVisible()

  await page.getByRole('button', { name: 'Mina böcker' }).click()
  await expect(page.getByText('Mina böcker')).toBeVisible()

})