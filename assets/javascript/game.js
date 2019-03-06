$(document).ready(function () {

  // Variables 
  var wins = 0;
  var losses = 0;
  var userScore = 0;
  var computerNumber = Math.floor(Math.random() * (120 - 19)) + 19;
  $("#Numbertoguess").text(computerNumber);



  // Crystals generate numbers
  var crystal1 = Math.floor((Math.random() * 12) + 1);
  $("#green").attr("crystalValue", crystal1);
  console.log(crystal1);
  var crystal2 = Math.floor((Math.random() * 12) + 1);
  $("#red").attr("crystalValue", crystal2);
  console.log(crystal2);
  var crystal3 = Math.floor((Math.random() * 12) + 1);
  $("#blue").attr("crystalValue", crystal3);
  console.log(crystal3);
  var crystal4 = Math.floor((Math.random() * 12) + 1);
  $("#purple").attr("crystalValue", crystal4);
  console.log(crystal4);

  // Much more efficient way of adding on click function, assigning crystal values, and checking score 
  // $(".crystal").on('click', function() {
  //   var crystalValue = Number(  $(this).attr("crystalValue")   );
  //   console.log("The crystal has a value of", crystalValue);
  //   userScore = userScore + crystalValue;
  //   checkScore(userScore, computerNumber)
  //   $("#Your-score").text("Your Score: " + userScore);
  // })

// Click on crystals and store the points 
  $("#green").on("click", function () {
    userScore = userScore + crystal1;
    checkScore(userScore, computerNumber)
    $("#Your-score").text("Your Score: " + userScore);
    console.log(userScore);
  });

  $("#red").on("click", function () {
    userScore = userScore + crystal2;
    checkScore(userScore, computerNumber)
    $("#Your-score").text("Your Score: " + userScore);
  });

  $("#blue").on("click", function () {
    userScore = userScore + crystal3;
    checkScore(userScore, computerNumber)
    $("#Your-score").text("Your Score: " + userScore);
  });

  $("#purple").on("click", function () {
    userScore = userScore + crystal4;
    checkScore(userScore, computerNumber)
    $("#Your-score").text("Your Score: " + userScore);
  });

// Function to check score and store Win/loss
  function checkScore(userScore, computerNumber) {
  if (userScore === computerNumber) {
    wins++;
    console.log("youwin", userScore, computerNumber, wins);
    $("#youWin").text(wins);
    resetGame();
  }
  
  else if (userScore > computerNumber) {
    losses++;
    console.log("youlose", userScore, computerNumber, losses);
    $("#youLose").text(losses);
    resetGame();
  }
  } 
  
// Reset function after win/loss
function resetGame () {
  userScore = 0;
  $("#Your-score").text("Your Score: " + userScore);
  
  computerNumber = Math.floor(Math.random() * (120 - 19)) + 19;
  $("#Numbertoguess").text(computerNumber);
  
  crystal1 = Math.floor((Math.random() * 12) + 1);
  console.log(crystal1);
  
  crystal2 = Math.floor((Math.random() * 12) + 1);
  console.log(crystal2);
  
  crystal3 = Math.floor((Math.random() * 12) + 1);
  console.log(crystal3);
  
  crystal4 = Math.floor((Math.random() * 12) + 1);
  console.log(crystal4);
}


})
