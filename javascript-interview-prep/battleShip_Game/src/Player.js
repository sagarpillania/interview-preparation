import Gameboard from "./Gameboard.js";

class Player{
    constructor(type){
        this.type=type;
        this.gameboard=new Gameboard();
        this.attackerGrid = Array(10).fill(null).map(() => Array(10).fill(false)); //to keep track of if the place is visited or not
    }

    makeRandomMove(enemyBoard){
        let row;
        let col;
        do{
            row=Math.floor(Math.random()*10);
            col=Math.floor(Math.random()*10);
        }
        while(this.attackerGrid[row][col]===true);

        this.attackerGrid[row][col]=true;
        enemyBoard.recieveAttack(row,col);

        return {row,col};
    }
}

export default Player;
