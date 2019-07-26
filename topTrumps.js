class Card{
    constructor(name,  intelligence, strength, speed, durability, energyProjection, fightingSkills){
        this._name = name;
        this._intelligence = intelligence;
        this._strength = strength;
        this._speed = speed;
        this._durability = durability;
        this._energyProjection = energyProjection;
        this._fightingSkills = fightingSkills;
    }
    
    get name(){
        return this._name;
    }
    get intelligence(){
        return this._intelligence;
    }
    get strength(){
        return this._strength;
    }
    get speed(){
        return this._speed;
    }
    get durability(){
        return this._durability;
    }
    get energyProjection(){
        return this._energyProjection;
    }
    get fightingSkills(){
        return this._fightingSkills;
    } 
}

const iceman = new Card("Iceman", 2, 3, 3, 4, 5, 4)
const toad = new Card("Toad", 3, 4, 3, 3, 1, 3)
const magneto = new Card("Magneto", 5, 2, 5, 2, 6, 4)
const deadpool = new Card("Deadpool", 2, 4, 7, 4, 1, 6)
const mystique = new Card("Mystique", 4, 2, 2, 4, 1, 5)
const rogue = new Card("Rogue", 3, 5, 5, 6, 1, 3)
const juggernaut = new Card("Juggernaut", 2, 7, 2, 7, 1, 4)
const apocalypse = new Card("Apocalypse", 6, 7, 5, 6, 3, 3)
const shadowKing = new Card("Shadow King", 3, 1, 7, 7, 5, 1)
const profX = new Card("Prof. X", 5, 2, 2, 2, 5, 3)
const wolverine = new Card("wolverine", 2, 4, 2, 4, 1, 7)
const cyclops = new Card("Cyclops", 3, 2, 2, 2, 5, 4)
const phoenix = new Card("Phoenix", 3, 2, 7, 7, 7, 4)
const nightcrawler = new Card("Nightcrawler", 3, 2, 7, 2, 1, 3)
const colossus = new Card("Colossus", 2, 6, 2, 6, 1, 4)
const storm = new Card("Storm", 2, 2, 3, 2, 5, 4)
const jubilee = new Card("Jubilee", 2, 2, 2, 2, 1, 3)
const emmaFrost = new Card("Emma Frost", 4, 4, 2, 5, 5, 3)
const angel = new Card("Angel", 3, 2, 3, 2, 1, 4)
const beast = new Card("Beast", 5, 4, 3, 4, 1, 4)
const havok = new Card("Havok", 3, 2, 2, 3, 5, 3)
const quicksilver = new Card("Quicksilver", 3, 4, 5, 3, 1, 4)
const banshee = new Card("Banshee", 3, 2, 4, 3, 5, 4)
const sunfire = new Card("Sunfire", 2, 2, 4, 5, 4, 4)
const shadowcat = new Card("Shadowcat", 4, 2, 2, 3, 1, 5)
const psylocke = new Card("Psylocke", 2, 3, 2, 3, 5, 6)
const dazzler = new Card("Dazzler", 3, 2, 3, 3, 4, 3)
const gambit = new Card("Gambit", 2, 2, 2, 2, 2, 4)
const bishop = new Card("Bishop", 2, 3, 7, 3, 4, 4)
const sabretooth = new Card("Sabretooth", 2, 3, 2, 4, 1, 6)

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; 
    }
  }

let characters = [iceman, toad, magneto, deadpool, mystique, rogue, juggernaut, apocalypse, shadowKing, profX, wolverine, cyclops, phoenix, nightcrawler, colossus, storm, jubilee, emmaFrost, angel, beast, havok, quicksilver, banshee, sunfire, shadowcat, psylocke, dazzler, gambit, bishop, sabretooth]
let drawPile = []

shuffle(characters)

let playerOneHand = characters.slice(0,15)
let playerTwoHand = characters.slice(15,31)
let playerOneStat;
let playerTwoStat;
let currentPlayer = playerOneHand;
let currentPlayerName = "Player One"

const outer = () => {
   const inner = (num) => {
if (num == 1){
playerOneStat = playerOneHand[0].intelligence
playerTwoStat = playerTwoHand[0].intelligence
}

else if (num == 2){
    playerOneStat = playerOneHand[0].strength
    playerTwoStat = playerTwoHand[0].strength
}

else if (num == 3){
    playerOneStat = playerOneHand[0].speed
    playerTwoStat = playerTwoHand[0].speed
}
else if (num == 4){
    playerOneStat = playerOneHand[0].durability
    playerTwoStat = playerTwoHand[0].durability
}
else if (num == 5){
    playerOneStat = playerOneHand[0].energyProjection
    playerTwoStat = playerTwoHand[0].energyProjection
}
else if (num == 6){
    playerOneStat = playerOneHand[0].fightingSkills
    playerTwoStat = playerTwoHand[0].fightingSkills
}
}

return inner
}

const draw = () => {
   
let shuffleTwo = playerTwoHand[0]
let shuffleOne = playerOneHand[0]

if (playerOneStat > playerTwoStat) {
    alert(`Player one wins against player two's ${playerTwoHand[0].name} with a stat of ${playerTwoStat}`)
    playerOneHand.push(shuffleOne)
    playerOneHand.push(shuffleTwo)
    playerOneHand = playerOneHand.concat(drawPile)
    drawPile = []
    currentPlayer = playerOneHand
    currentPlayerName = "Player One"
}

else if  (playerTwoStat > playerOneStat) {
    alert(`player two wins with ${playerTwoHand[0].name} and stat of ${playerTwoStat}`)
    playerTwoHand.push(shuffleOne)
    playerTwoHand.push(shuffleTwo)
    playerTwoHand = playerTwoHand.concat(drawPile)
    drawPile = []
    currentPlayer = playerTwoHand
    currentPlayerName = "Player Two"

}

else if (playerOneStat == playerTwoStat){
    alert(`Draw. ${playerTwoHand[0].name} has the same value as ${playerOneHand[0].name}`)
    drawPile.push(shuffleOne)
    drawPile.push(shuffleTwo)
  
}

else {
    alert("broken")
}

playerOneHand.shift()
playerTwoHand.shift()

console.log(playerOneHand)
console.log(playerTwoHand)
console.log(playerOneHand.concat(drawPile))
}

let innerFunction = outer()

const turn = () => {
    
    let userInput = prompt(`${currentPlayerName}'s turn. Your card is ${currentPlayer[0].name}. Please choose your stat:\n1. Intelligence: ${currentPlayer[0].intelligence}\n2. Strength: ${currentPlayer[0].strength}\n3. Speed: ${currentPlayer[0].speed}\n4. Durability: ${currentPlayer[0].durability}\n5. Energy Projection: ${currentPlayer[0].energyProjection}\n6. Fighting Skills: ${currentPlayer[0].fightingSkills} `)
    innerFunction(userInput)

    if (playerOneHand.length == 30 && playerTwoHand.length == 0 || playerOneHand.length + drawPile.length == 30){
        alert('Player One wins')
    }
    else if (playerTwoHand.length == 30 && playerOneHand.length == 0 || playerTwoHand.length + drawPile.length == 30){
        alert('Player Two wins')
    }
    draw()
}

while (playerOneHand.length < 30 && playerOneHand.length > 0){
    turn()
}
