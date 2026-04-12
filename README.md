Struktur 

Grupp 2: QuizSpel
├── index.html
├── README.md
├── images/
│   └── logo-grit.png
├── scripts/
│   ├── index.js
│   └── objects.js
└── styles/
    └── index.css


HTML
index.html innehåller:
- en header med logotyp
- en huvudsektion för quizet
- en progress-indikator
- frågeruta
- svarsknappar
- poängvisning
- nästa-knapp
- resultatsida med omstartsknapp och sammanfattning

CSS (responsive design för mobil-först)
index.css innehåller:
- layout och design
- färger och knappar
- responsiv visning för mobil och mindre skärmar
- klasser för rätt och fel svar (.correct och .wrong)
- dölja och visa resultatsidan med .hidden

JavaScript
använder två JavaScript-filer
[1] objects.js innehåller:
- questionBank med alla frågor
- quiz-objektet quiz
- metoden newQuiz() för att återställa spelet


[2] index.js innehåller:
- hämtar HTML-element med getElementById() och getElementsByClassName()
- uppdaterar frågor och svar
- hanterar användarens val
- räknar poäng
- visar rätt/fel svar
- går vidare till nästa fråga
- genererar resultatsida
- startar om quizet


Functionalitet
När användaren:
:: väljer rätt svar → knappen blir "grön"
:: väljer fel svar → knappen blir "röd" och rätt svar markeras "grönt"
:: klickar på Nästa → nästa fråga visas
:: svarar på sista frågan → resultatsidan visas
:: klickar på Starta om → quizet återställs


Viktiga funktioner 
[1] updateQuestion()
    Visar aktuell fråga, uppdaterar svarsalternativ, poäng och progress.
[2] generateSummary()
    Skapar en detaljerad sammanfattning av quizresultatet med rätt svar för varje fråga.
[3] finalResult()
    Visar resultatsidan och räknar ut slutresultatet i procent.
[4] restartQuiz()
    Återställer quizet så att användaren kan spela igen.
[5] superQuiz()
    Startar quizet och kopplar event listeners till svarsknappar, nästa-knappen och restart-knappen.
