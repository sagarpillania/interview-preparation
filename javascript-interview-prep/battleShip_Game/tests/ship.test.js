import Ship from "../src/Ship.js";

describe('Ship Factory/ Class',()=>{
    test('should intialize with length and hits zero',()=>{
        const submarine=new Ship(3);
        expect(submarine.length).toBe(3);
        expect(submarine.hits).toBe(0);
    });

    test('hit() should increase hit count',()=>{
        const destroyer=new Ship(4);
        destroyer.hit();
        expect(destroyer.hits).toBe(1);
    });

    test('sink() should return true when fully hit',()=>{
        const sinkk=new Ship(2);
        expect(sinkk.isSunk()).toBe(false);

        sinkk.hit();
        sinkk.hit();
        expect(sinkk.isSunk()).toBe(true);
    })
})