// refrencing all the input elements (names/scores/cells/winner)

let player1Input = document.getElementById('player1');
let player2Input = document.getElementById('player2');
let playerScore1=document.getElementById('player1Score');
let playerScore2=document.getElementById('player2Score');

let winnerPlayer=document.getElementById('winner');
let gameboard=document.getElementById('gameboard')
let form = document.getElementById('playerForm');
let startButton = document.getElementById('startButton');
const infoDisplay=document.querySelector('.infoDisplay')

const winningCombinations = [
  [0, 1, 2], 
  [3, 4, 5], 
  [6, 7, 8], 
  [1, 4, 7],
  [2, 5, 8], 
  [0, 4, 8],
  [2, 4, 6]  
];

let cell0=document.getElementById('0');
let cell1=document.getElementById('1');
let cell2=document.getElementById('2');
let cell3=document.getElementById('3');
let cell4=document.getElementById('4');
let cell5=document.getElementById('5');
let cell6=document.getElementById('6');
let cell7=document.getElementById('7');
let cell8=document.getElementById('8');

let startCells=["","","","","","","","",""]

let player1Name = ''; 
let player2Name = '';
let player1Score = 0;
let player2Score = 0;
let go = "circle"

infoDisplay.textContent="Circle goes first"

function formSubmit(event) {
  event.preventDefault(); 
  player1Name = player1Input.value;
  player2Name = player2Input.value;
  startGame();
}

function startGame() {
    playerScore1.textContent = `${player1Name}: ${player1Score}`;
    playerScore2.textContent = `${player2Name}: ${player2Score}`;
    // gameboard.addEventListener('click', CellClick);
    cell0.addEventListener('click', CellClick);;
    cell1.addEventListener('click', CellClick);;
    cell2.addEventListener('click', CellClick);;
    cell3.addEventListener('click', CellClick);;
    cell4.addEventListener('click', CellClick);;
    cell5.addEventListener('click', CellClick);;
    cell6.addEventListener('click', CellClick);;
    cell7.addEventListener('click', CellClick);;
    cell8.addEventListener('click', CellClick);;

}




function CellClick(event){

    const clickedCell = event.target;
    let goDisplay=document.createElement('div');
    goDisplay.classList.add(go);
    clickedCell.append(goDisplay);

    if (go === "circle") {
    go = "cross";
    } else {
    go = "circle";
    }

    infoDisplay.textContent="it is now " + go +"'s go ."
    clickedCell.removeEventListener('click', CellClick)
   
    checkScore()
}





function checkScore() {
  const allCells = document.querySelectorAll('.cell');
  let foundWinner = false; 

  winningCombinations.forEach(array => {
    const circleWins = array.every(num => allCells[num].firstChild?.classList.contains('circle'));

    if (circleWins) {
      infoDisplay.textContent = 'Circle Wins!';
      foundWinner = true; 
      return; 
    }
  });

  if (foundWinner) {
    allCells.forEach(num => num.replaceWith(num.cloneNode(true)));
    return; 
  }

  winningCombinations.forEach(array => {
    const crossWins = array.every(num => allCells[num].firstChild?.classList.contains('cross'));

    if (crossWins) {
      infoDisplay.textContent = 'Cross Wins!';
      foundWinner = true; 
      return; 
    }
  });

  if (foundWinner) {
    allCells.forEach(num => num.replaceWith(num.cloneNode(true)));
    return; 
  }
}





form.addEventListener('submit', formSubmit);
