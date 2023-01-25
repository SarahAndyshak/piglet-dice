// BUSINESS LOGIC

// Business Logic For Player Objects:
function PlayerOne(turnScore,runningScore) {
  this.turnScore = turnScore;
  this.runningScore = runningScore;
}

function PlayerTwo(turnScore,runningScore) {
  this.turnScore = turnScore;
  this.runningScore = runningScore;
}

// Business Logic for Piglet Dice Function
function pigletDice() {
  return parseInt(Math.random()*6 + 1);
}

// USER INTERFACE LOGIC

window.addEventListener("load", function() {

})