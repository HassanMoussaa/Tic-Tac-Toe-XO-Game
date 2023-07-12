// refrencing all the input elements (names/scores/cells/winner)

let player1Input = document.getElementById('player1');
let player2Input = document.getElementById('player2');
let playerScore1=document.getElementById('player1Score');
let playerScore2=document.getElementById('player2Score');
let winnerPlayer=document.getElementById('winner');
let gameboard=document.getElementById('gameboard')
let form = document.getElementById('playerForm');
let startButton = document.getElementById('startButton');


const winningCombinations = [
  [0, 1, 2], 
  [3, 4, 5], 
  [6, 7, 8], 
  [1, 4, 7],
  [2, 5, 8], 
  [0, 4, 8],
  [2, 4, 6]  
];

let cell0=document.getElementById('cell0')
let cell1=document.getElementById('cell1')
let cell2=document.getElementById('cell2')
let cell3=document.getElementById('cell3')
let cell4=document.getElementById('cell4')
let cell5=document.getElementById('cell5')
let cell6=document.getElementById('cell6')
let cell7=document.getElementById('cell7')
let cell8=document.getElementById('cell8')


let player1Name = ''; 
let player2Name = '';
let player1Score = 0;
let player2Score = 0;
let currentPlayer = 'player1'


function formSubmit(event) {
  event.preventDefault(); 
  player1Name = player1Input.value;
  player2Name = player2Input.value;
  startGame();
}

function startGame() {
  playerScore1.textContent = `${player1Name}: ${player1Score}`;
  playerScore2.textContent = `${player2Name}: ${player2Score}`;
  gameboard.addEventListener('click', CellClick);

}


function CellClick(event){
     if (event.target.classList.contains('cell')) {
  
       let clickedCell = event.target;
}

}



form.addEventListener('submit', formSubmit);
