import { test, expect } from '@playwright/test'

test('lägga till en ny bok med titel och författare', async ({ page }) => {
  await page.goto('https://ha-fed25-testning.github.io/exam_e2e/')

	await page.getByText('Lägg till bok').click()    // går till formulären

	await page.getByLabel('Titel').fill('Playwright Testbok')  // fyller i titel
	await page.getByLabel('Författare').fill('Test Författare')   // fyller i författare

	await page.getByRole('button', { name: 'Lägg till ny bok' }).click() // skickar formuläret

	await page.getByText('Katalog').click()  // går tillbaka till katalogen

	await expect(page.getByText('Playwright Testbok')).toBeVisible()  //kontrollerar att den nya boken syns i katalogen
})



// Jag gör:
// skriver kod för:
// 1. öppnar sidan
// 2. går till formulär
// 3. fyller i titel
// 4. fyller i författare
// 5. hitta knappen och tryck på den
// 6. leta efter boken


// Detta hände:
// 1. skrev testet.
// 2. kör testet
// 3. testet hittar inte klicket
// 4. testet hittar inte texten "Playwright Testbok, Test Författare" (felmeddelandet: playwright väntade på texten, Platwright Testbok, Test Författare -hittade den inte på sidan)
// 5. gör testet enklare: testar bara titeln först RED
// 6. går tillbaka till katalog innan den letar efter boken
// 7. kör testet
// 8. testet blir rött eftersom Playwright inte hittar "Playwright Testbok"
// 9. ändrar testet så att det går tillbaka till Katalog efter att boken lagts till
// 10. upptäcker att raden som fyller i Titel saknas
// 11. lägger tillbaka: await page.getByLabel('Titel').fill('Playwright Testbok')
// 12. kör testet igen för att kontrollera om boken nu visas i katalogen
// 13. testet blir grönt
// 14. Playwright hittar "Playwright Testbok" i katalogen



// skillnaden som gjorde testet grönt: 

// RED: fyllde inte i titel korrekt / letade efter boken på fel vy

// GREEN:
// fyllde i både titel och författare
// gick tillbaka till katalogen
// kontrollerade att titeln syntes där


// US story: Som en användare vill jag kunna lägga till en ny bok med information om titel och författare så jag kommer ihåg vilka böcker jag vill läsa. (lägg till bok)