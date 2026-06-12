import Player from './Player.js';
import Ship from './Ship.js';
import { renderBoard } from './domUI.js';

// 1. Initialize our Players
const humanPlayer = new Player('real');
const computerPlayer = new Player('computer');

// 2. Set up predetermined ships for both players (We'll make this dynamic later!)
const computerShip1 = new Ship(3);
const computerShip2 = new Ship(1);
const computerShip3 = new Ship(2);
const computerShip4 = new Ship(4);
const computerShip5 = new Ship(5);
const humanShip1 = new Ship(3);
const humanShip2 = new Ship(1);
const humanShip3 = new Ship(2);
const humanShip4 = new Ship(4);
const humanShip5 = new Ship(5);

humanPlayer.gameboard.placeShip(humanShip1, 2, 2, 'horizontal');
humanPlayer.gameboard.placeShip(humanShip2, 0, 0, 'vertical');
humanPlayer.gameboard.placeShip(humanShip3, 5, 1, 'horizontal');
humanPlayer.gameboard.placeShip(humanShip4, 7, 4, 'horizontal');
humanPlayer.gameboard.placeShip(humanShip5, 5, 5, 'horizontal');

computerPlayer.gameboard.placeShip(computerShip1, 4, 5, 'vertical');
computerPlayer.gameboard.placeShip(computerShip2, 1, 8, 'horizontal');
computerPlayer.gameboard.placeShip(computerShip3, 6, 2, 'vertical');
computerPlayer.gameboard.placeShip(computerShip4, 8, 3, 'horizontal');
computerPlayer.gameboard.placeShip(computerShip5, 0, 5, 'horizontal');

// 3. Grab references to our DOM elements (Make sure these IDs exist in an index.html file!)
const humanBoardContainer = document.getElementById('human-board');
const computerBoardContainer = document.getElementById('computer-board');

// 4. Initial Render
function updateDisplay() {
    renderBoard(humanPlayer.gameboard, humanBoardContainer, false);
    renderBoard(computerPlayer.gameboard, computerBoardContainer, true); // true hides enemy ships!
}

// 5. Turn Listener Loop
computerBoardContainer.addEventListener('click', (e) => {
    // Make sure the user clicked on a cell grid square
    if (!e.target.classList.contains('cell')) return;

    const row = parseInt(e.target.dataset.row);
    const col = parseInt(e.target.dataset.col);

    // Prevent clicking on already targeted grid squares
    const currentSquare = computerPlayer.gameboard.getSquareState(row, col);
    if (currentSquare === 'hit' || currentSquare === 'miss') return;

    // --- HUMAN TURN ---
    computerPlayer.gameboard.recieveAttack(row, col);

    // Check if Human Won
    if (computerPlayer.gameboard.areAllShipsSunk()) {
        updateDisplay();
        alert('Victory! You sank all enemy battleships!');
        return;
    }

    // --- COMPUTER COUNTER-TURN ---
    computerPlayer.makeRandomMove(humanPlayer.gameboard);

    // Check if Computer Won
    if (humanPlayer.gameboard.areAllShipsSunk()) {
        updateDisplay();
        alert('Defeat! The computer sank your fleet!');
        return;
    }

    // Re-render boards to reflect the new state changes!
    updateDisplay();
});

// Run initial mount layout render
updateDisplay();
