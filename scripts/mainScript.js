let winMsg = 'Vitoria';
let loseMsg = 'Derrota';
let tieMsg = 'Empate';

let moveList =['Pedra','Papel','Tesoura'];
let statusDisplay = document.querySelector('#status-head');
let moveDisplays = document.querySelectorAll('.move-display h2');
let buttons = document.querySelectorAll('button');


function calcResult(move1, move2) {
    let result = move1 - move2;

    if (result == 1 || result + 3 == 1) {
        return winMsg;
      } else if (result == 2 || result + 3 == 2) {
        document.body.style.backgroundColor = '#C83E4D'
        return loseMsg;
      } else {
        document.body.style.backgroundColor = '#FFD240'
        return tieMsg;
      }
}


function randomMove() {
  return Math.floor(Math.random() * 3);
}


function startGame() {
    document.body.style.backgroundColor = '#41B3a3'
    statusDisplay.textContent = "Escolha!";
    buttons.forEach((button, index) => {
      button.textContent = moveList[index];
      button.style.display = "inline-block";
      buttons[index].addEventListener("click", endGame);
    });
    moveDisplays.forEach((moveDisplay) => (moveDisplay.style.display = "none"));
}


function endGame(event) {
    let playerMove = moveList.indexOf(event.target.textContent);
    let computerMove = randomMove();
    statusDisplay.textContent = calcResult(playerMove, computerMove);
    moveDisplays.forEach(
      (moveDisplay) => (moveDisplay.style.display = "inline-block")
    );
    moveDisplays[0].textContent = `Você jogou ${moveList[playerMove]}`;
    moveDisplays[1].textContent = `Computador jogou ${moveList[computerMove]}`;
    buttons.forEach((button, index) => {
      if (index == 1) {
        button.textContent = "Jogar novamente";
        button.removeEventListener("click", endGame);
        button.addEventListener("click", startGame);
      } else {
        button.style.display = "none";
      }
    });
}

startGame();