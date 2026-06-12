export function renderBoard(gameboard, containerElement, isEnemyBoard = false) {
    // Clear out the container so we don't accidentally duplicate old grids on re-renders
    containerElement.innerHTML = '';

    // Loop through our 10x10 data matrix grid row by row
    for (let r = 0; r < 10; r++) {
        for (let c = 0; c < 10; c++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            
            // Store coordinates as datasets so we can read clicks easily
            cell.dataset.row = r;
            cell.dataset.col = c;

            // Extract the state of this specific coordinate from our Gameboard engine
            const state = gameboard.getSquareState(r, c);

            // Style the cell depending on what is resting on that coordinate
            if (state === 'hit') {
                cell.classList.add('hit');
                cell.textContent = '💥';
            } else if (state === 'miss') {
                cell.classList.add('miss');
                cell.textContent = '🌊';
            } else if (state && typeof state === 'object' && !isEnemyBoard) {
                // It's a ship, and it's our OWN board -> Show where our ships are!
                cell.classList.add('ship');
            }

            containerElement.appendChild(cell);
        }
    }
}