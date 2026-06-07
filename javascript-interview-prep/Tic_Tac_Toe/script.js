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
})(); //IIFE after intialising get called automatically as soon as page reloads

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

    let gameStatusMessage="";
    let activePlayer=P1;

    const resetGame=()=> {
        activePlayer=P1;
        gameStatusMessage="";
    }

    const getStatusMessage=()=>gameStatusMessage;

    const playturn=(index)=>{
        if (gameStatusMessage !== "") return;
        GameBoard.placeMarker(index,activePlayer.marker);
        const gameOver=whoWin();
        if(gameOver) {gameStatusMessage=`Winner is ${activePlayer.name}`; return;};
        if(!GameBoard.getBoard().includes("")){
            // console.log("game is Tie");
            gameStatusMessage=`game is Tie`;
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
    return {playturn,resetGame,getStatusMessage};
})();

// GameController.playturn(0); // P1 chala (X) -> Agar upar chala diya hai toh doosra index lijiye
// GameController.playturn(3); // P2 chala (O)
// GameController.playturn(1); // P1 chala (X)
// GameController.playturn(4); // P2 chala (O)
// GameController.playturn(2); // P1 chala (X) -> 0, 1, 2 Row complete!

// to display the ui
const displayController=(()=>{
    const renderBoard=()=>{
        const cells=document.querySelectorAll(".cell");
        const board=GameBoard.getBoard();
        cells.forEach((cell,idx)=>{
            cell.innerHTML=board[idx];
        })
        document.getElementById("gameStatus").innerHTML=GameController.getStatusMessage();
    };
    document.getElementById("gameboard-container").addEventListener("click",(e)=>{
        try{
            if (!e.target.classList.contains("cell")) return; // Gaps par click hone se bachayega
            const index = Number(e.target.dataset.index); // String "4" ab ban gaya number 4
            // const index=e.target.dataset.index;
            GameController.playturn(index);
            renderBoard();
        }catch(err){
            console.log(err);
        }
    });
    document.getElementById("reset").addEventListener("click",()=>{
        // activePlayer=P1;
        GameController.resetGame();
        GameBoard.resetBoard();
        renderBoard();
    });
})();