const buttonRules = document.querySelector('.rules-button')
const rulesContainer = document.querySelector('.keep-rules')

buttonRules.addEventListener('click', () => {
    if (rulesContainer.classList.contains('keep-rules')) {
        rulesContainer.classList.toggle('active-rules')
    }
})


const form = document.querySelector('form')
const popup = document.querySelector('.popup-statistics')
const buttonSubmit = document.querySelector('.button-submit')
const finalScoreContainer = document.querySelector('.popup-statistics')

const correctAnswers = ['B', 'D', 'A', 'C', 'B']

let score = 0
let quizPorcentage = 0
let correctAnswersQuantity = 0


const getUserAnswers = () => correctAnswers.map((_, index) => {
    return form[`question${index + 1}`].value
})

const calculateUserScore = userAnswers => {
    userAnswers.forEach((userAnswer, index) => {
        if(userAnswer === correctAnswers[index]) {
            score += 2
            quizPorcentage += 20
            correctAnswersQuantity += 1
        }
    })
}

const showResults = () => {
    popup.innerHTML = `
    <div class="popup-header">
        <div class="popup-header-container">
            <div class="icons"><i class="fas fa-chart-bar fa-5x"></i></div>   
            <div class="title"><h1>Estatisticas de Desempenho</h1></div>
            <div class="icons"><i class="fas fa-chart-bar fa-5x"></i></div>   
        </div>
    </div>
    <div class="popup-container">
        <div class="popup-info">
            <h3>Em um total de 5 questões do Quiz, você acertou <span>${correctAnswersQuantity}</span>.</h3>
            <h3>Obtendo <span class="porcentage">${quizPorcentage}%</span> de acerto do Quiz.</h3>
            <h3>Sendo assim sua nota final neste Quiz é <span>${score}.0</span></h3>
        </div>
            <a href="../index.html"><i class="fas fa-home fa-1x"></i>Página Inicial</a>
    </div>`
}

form.addEventListener('submit', event => {
    event.preventDefault()

    
    const userAnswers = getUserAnswers()
    calculateUserScore(userAnswers)
    showResults()
})

buttonSubmit.addEventListener('click', () => {
    popup.style.display = "block"
})