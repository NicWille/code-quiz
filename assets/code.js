let timerEl = document.getElementById('timer')
let buttonEl = document.getElementById('btn')
let startPageEl = document.getElementById('start-page')
let questionPageEl = document.getElementById('question-page')

let questionEl = document.getElementById('question')
let answer1El = document.getElementById('btn1')
let answer2El = document.getElementById('btn2')
let answer3El = document.getElementById('btn3')
let answer4El = document.getElementById('btn4')

let counter = 0

let time = 60 

let questions = [
    {
        question: "this is the question 000",
        a: "answer A",
        b: "answer b",
        c: "answer c",
        d: "answer d",
        answer: "a"
    },
    {
        question: "thisis the question 111",
        a: "What did he say!",
        b: "answer B",
        c: "answer c",
        d: "answer d",
        answer: "b"
    },
    {
        question: "thisis the question 222",
        a: "answer a",
        b: "answer b",
        c: "answer C",
        d: "answer d",
        answer: "c"
    },
    {
        question: "thisis the question 333",
        a: "answer a",
        b: "answer b",
        c: "answer c",
        d: "answer D",
        answer: "d"
    }
]

function countdown(){

    var timeInterval = setInterval(function(){

        timerEl.textContent = time
        time--
        if(time < -1) {
            clearInterval(timeInterval)
            time = 60
            timerEl.textContent = time
            gameOver()
        }
    },1000)   
}

function startQuiz() {

    countdown()
    startPageEl.classList.add("hide")
    questionPageEl.classList.remove("hide")
    answer1El.addEventListener("click", handleAnswers)
    answer2El.addEventListener("click", handleAnswers)
    answer3El.addEventListener("click", handleAnswers)
    answer4El.addEventListener("click", handleAnswers)
    continueQuestionLoop()
}

function continueQuestionLoop() {

    questionEl.textContent = questions[counter].question
    answer1El.textContent = questions[counter].a
    answer2El.textContent = questions[counter].b
    answer3El.textContent = questions[counter].c
    answer4El.textContent = questions[counter].d
}

function handleAnswers() {

    if (questions[counter].answer != this.value) {
        time -= 10
        timerEl.textContent = time
    } else {
        time += 15
        timerEl.textContent = time
    }

    if (counter == questions.length - 1) {
        gameOver()
    } else  {
        counter++
        continueQuestionLoop()
    }
}

function gameOver() {
    console.log("game is over")
}

buttonEl.addEventListener("click", startQuiz)