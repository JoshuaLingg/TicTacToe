// needs to be able to know board positions
// needs to know alll permutations (maybe? cool dream)
// needs to be able to place tokens
// set a bit of delay after player moves

// will be able to detect when player 1 is about to win and block it
// will be able to detect when computer about to win

//for now computer will be player 2
let boardPosArr = [0,0,0,0,0,0,0,0,0];
let boardPosStr = "";
let emptySpaceArr = [];
const computer = { 
    playMove: function(row, col) {
        board.select(row, col, 2);
        //render();
    },

    getBoard: function() {
        boardPosArr = [];
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                boardPosArr.push(board[i][j]);
                boardPosStr += String(board[i][j]);
            }
        }
    },

    decideMove: function() {
        this.getBoard();
        emptySpaceArr = [];
        let randIndex = 0;
        //player1turn = !player1turn;
        //first move
        if (boardPosStr === "100000000" || 
            boardPosStr === "001000000" ||
            boardPosStr === "000000100" ||
            boardPosStr === "000000001")
            {
                return this.playMove(1,1);
            }
        if (boardPosStr === "010000000" || 
            boardPosStr === "000100000" ||
            boardPosStr === "000001000" ||
            boardPosStr === "000000010")
            {
                return this.playMove(1,1);
            }
        if (boardPosStr === "000010000")
            {
                return this.playMove(0,0);
            }

            //second moves too complicated, going to make it random
        for (let i = 0; i < boardPosArr.length; i++) {
            if (boardPosArr[i] === 0) {
                let rowIndex = Math.floor(i/3);
                let colIndex = (i % 3); 
                emptySpaceArr.push([rowIndex,colIndex]);
            }
        }

        randIndex = Math.floor(Math.random() * emptySpaceArr.length);
        return this.playMove(emptySpaceArr[randIndex][0], emptySpaceArr[randIndex][1]);
        
    }
}