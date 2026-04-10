const answers = document.getElementById("answers");
const questionOptions = document.getElementsByClassName("answer-btn");
const progress = document.getElementById("progress");
const questionText = document.getElementById("question");
const nextBtn = document.getElementById("nextBtn");
const scoreDisplay = document.getElementById("score");
const finalResultContainer = document.getElementById("result");
const quizContainer = document.getElementById("quiz-container");
const result = document.getElementById("result");
const resultScore = document.getElementById("result-score");
const restartBtn = document.getElementById("restartBtn")


function finalResult(){
    quizContainer.style.display = "none";
    result.classList.remove("hidden");
    
    //haär ska vi skapa resultatsidan
    // quiz.trackRecord.forEach(element => {
    //  finalResultContainer.textContent += (element[0] === element[1]);
    //});

    const correct = quiz.trackRecord.filter(r => r[0] === r[1]).length;
    const total = quiz.questionBank.length;
    const percent = Math.round((correct / total) * 100);

    resultScore.textContent = `Du fick ${correct} av ${total} (${percent}%)`;
}

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
        //quiz.trackRecord.push(true);
        
        quiz.score ++;
        event.submitter.classList.add("correct");
    }
    else {
        console.log("Fel");
        event.submitter.classList.add("wrong");
        //quiz.trackRecord.push(false);
        //markera rätta elternativet i grönt
        for (let i = 0; i < 4; i++){
            if (questionOptions[i].textContent === correctAnswer) {
                questionOptions[i].classList.add("correct");
            }
        }
    }
    quiz.trackRecord.push([answerGiven, correctAnswer]);
    quiz.questionBank[quiz.currentQuestion].answered = true;

    nextBtn.disabled = false;
    for (let i = 0; i < 4; i++){
        questionOptions[i].disabled = true;
    }
})


function superQuiz(start = 0){

    updateQuestion();
   
    //next-button
    nextBtn.addEventListener("click", (event) => {
        event.preventDefault();
        
        if (quiz.currentQuestion < quiz.questionBank.length-1) {
            
            quiz.currentQuestion++;
            
            //enable svarsbtn
        for (let i = 0; i < 4; i++){
            questionOptions[i].disabled = false;
            }
        }

        else {
            scoreDisplay.textContent = "Score: " + Math.round((quiz.score / quiz.questionBank.length) * 100) + "%";
            window.alert ("Quizet är slut. Du fick " + quiz.score + " poäng.");
        }
        //disable next btn
        nextBtn.disabled = true;
        //window.alert(quiz.currentQuestion)
        updateQuestion();
    })
    if (quiz.currentQuestion >= quiz.questionBank.length){
        finalResult();
    }
}


superQuiz();
