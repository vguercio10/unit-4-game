$( document ).ready(function() {
var wins = 0;
var losses = 0;
var userScore = 0;
var computerNumber = Math.floor(Math.random() * (120 - 19) ) + 19;
$("#Numbertoguess").text(computerNumber);

// Computer generates random number between 19-120
// function generateRandomNumber() {
  // var randomNumber = Math.floor(Math.random() * (120 - 19) ) + 19;
  // $("#Numbertoguess").html(computerNumber);
// }
// Crystals generated numbers
var crystal1 = Math.floor((Math.random () * 12) + 1);
console.log(crystal1);
var crystal2 = Math.floor((Math.random () * 12) + 1);
console.log(crystal2);
var crystal3 = Math.floor((Math.random () * 12) +1);
console.log(crystal3);
var crystal4 = Math.floor((Math.random () * 12) +1);
console.log(crystal4);

//Click on crystals and store the points 
$("#green").on("click", function() {
userScore = userScore + crystal1;
("#Your-score").text("Your Score: " + userScore);
console.log(userScore);
})

$("#red").on("click", function() {
  userScore = userScore + crystal2;
  $("#Your-score").text("Your Score: " + userScore);
})

$("#blue").on("click", function() {
  userScore = userScore + crystal3;
  $("#Your-score").text("Your Score: " + userScore);
})

$("#purple").on("click", function() {
    userScore = userScore + crystal4;
    $("#Your-score").text("Your Score: " + userScore);

// The numbers will be generated with a number with every win/loss

// When clicking crystal the value should add to total points

// If total points eqaual computer generated number then wins increment 

if (userScore === computerNumber) {
  wins++;
}
// If total points go over computer generated number then losses increment
else if (userScore > computerNumber) {
  losses++;
}

});


// generateRandomNumber()
// displayCrystals()
// crystalValue () 
})
