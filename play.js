
let Cards =[]
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let card = document.getElementById("card-el");
let messageEl = document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")




function startGame() {
    isAlive = true
    let firstCard =  getRandomCard()
    let secondCard = getRandomCard()
    Cards =[firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function getRandomCard() {
    let randomNum= Math.floor( Math.random()*13 ) + 1
    if (randomNum > 10) {
        return 10
    } else if (randomNum === 1) {
        return 11
    } else {
        return randomNum
    }
}
function renderGame() {
    card.textContent = " Cards : "
    for (let i = 0; i < Cards.length; i++) {
        card.textContent += Cards[i] + " ";
        
    }
    sumEl.textContent  = " Sum : "  + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card? "
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! "
        hasBlackJack = true
    } else {
        message = "You're out of the game! ";
        isAlive = false;
    };
    messageEl.textContent = message;
}
function newCard(){
    if (isAlive===true && hasBlackJack=== false){
        let newCard = getRandomCard();
        sum += newCard;
        Cards.push(newCard)
        renderGame();
    }
}
