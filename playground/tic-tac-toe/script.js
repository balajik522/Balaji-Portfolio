// =========================================
// TIC TAC TOE - SCRIPT.JS
// =========================================

const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");
const restartBtn = document.getElementById("restartBtn");

const scoreX = document.getElementById("scoreX");
const scoreO = document.getElementById("scoreO");
const drawScore = document.getElementById("drawScore");

let currentPlayer = "X";
let gameRunning = true;

let board = [
    "", "", "",
    "", "", "",
    "", "", ""
];

let xWins = 0;
let oWins = 0;
let draws = 0;

const winPatterns = [

    [0,1,2],
    [3,4,5],
    [6,7,8],

    [0,3,6],
    [1,4,7],
    [2,5,8],

    [0,4,8],
    [2,4,6]

];

// =========================
// Cell Click
// =========================

cells.forEach(cell => {

    cell.addEventListener("click", cellClicked);

});

restartBtn.addEventListener("click", restartGame);

function cellClicked(){

    const index = this.dataset.index;

    if(board[index] !== "" || !gameRunning){

        return;

    }

    board[index] = currentPlayer;

    this.textContent = currentPlayer;

    this.classList.add(currentPlayer.toLowerCase());

    checkWinner();

}

// =========================
// Winner Logic
// =========================

function checkWinner(){

    let roundWon = false;

    for(let pattern of winPatterns){

        const a = pattern[0];
        const b = pattern[1];
        const c = pattern[2];

        if(board[a] === "")

            continue;

        if(
            board[a] === board[b] &&
            board[b] === board[c]
        ){

            roundWon = true;

            cells[a].classList.add("win");
            cells[b].classList.add("win");
            cells[c].classList.add("win");

            break;

        }

    }

    if(roundWon){

        statusText.textContent =
        `🎉 Player ${currentPlayer} Wins!`;

        gameRunning = false;

        if(currentPlayer === "X"){

            xWins++;
            scoreX.textContent = xWins;

        }else{

            oWins++;
            scoreO.textContent = oWins;

        }

        return;

    }

    if(!board.includes("")){

        statusText.textContent = "🤝 Match Draw";

        draws++;

        drawScore.textContent = draws;

        gameRunning = false;

        return;

    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";

    statusText.textContent =
    `Player ${currentPlayer}'s Turn`;

}

// =========================
// Restart
// =========================

function restartGame(){

    board = [

        "", "", "",
        "", "", "",
        "", "", ""

    ];

    currentPlayer = "X";

    gameRunning = true;

    statusText.textContent =
    "Player X's Turn";

    cells.forEach(cell => {

        cell.textContent = "";

        cell.classList.remove(
            "x",
            "o",
            "win"
        );

    });

}