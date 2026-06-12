import Ship from "./Ship";

class Gameboard {
    constructor() {
        this.grid = Array(10).fill(null).map(() => Array(10).fill(null));
        this.shipsArray = [];
    }

    placeShip(ship, row, col, direction) {
        // 1. Loop only handles coordinate reference placements on our matrix grid
        for (let i = 0; i < ship.length; i++) {
            if (direction === 'horizontal') {
                this.grid[row][col + i] = ship;
            } else if (direction === 'vertical') {
                this.grid[row + i][col] = ship;
            }
        }
        
        // 2. Track the ship ONCE safely outside the placement iteration loop
        this.shipsArray.push(ship);
    }

    getSquareState(row, col) {
        return this.grid[row][col];
    }

    recieveAttack(row, col) {
        const target = this.grid[row][col];

        if (target === null) {
            this.grid[row][col] = 'miss';
        } else if (typeof target === 'object' && target.hit) {
            target.hit();
            this.grid[row][col] = 'hit';
        }
    }

    areAllShipsSunk() {
        // 3. Corrected context scope, method bindings, and added functional return value statement
        return this.shipsArray.every((item) => item.isSunk());
    }
}

export default Gameboard;