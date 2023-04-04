// needs to be able to know board positions
// needs to know alll permutations (maybe? cool dream)
// needs to be able to place tokens
// set a bit of delay after player moves

// will be able to detect when player 1 is about to win and block it

//for now computer will be player 2
let boardPos = [0,0,0,0,0,0,0,0,0];
let boardPosStr = "";
let emptySpace = [];
const computer = { 
    playMove: function(row, col) {
        board.select(row, col, 2);
        render();
    },

    getBoard: function() {
        boardPos = [];
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                boardPos.push(board[i][j]);
                boardPosStr += String(board[i][j]);
            }
        }
    },

    decideMove: function() {
        this.getBoard();
        emptySpace = [];
        let randIndex = 0;
        player1turn = !player1turn;
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

            //second moves too hard, going to make it random
        for (let i = 0; i < boardPos.length; i++) {
            if (boardPos[i] === 0) {
                let rowIndex = Math.floor(i/3);
                let colIndex = (i % 3); 
                emptySpace.push([rowIndex,colIndex]);
            }
        }

        randIndex = Math.floor(Math.random() * emptySpace.length);
        return this.playMove(emptySpace[randIndex][0], emptySpace[randIndex][1]);
        
    }
}