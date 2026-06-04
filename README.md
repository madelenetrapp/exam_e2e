Innehållsförteckning:

Syfte med uppgiften:
Syftet med uppgiften är att lära sig om E2E-tester med Playwright och testa funktionaliteten ur en användares perspektiv. Jag har arbetat mot G-nivån genom att testa deviktigaste funktionerna som finns tillgängliga.

User stories:
1. Som en användare vill jag kunna navigera/klicka mellan katalog, lägg till bok och mina böcker så att jag kan använda allt som erbjuds på appen. (navigera)

2. Som en användare vill jag kunna se böcker i katalogen så att jag kan välja vilken bok jag vill läsa. (bok-katalog)

3. Som en användare vill jag kunna markera en favoritbok i katalogen så att den saras i mina böcker. (mina böcker)

4. Som en användare vill jag kunna lägga till en ny bok med information om titel och författare så jag kommer ihåg vilka böcker jag vill läsa. (lägg till bok)

5. Som användare vill jag kunna ta bort en bok från min lista om jag inte vill läsa den längre. (mina böcker)

Tester:
1. Navigation (navigation.spec.js)
Vad testet kontrollerar:
-Att startsidan visar
-Att användaren kan gå till "Lägg till bok"
-Att användaren kan gå till "Mina böcker"
-Att användaren kan gå tillbaka till katalogen

2. Bokkatalog (katalog.spec.js)
Vad testet kontrollerar:
-Att katalogen laddas korrekt
-Att en boktitel visas i katalogen
-Att användaren kan se innehållet som finns tillgängligt

3. Favoritbok / Mina böcker (mina-bocker.spec.js)
Vad testet kontrollerar:
-Att användaren kan favoritmarkera en bok
-Att boken kan visas i vyn "Mina böcker"
Att favoritfunktionen funger som förväntat

4. Lägg till bok (lagg-till-bok.spec.js)
Vad testet visar:
-Att användaren lan öppna formulären
-Att titel kan fyllas i 
-Att författaren kan fyllas i 
-Att formuläret kan skickas 
-Att den nya boken visas i katalogen efter att den lagts till

5. Ta bort bok
jag undersökte men kunde inte hitta någon synlig funktion för att ta bort böcker från "Mina böcker". Därför har inget E2E-test skrivits för denn US.

