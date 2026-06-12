import Gameboard from "../src/Gameboard.js";
import Ship from "../src/Ship.js";
import Player from "../src/Player.js";

describe('Player Factory/Class',()=>{
    test('create the player and assign it its board',()=>{
        const player1=new Player('human');
        const player2=new Player('computer');
        expect(player1.type).toBe('human');
        expect(player2.type).toBe('computer');

        expect(player1.gameboard).toBeInstanceOf(Gameboard);
        expect(player2.gameboard).toBeInstanceOf(Gameboard);
    });
});