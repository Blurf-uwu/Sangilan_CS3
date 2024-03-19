let current = "X";

let box1 = "null";
let box2 = "null";
let box3 = "null";
let box4 = "null";
let box5 = "null";
let box6 = "null";
let box7 = "null";
let box8 = "null";
let box9 = "null";


// Functions and their Description:
function resetGame() { // returns the variables and values back to default;
  current = "X";

  box1 = "null";
  box2 = "null";
  box3 = "null";
  box4 = "null";
  box5 = "null";
  box6 = "null";
  box7 = "null";
  box8 = "null";
  box9 = "null";
  let boxes = document.getElementsByClassName("innerBox");
  for (let i = 0; i < boxes.length; i++) { // clears all boxes since .getElementsByClassName() outputs an array
    boxes[i].innerText = "";
  }
}

function checkForWins() {
  // checks for the winning patterns or ties, shows the result, and then resets the game if one is found
  if ( // if O wins
    (box1 == "O" && box2 == "O" && box3 == "O") ||
    (box4 == "O" && box5 == "O" && box6 == "O") ||
    (box7 == "O" && box8 == "O" && box9 == "O") ||
    (box1 == "O" && box4 == "O" && box7 == "O") ||
    (box2 == "O" && box5 == "O" && box8 == "O") ||
    (box3 == "O" && box6 == "O" && box9 == "O") ||
    (box1 == "O" && box5 == "O" && box9 == "O") ||
    (box3 == "O" && box5 == "O" && box7 == "O")
  ) {
    alert("O Wins");
    resetGame();
  } 
  else if ( // if X wins
    (box1 == "X" && box2 == "X" && box3 == "X") ||
    (box4 == "X" && box5 == "X" && box6 == "X") ||
    (box7 == "X" && box8 == "X" && box9 == "X") ||
    (box1 == "X" && box4 == "X" && box7 == "X") ||
    (box2 == "X" && box5 == "X" && box8 == "X") ||
    (box3 == "X" && box6 == "X" && box9 == "X") ||
    (box1 == "X" && box5 == "X" && box9 == "X") ||
    (box3 == "X" && box5 == "X" && box7 == "X")
  ) {
    alert("X Wins");
    resetGame();
  } 
  else if ( // if all boxes are filled but no one wins
    box1 !== "null" &&
    box2 !== "null" &&
    box3 !== "null" &&
    box4 !== "null" &&
    box5 !== "null" &&
    box6 !== "null" &&
    box7 !== "null" &&
    box8 !== "null" &&
    box9 !== "null"
  ) {
    alert("Tie!");
    resetGame();
  }
}

function changeValue(divId) { // changes the values and innerText of the boxes + lets the next player make their turn if no winning pattern is detected
  if (current == "X") {
    document.getElementById(divId).innerText = "X";
    eval(divId + " = current"); //basically executes the statement 'box(x) = current: updates the value of that box since divId is a string. got it from https://www.w3schools.com/jsref/jsref_eval.asp
    current = "O";
  } else if (current == "O") {
    document.getElementById(divId).innerText = "O";
    eval(divId + " = current");
    current = "X";
  }
  checkForWins();
}