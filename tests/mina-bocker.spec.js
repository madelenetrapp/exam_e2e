import { test, expect } from '@playwright/test'

test('kan favoritmarkera en bok och se den i favoriter', async ({ page }) => {
  await page.goto('https://ha-fed25-testning.github.io/exam_e2e/')

  await page.getByTestId('star-Ormar på ett plan: En Python-berättelse').click()

  await page.getByText('Mina böcker').click()
  await expect(page.getByText('Ormar på ett plan: En Python-berättelse')).toBeVisible()

})




// Jag gör:
// 1. skrev testet för att favoritmarkera en bok och kontrollera att den syns i Mina böcker
// 2. klickade på boktiteln "Ormar på ett plan: En Python-berättelse"
// 3. gick till vyn "Mina böcker"
// 4. testet blev rött
// 5. felmeddelande:
//    expect(locator).toBeVisible() failed
//    Error: element(s) not found
// 6. Playwright hittade inte texten i Mina böcker
// 7. felsökning visade att ett klick på boktiteln inte favoritmarkerar boken
// 8. upptäckte att man måste klicka på hjärtat för att lägga till boken i favoriter inte texten som jag först tänkte
// 9. använder code generator så playwright kan spela in det jag gör och testkod automatiskt // vilken typ hjärtat är (knapp? ikon? ligger i ett <span>?)
// 10 code generator hittade en data-testid så nu kan jag byta getByText till getByTestId
// 11. glömde skriva star- i namnet så jag testar igen
// 12. ändrade från getByText() till getByTestId() och använde test-id:t: star-Ormar på ett plan: En Python-berättelse och testet blev grönt


// Detta hände:
// 1. skrev testet.
// 2. Testet blev rött.
// 3. trodde att boktiteln skulle klickas.
// 4. undersökte sidan manuellt.
// 5. upptäckte att hjärtat måste klickas.
// 6. använde Code Generator.
// 7. hittade rätt data-testid.
// 8. glömde först star-.
// 9. Playwright hittade inte elementet.
// 10. lade till hela namnet.
// 11. Testet blev grönt.


// US story: Som en användare vill jag kunna markera en favoritbok i katalogen så att den sparas i mina böcker.