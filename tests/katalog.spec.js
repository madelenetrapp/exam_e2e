import { test, expect } from '@playwright/test'

test('kan se böcker i katalogen', async ({ page }) => {
  await page.goto('https://ha-fed25-testning.github.io/exam_e2e/')

  await expect(page.getByText('Ormar på ett plan: En Python-berättelse')).toBeVisible()
})





// Jag gör:
// 1. skriver testnamnet 
// 2. lägg till test vägen
// 3. skriver test för att se om titeltexten syns på sidan - jag vill att testet: 1. öppnar listan 2. letar efter texten 3. kontrollerar om texten syns på sidan



// Detta hände:
// 1. skapade ett nytt test för katalogvyn
// 2. öppnade Läslistan med page.goto()
// 3. valde en boktitel som redan finns i katalogen
// 4. använde getByText() för att leta efter boktiteln
// 5. använde expect(...).toBeVisible() för att kontrollera att boken syns
// 6. körde testet och fick grönt

// US story: Som en användare vill jag kunna se böcker i katalogen så att jag kan välja vilken bok jag vill läsa.