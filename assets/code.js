let timerEl = document.getElementById('timer')

let startButtonEl = document.getElementById('btn-start')
let startPageEl = document.getElementById('start-page')

let questionPageEl = document.getElementById('question-page')
let questionEl = document.getElementById('question')
let answer1El = document.getElementById('btn1')
let answer2El = document.getElementById('btn2')
let answer3El = document.getElementById('btn3')
let answer4El = document.getElementById('btn4')

let resultPageEl = document.getElementById('results-page')
let resultEl = document.getElementById('result')
let resetButtonEl = document.getElementById('btn-reset')
let submitHighscoreButtonEl = document.getElementById('btn-highscore')
let inputEl = document.getElementById('name')

let counter = 0

let time = 60 

let scores = []

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
        if (counter == questions.length - 1) {
            clearInterval(timeInterval)
        }
        if(time < -1) {
            clearInterval(timeInterval)
            gameOver()
            time = 60
            timerEl.textContent = time
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

    questionPageEl.classList.add("hide")
    resultPageEl.classList.remove("hide")
    resultEl.textContent = time
    resetButtonEl.addEventListener("click", resetQuiz)
    submitHighscoreButtonEl.addEventListener("click", saveHighscore)
}

function saveHighscore() {
    
    if (inputEl.value == "") scores.push({name: 'anon', time: time})
    if (inputEl.value != "") {
        let name = inputEl.value
        scores.push({name: name, time: time})
    }
    console.log(scores)
}

function resetQuiz() {

    counter = 0
    time = 60
    resultPageEl.classList.add("hide")
    startPageEl.classList.remove("hide")
}

startButtonEl.addEventListener("click", startQuiz)