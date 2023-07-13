// refrencing all the input elements (names/scores/cells/winner)

const player1Input = document.getElementById('player1');
const player2Input = document.getElementById('player2');
const playerScore1=document.getElementById('player1Score');
const playerScore2=document.getElementById('player2Score');

const gameboard=document.getElementById('gameboard')
const form = document.getElementById('playerForm');
const startButton = document.getElementById('startButton');
const restartButton=document.getElementById('restart');
const infoDisplay=document.querySelector('.infoDisplay');

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



let player1Name = ''; 
let player2Name = '';
let player1Score = 0;
let player2Score = 0;
let movesPlayed = 0;
let go = "circle";

infoDisplay.textContent="Circle goes first";

function formSubmit(event) {
  event.preventDefault(); 
  player1Name = player1Input.value;
  player2Name = player2Input.value;
  startGame();
}

function startGame() {
    playerScore1.textContent = `O: ${player1Name}:  ${player1Score}`;
    playerScore2.textContent = `X: ${player2Name}: ${player2Score}`;
    
    
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
    movesPlayed++;
    
    

    if (go === "circle") {
        go = "cross";
        } else {
        go = "circle";
    }
    
    infoDisplay.textContent="it is now " + go +"'s go ."
    clickedCell.removeEventListener('click', CellClick)
   
    checkScore()
    if (movesPlayed === 9) {
    infoDisplay.textContent = 'It\'s a draw!';
  }
}





function checkScore() {
  const allCells = document.querySelectorAll('.cell');
  let foundWinner = false; 

  winningCombinations.forEach(array => {
    const circleWins = array.every(num => allCells[num].firstChild?.classList.contains('circle'));

    if (circleWins) {
      infoDisplay.textContent = 'Circle Wins!';
      player1Score++;
      playerScore1.textContent = `O: ${player1Name}: ${player1Score}`;
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
      player2Score++;
      playerScore2.textContent = `X: ${player2Name}: ${player2Score}`;
      foundWinner = true; 
      return; 
    }
  });

  if (foundWinner) {
    allCells.forEach(num => num.replaceWith(num.cloneNode(true)));
    return; 
  }

   if (!foundWinner && movesPlayed === 9) {
    infoDisplay.textContent = 'It\'s a draw!';
    allCells.forEach(cell => cell.innerHTML = ''); 
    movesPlayed = 0; 
  }

 
}



restartButton.addEventListener('click', function() {
  location.reload(); 
});

const continueButton = document.getElementById('continueButton');
continueButton.addEventListener('click', continueGame);

function continueGame() {
  movesPlayed = 0; 
  const allCells = document.querySelectorAll('.cell');
  allCells.forEach(cell => cell.innerHTML = ''); 
  go='circle';
  infoDisplay.textContent = 'It is now ' + go + "'s turn.";


  allCells.forEach(cell => cell.addEventListener('click', CellClick));
}


form.addEventListener('submit', formSubmit);
