import { cards } from './cards.js'
const cardContainer = document.getElementById('equations')
const topEquationsContainer = document.getElementById('top-equations')
const cardClass = document.getElementsByClassName('card')
let cardsList = ''

let topEquations = cards.slice(0, 5)

function renderCards() {
    for (let card of cards) {
        cardsList += `
            <a class="card" href=${card.path}>
                <img src="${card.image}">
                <figcaption>${card.name}</figcaption>
            </a>
        `
    }
    cardContainer.innerHTML = cardsList
}
renderCards()

function renderTopEquations() {
    let topEquationsList = ''
    for (let card of topEquations) {
        topEquationsList += `
            <a class="topEquationsCard" href=${card.path}>
                <img src="${card.image}" loading="lazy">
                <div class="topGameInfo">
                    <figcaption>${card.name}</figcaption>
                    <p class="game-description">${card.description}</p>
                </div>
            </a>
        `
    }
    topEquationsContainer.innerHTML = topEquationsList
}
renderTopEquations()