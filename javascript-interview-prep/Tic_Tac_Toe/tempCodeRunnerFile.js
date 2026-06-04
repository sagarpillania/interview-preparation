const GameBoard = (()=>{
    let board =["","","","","","","","",""];

    const getBoard= ()=> board;

    const placeMarker= (index,marker)=>{
        if(board[index]!=""){
            throw Error("Already marked");
        }
        board[index]=marker;
    };

    const resetBoard=()=>{
        for(let i=0;i<9;i++){
            board[i]="";
        }
    };

    return {getBoard,placeMarker,resetBoard};   
})(); //IIFE after intialising get called automatically

const Player=function player(name,marker){
    return {name,marker};
}
const P1=Player("Sagar","X");
const P2=Player("Sumit","O");


const GameController=(()=>{
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    let activePlayer=P1;
    
    const playturn=(index)=>{
        GameBoard.placeMarker(index,activePlayer.marker);
        const gameOver=whoWin();
        if(gameOver) {console.log("Winner is ",activePlayer.name); return;};
        if(!GameBoard.getBoard().includes("")){
            console.log("game is Tie");
            return;
        }
        activePlayer=(activePlayer===P1)?P2:P1;
    }

    const whoWin=()=>{
        const board=GameBoard.getBoard();
        for(let num of winConditions){
            // const currentWin=winConditions[i];
            if(board[num[0]]!=="" && board[num[0]]===board[num[1]] && board[num[0]]===board[num[2]]){
                return true;
            }
        }
        return false;
    }
    return {playturn};
})();