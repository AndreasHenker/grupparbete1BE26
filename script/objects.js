const questionBank = [
    {
        question: "Vad blir resultatet av följande kod?\nconst numbers = [1, 2, 3];\nconst result = numbers.map(num => { num * 2 });\nconsole.log(result);",
        options: ["[2, 4, 6]", "undefined", "[undefined, undefined, undefined]", "Error"],
        correctIndex: 2,
    },
    {
        question: "Vad händer om du försöker logga en variabel med console.log(a) innan den deklareras med 'let a = 5'?",
        options: ["Den loggar 5", "Den loggar undefined", "Det kastar ett ReferenceError", "Den loggar null"],
        correctIndex: 2,
    },
    {
        question: "Vad blir resultatet av följande kod?\nconst user = { name: 'Anna' };\nconst newUser = user;\nnewUser.name = 'Erik';\nconsole.log(user.name);",
        options: ["Anna", "Erik", "undefined", "Error"],
        correctIndex: 1,
    },
    {
        question: "Vad händer om du försöker lägga till en event listener på ett element som inte finns (är null)?",
        options: ["Inget händer", "Programmet väntar tills elementet skapas", "Det kastar ett Error direkt när koden körs", "Eventet triggas men gör ingenting"],
        correctIndex: 2,
    },
    {
        question: "Vad returnerar funktionen test()?\nfunction test() {\n  return\n  5\n}",
        options: ["5", "undefined", "null", "Error"],
        correctIndex: 1,
    },
    {
        question: "Vad blir resultatet av [10, 2, 5].sort()?",
        options: ["[2, 5, 10]", "[10, 5, 2]", "[10, 2, 5]", "En felaktigt sorterad array (t.ex. [10, 2, 5])"],
        correctIndex: 3,
    },
    {
        question: "Hur stoppar man ett event från att bubbla uppåt i DOM-trädet?",
        options: ["event.stop()", "event.preventDefault()", "event.stopPropagation()", "event.close()"],
        correctIndex: 2,
  },
  {
        question: "Vad returnerar 'typeof null'?",
        options: ["'null'", "'undefined'", "'object'", "'boolean'"],
        correctIndex: 2,
  },
  {
        question: "Vilken array-metod transformerar varje element i en array och returnerar en ny array med de nya värdena?",
        options: ["filter()", "map()", "every()", "reduce()"],
        correctIndex: 1,
  },
  {
        question: "Vad gör 'event.preventDefault()' i en form-submit?",
        options: ["Rensar formuläret", "Stoppar sidan från att laddas om", "Skickar data till servern", "Validerar input"],
        correctIndex: 1,
  },
  {
        question: "Hur skapar man en 'shallow copy' av en array med namnet 'arr'?",
        options: ["const copy = arr", "const copy = [...arr]", "const copy = arr.copy()", "const copy = new Array(arr)"],
        correctIndex: 1,
  }
];

const quiz = {
    title: "Javascript Quiz",
    currentQuestion: 0,
    score: 0,
    hiScore: 0,
    questionBank: [...questionBank]
}