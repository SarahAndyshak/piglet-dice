// BUSINESS LOGIC

// Business Logic For Player Objects:
function Player(name) {
  // this.throw = 0 //might not need this
  this.turnScore = 0;
  this.runningScore = 0;
  this.name = name;
}

//because our values are set to zero for the first three properties they do not need to be set in the parans)

// Business Logic for Turn

Player.prototype.roll = function(roll) {
  if (roll === 1) {
    this.turnScore = 0;
  }
  else {
    this.turnScore += roll;
  };
  return this.turnScore;
}


// Business Logic for Piglet Dice Function
function pigletDice() {
  let roll = Math.round(Math.random()*6 + 1);
  return roll;
}
// (Math is uppercase b/c it's a built in constructor)

// Business Logic for scoreUpdate

Player.prototype.scoreUpdate(roll) {
  let turnScore = roll 
  turn running total = RunningTotal

}

// USER INTERFACE LOGIC

window.addEventListener("load", function() {

})
