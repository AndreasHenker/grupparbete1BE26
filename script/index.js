const answers = document.getElementById("answers");
const questionOptions = document.getElementsByClassName("answer-btn");
const progress = document.getElementById("progress");
const totalQuestions = document.getElementById("total");
const questionText = document.getElementById("question");
const nextBtn = document.getElementById("nextBtn");
const scoreDisplay = document.getElementById("score");
const finalResultContainer = document.getElementById("result");
const quizContainer = document.getElementById("quiz-container");
const result = document.getElementById("result");
const resultScore = document.getElementById("result-score");
const restartBtn = document.getElementById("restartBtn")


function finalResult(){
    //quizContainer.style.display = "none";
    result.classList.remove("hidden");
    quizContainer.classList.add("hidden");
    
    //här ska vi skapa resultatsidan
    const correct = quiz.trackRecord.filter(r => r[0] === r[1]).length;
    const total = quiz.questionBank.length;
    const percent = Math.round((correct / total) * 100);

    resultScore.textContent = `Du fick ${correct} av ${total} (${percent}%)`;
}

function updateQuestion(){
    questionText.textContent = quiz.questionBank[quiz.currentQuestion].question;
    scoreDisplay.textContent = "Score: " + Math.round((quiz.score / quiz.questionBank.length) * 100) + "%";
    totalQuestions.textContent = quiz.questionBank.length;
    
    const numberOfOptions = quiz.questionBank[quiz.currentQuestion].options.length;
    for (let i = 0; i < numberOfOptions; i++) {
            questionOptions[i].textContent = quiz.questionBank[quiz.currentQuestion].options[i];
            questionOptions[i].classList.remove("correct","wrong")
    }

    progress.textContent = quiz.currentQuestion + 1;
}

function restartQuiz(){
    quiz.newQuiz(); //nolställer quiz, så man kan återanvända det
    result.classList.add("hidden");
    quizContainer.classList.remove("hidden");
    updateQuestion();
   
}

function superQuiz(){
    restartQuiz();
    //next-button
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
    });

    nextBtn.addEventListener("click", (event) => {
        event.preventDefault();
        if (quiz.currentQuestion < quiz.questionBank.length-1) {
            quiz.currentQuestion++;
            for (let i = 0; i < 4; i++){
            questionOptions[i].disabled = false;
            }
        }

        else {
            scoreDisplay.textContent = "Score: " + Math.round((quiz.score / quiz.questionBank.length) * 100) + "%";
            finalResult();
        }
        nextBtn.disabled = true;
        updateQuestion();
    });
    //restart-button
    restartBtn.addEventListener("click", (event) => {
        event.preventDefault();
        restartQuiz();
    });
}


superQuiz();
