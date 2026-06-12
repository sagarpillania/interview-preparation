import Gameboard from "../src/Gameboard.js";
import Ship from "../src/Ship.js";

describe('Gameboard Factory/Class',()=>{
    test('should place the ship at specified cordinates horizontally',()=>{
        const board=new Gameboard();
        const ship=new Ship(3);

        board.placeShip(ship,2,3,'horizontal'); //row 2 col 3 horizontally

        expect(board.getSquareState(2,3)).toBe(ship);
        expect(board.getSquareState(2,4)).toBe(ship);
    })
})