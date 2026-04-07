const answers = document.getElementById("answers");
const questionOptions = document.getElementsByClassName("answer-btn");
const progress = document.getElementById("progress");
const questionText = document.getElementById("question");
const nextBtn = document.getElementById("nextBtn");
const scoreDisplay = document.getElementById("score");

function updateQuestion(){
    questionText.textContent = quiz.questionBank[quiz.currentQuestion].question;
    scoreDisplay.textContent = "Score: " + Math.round((quiz.score / quiz.questionBank.length) * 100) + "%";

    for (let i = 0; i < quiz.questionBank[quiz.currentQuestion].options.length; i++) {
            questionOptions[i].textContent = quiz.questionBank[quiz.currentQuestion].options[i];
            questionOptions[i].classList.remove("correct","wrong")
    }

    progress.textContent = quiz.currentQuestion + 1;
}

answers.addEventListener('submit', (event)=>{
    event.preventDefault();
    let answerGiven = event.submitter.textContent;
    let correctAnswer = quiz.questionBank[quiz.currentQuestion].options[quiz.questionBank[quiz.currentQuestion].correctIndex];
    if (answerGiven === correctAnswer){
        console.log ("Rätt");
        quiz.score ++;
        event.submitter.classList.add("correct");
    }
    else {
        console.log("Fel");
        event.submitter.classList.add("wrong");
        //markera rätta elternativet i grönt
        for (let i = 0; i < 4; i++){
            if (questionOptions[i].textContent === correctAnswer) {
                questionOptions[i].classList.add("correct");
            }
        }
    }
    quiz.questionBank[quiz.currentQuestion].answered = true;

    nextBtn.disabled = false;
    for (let i = 0; i < 4; i++){
        questionOptions[i].disabled = true;
    }
    //disable svaren och släppa fram next btn
    //om det är rätt svar score plus ett
})


function superQuiz(start = 0){

    updateQuestion();
   
    //next-button
    nextBtn.addEventListener("click", (event) => {
        event.preventDefault();
        
        if (quiz.currentQuestion < quiz.questionBank.length-2) {
            
            quiz.currentQuestion++;
            
            //enable svarsbtn
                for (let i = 0; i < 4; i++){
            questionOptions[i].disabled = false;

        }
        }

        else {
            window.alert ("Quizet är slut. Du fick " + quiz.score + " poäng.")
        }
        //disable next btn
        nextBtn.disabled = true;
        //window.alert(quiz.currentQuestion)
        updateQuestion();
    })
}


superQuiz();