// BUSINESS LOGIC

// Business Logic For Player Objects:
function PlayerOne(turnScore, runningScore) {
  this.turnScore = turnScore;
  this.runningScore = runningScore;
}

function PlayerTwo(turnScore, runningScore) {
  this.turnScore = turnScore;
  this.runningScore = runningScore;
}

function pigletDice() {
  let roll = parseInt(Math.random()*6 + 1);
  return roll;
}

let eachTurn = [];
function turn(roll) {
  for (let i = 0; i !== 1; i++)
  console.log("index" + i);
  if (roll === 1) {
    this.turnScore = 0;
  }
  else if (roll !== 1) {
    this.turnScore += roll;
  };
  return eachTurn.push(turn);
}

// Day 1 Notes: Leaving off on whether or not we need the above for Loop to help generate turn results.


// Business Logic for Piglet Dice Function
function pigletDice() {
  let roll = parseInt(Math.random()*6 + 1);
  return roll;
}
// (Math is uppercase b/c it's a built in constructor)

// Business Logic for Turn


// Business Logic for scoreUpdate

PlayerOne.prototype.scoreUpdate(roll) {
  let turnScore = roll 
  turn running total = RunningTotal

}

PlayerTwo.prototype.scoreUpdate() {

}


// USER INTERFACE LOGIC

window.addEventListener("load", function() {

})