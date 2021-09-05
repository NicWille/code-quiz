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
    counter++
}

function handleAnswers() {

    console.log("answer is being handled")
    if (counter == questions.length) {
        console.log("run showScore() Function")
    } else  continueQuestionLoop()
}

function countdown(){

    let time = 3 
    var timeInterval = setInterval(function(){

        timerEl.textContent = time
        time--
        if(time < 0) {
            clearInterval(timeInterval)
            time = 60
            timerEl.textContent = time
        }
    },1000)   
}

buttonEl.addEventListener("click", startQuiz)