import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('https://ha-fed25-testning.github.io/exam_e2e/')
})

test('kan navigera mellan vyerna', async ({ page }) => {

  // await page.getByText('Katalog').click()
  await expect(page.getByText('Välkommen!')).toBeVisible()

  await page.getByText('Lägg till bok').click()
  await expect(page.getByText('Titel')).toBeVisible()

  await page.getByText('Mina böcker').click()
  await expect(page.getByText('Mina böcker')).toBeVisible()

  await page.getByText('Katalog').click()
  await expect(page.getByText('Välkommen!')).toBeVisible()
})

// Jag gör:
// 1. letar efter button men playwright hittar inte - RED
// 2. byter till getbyText('Mina böcker')
// 3. syntaxfel (tar bort första testet och lägger page.goto() ligger i berforeEach) - kör igen
// 4. felet: (locator resolved to <button disabled data-testid="catalog"> Katalog </button> element is not enabled) = playwright hittar katalog, knappen är disabled, går inte att klicka på.
// ändrar: börjar inte med katalog utan kontrollerar bara att startsidan/katalog syns och klicka sedan till de andra vyerna.
// kör igen: GREEN

// Detta hände:
// 1. först försökte playwright klicka på Katalog
// 2. playwright hittade den, men den var disabled
// 3. då syndes att appen redan startar på Katalog
// 4. ändrade testet så det först kontrollerar att Katalog/startvyn visas
// 5. sedan klickar vidare till "Lägg till bok", "Mina böcker" och "tillbaka till Katalog"