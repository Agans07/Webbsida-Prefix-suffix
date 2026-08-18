# AFFIX — prefix- & suffixlexikon

10 filer, alla i samma mapp — inga undermappar.

```
index.html       ← huvudmeny (startsida)
browse.html       ← bläddra i lexikonet
quiz.html          ← quiz 1: gissa betydelsen
quiz-word.html      ← quiz 2: bygg isär ordet
style.css            ← delad design för alla sidor
data.js               ← din data (PREFIX_DATA / SUFFIX_DATA)
words-data.js           ← ord för quiz 2 (WORD_DATA)
browse.js                ← logik för browse.html
quiz.js                    ← logik för quiz.html
quiz-word.js                ← logik för quiz-word.html
```

## Köra lokalt

Öppna `index.html` i webbläsaren. Fungerar direkt utan server.

## Välja affix till quiz

På sidan **Bläddra i lexikonet** väljer du vilka affix som ska användas i
båda quiz. Kryssa i eller ur varje affix, använd knapparna för att aktivera
eller inaktivera alla, eller välj en viss bokstav och kategori, exempelvis
`A prefix` eller `A suffix`.

Valen sparas lokalt i webbläsaren på den aktuella enheten. Första gången är
alla affix aktiva. Om alla inaktiveras visar quizsidorna ett meddelande tills
du väljer affix igen.

## Quiz 2: Bygg isär ordet

Du får ett riktigt svenskt ord. Frågan ber dig slumpmässigt hitta antingen
prefixet eller suffixet. De sex alternativen är tre delar från början och
tre delar från slutet av samma ord. När du svarar rätt markeras affixet i
ordet och dess betydelse visas.

Målet är tre svenska exempelord för varje prefix och suffix i `data.js`.
Ett ord får innehålla bara ett registrerat affix. Om det också innehåller ett
registrerat affix i den andra änden sparas båda, så att ordet kan användas för
båda frågetyperna.

### Lägga till fler ord i quiz 2

Öppna `words-data.js` och lägg till en post enligt mallen:

```js
{
  ord: "autobiografi",
  prefix: { term: "Auto-", text: "auto" },
  suffix: { term: "-grafi", text: "grafi" }
}
```

- `prefix` och `suffix` är valfria var för sig, men minst en måste finnas.
- `term` måste stavas EXAKT som i `data.js`.
- `text` måste vara de bokstäver ordet faktiskt börjar eller slutar med.
- Vid alternativa former, exempelvis `A- / An-`, används den exakta form som
  finns i ordet i `text`.

## Lägga upp på GitHub Pages

1. Lägg alla filer i roten av ditt repo.
2. Settings → Pages → Deploy from a branch → `main` → `/ (root)`.
3. Klart — sidan hamnar på `https://ditt-användarnamn.github.io/repo-namn/`.

## Ändra prefix/suffix-data

Redigera `data.js` — lägg till/ta bort poster i `PREFIX_DATA` eller
`SUFFIX_DATA`.

## Lägga till fler funktioner

`index.html` har ett gråmarkerat kort kvar ("Repetition av misstag").
Kopiera en befintlig quiz-sida + dess js-fil som mall, ändra logiken,
och byt ut `<div class="menu-card disabled">` mot en riktig
`<a class="menu-card" href="...">` i index.html.
