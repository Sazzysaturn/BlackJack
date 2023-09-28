let player = {
    name: "Sahil",
    chips: 200
}
let firstCard = 0
let secondCard = 0
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message

let playerEl = document.getElementById("player-el")
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

playerEl.textContent = player.name + ": $" + player.chips 

function getRandomCard(){
    let temp = Math.floor((Math.random()*13)+1)
    if(temp == 1) temp = 11
    if(temp > 10) temp = 10
    return temp
}

function startGame(){
    isAlive = true
    cards = []
    firstCard = getRandomCard()
    secondCard = getRandomCard()
    cards.push(firstCard, secondCard)
    sum = firstCard+secondCard
    renderGame()
}

function renderGame(){
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: "
    for(var i=0;i<cards.length;i++){
        console.log("This is happening!")
        cardsEl.textContent += cards[i] + " "
    }
    if(sum<=20){
        message  = "Do you want to draw a new card?"
    }
    else if(sum === 21){
        message = "You have got the BlackJack!"
        hasBlackJack = true
    }
    else{
        message = "You are out of the game!"
        isAlive = false
    }
    
    messageEl.textContent = message
}

function newCard(){
    if(isAlive && !hasBlackJack){
        console.log("Drawing a new card")
        let card = getRandomCard()
        cards.push(card)
        sum += card
        renderGame()
    }
}