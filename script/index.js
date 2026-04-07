const answers = document.getElementById("answers");

answers.addEventListener('submit', (event)=>{
    event.preventDefault();
    console.log("Submitted by:");
    console.log(event.target);
    quiz.questionBank[quiz.currentQuestion].answered = true;
    //om det är rätt svar score plus ett
})

//console.log("****", quiz.title)
const questionText = document.getElementById("question");
questionText.textContent = quiz.questionBank[quiz.currentQuestion].question;

const questionOptions = document.getElementsByClassName("answer-btn");
//gör om till for-i-loop

for (let i = 0; i < quiz.questionBank[quiz.currentQuestion].options.length; i++) {
        questionOptions[i].textContent = quiz.questionBank[quiz.currentQuestion].options[i];
}


const progress = document.getElementById("progress");
progress.textContent = quiz.currentQuestion + 1;

//next-button
//höjer quiz.currentQuestion
//kör nya frågor