// needs to be able to know board positions
// needs to know alll permutations (maybe? cool dream)
// needs to be able to place tokens
// set a bit of delay after player moves

// will be able to detect when player 1 is about to win and block it
// will be able to detect when computer about to win

//for now computer will be player 2
let boardArr = [0,0,0,0,0,0,0,0,0];
let boardPosStr = "";
let emptySpaceArr = [];
const computer = { 
    playMove: function(row, col) {
        board.select(row, col, 2);
        //render();
    },

    getBoard: function() {
        boardArr = [];
        boardPosStr = "";
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                boardArr.push(board[i][j]);
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
        
        if(boardArr[0] === 2 && boardArr[1] === 2 && boardArr[2] === 0) {
            return this.playMove(0,2);
        }
        if(boardArr[1] === 2 && boardArr[2] === 2 && boardArr[0] === 0) {
            return this.playMove(0,0);
        }
        if(boardArr[3] === 2 && boardArr[4] === 2 && boardArr[5] === 0) {
            return this.playMove(1,2);
        }
        if(boardArr[4] === 2 && boardArr[5] === 2 && boardArr[3] === 0) {
            return this.playMove(1,0);
        }
        if(boardArr[6] === 2 && boardArr[7] === 2 && boardArr[8] === 0) {
            return this.playMove(2,2);
        }
        if(boardArr[7] === 2 && boardArr[8] === 2 && boardArr[6] === 0) {
            return this.playMove(2,0);
        }
        if(boardArr[0] === 2 && boardArr[2] === 2 && boardArr[1] === 0) {
            return this.playMove(0,1);
        }
        if(boardArr[3] === 2 && boardArr[5] === 2 && boardArr[4] === 0) {
            return this.playMove(1,1);
        }
        if(boardArr[6] === 2 && boardArr[8] === 2 && boardArr[7] === 0) {
            return this.playMove(2,1);
        }
        
        if(boardArr[0] === 2 && boardArr[3] === 2 && boardArr[6] === 0) {
            return this.playMove(2,0);
        }
        if(boardArr[3] === 2 && boardArr[6] === 2 && boardArr[0] === 0) {
            return this.playMove(0,0);
        }
        if(boardArr[1] === 2 && boardArr[4] === 2 && boardArr[7] === 0) {
            return this.playMove(2,1);
        }
        if(boardArr[4] === 2 && boardArr[7] === 2 && boardArr[1] === 0) {
            return this.playMove(0,1);
        }
        if(boardArr[2] === 2 && boardArr[5] === 2 && boardArr[8] === 0) {
            return this.playMove(2,2);
        }
        if(boardArr[5] === 2 && boardArr[8] === 2 && boardArr[2] === 0) {
            return this.playMove(0,2);
        }
        if(boardArr[0] === 2 && boardArr[6] === 2 && boardArr[3] === 0) {
            return this.playMove(1,0);
        }
        if(boardArr[1] === 2 && boardArr[7] === 2 && boardArr[4] === 0) {
            return this.playMove(1,1);
        }
        if(boardArr[2] === 2 && boardArr[8] === 2 && boardArr[5] === 0) {
            return this.playMove(1,2);
        }
        
        if(boardArr[0] === 2 && boardArr[4] === 2 && boardArr[8] === 0) {
            return this.playMove(2,2);
        }
        if(boardArr[4] === 2 && boardArr[8] === 2 && boardArr[0] === 0) {
            return this.playMove(0,0);
        }
        if(boardArr[2] === 2 && boardArr[4] === 2 && boardArr[6] === 0) {
            return this.playMove(2,0);
        }
        if(boardArr[4] === 2 && boardArr[6] === 2 && boardArr[2] === 0) {
            return this.playMove(0,2);
        }

        //check if 2 in a row for enemy
        if(boardArr[0] === 1 && boardArr[1] === 1 && boardArr[2] === 0) {
            return this.playMove(0,2);
        }
        if(boardArr[1] === 1 && boardArr[2] === 1 && boardArr[0] === 0) {
            return this.playMove(0,0);
        }
        if(boardArr[3] === 1 && boardArr[4] === 1 && boardArr[5] === 0) {
            return this.playMove(1,2);
        }
        if(boardArr[4] === 1 && boardArr[5] === 1 && boardArr[3] === 0) {
            return this.playMove(1,0);
        }
        if(boardArr[6] === 1 && boardArr[7] === 1 && boardArr[8] === 0) {
            return this.playMove(2,2);
        }
        if(boardArr[7] === 1 && boardArr[8] === 1 && boardArr[6] === 0) {
            return this.playMove(2,0);
        }
        if(boardArr[0] === 1 && boardArr[2] === 1 && boardArr[1] === 0) {
            return this.playMove(0,1);
        }
        if(boardArr[3] === 1 && boardArr[5] === 1 && boardArr[4] === 0) {
            return this.playMove(1,1);
        }
        if(boardArr[6] === 1 && boardArr[8] === 1 && boardArr[7] === 0) {
            return this.playMove(2,1);
        }

        if(boardArr[0] === 1 && boardArr[3] === 1 && boardArr[6] === 0) {
            return this.playMove(2,0);
        }
        if(boardArr[3] === 1 && boardArr[6] === 1 && boardArr[0] === 0) {
            return this.playMove(0,0);
        }
        if(boardArr[1] === 1 && boardArr[4] === 1 && boardArr[7] === 0) {
            return this.playMove(2,1);
        }
        if(boardArr[4] === 1 && boardArr[7] === 1 && boardArr[1] === 0) {
            return this.playMove(0,1);
        }
        if(boardArr[2] === 1 && boardArr[5] === 1 && boardArr[8] === 0) {
            return this.playMove(2,2);
        }
        if(boardArr[5] === 1 && boardArr[8] === 1 && boardArr[2] === 0) {
            return this.playMove(0,2);
        }
        if(boardArr[0] === 1 && boardArr[6] === 1 && boardArr[3] === 0) {
            return this.playMove(1,0);
        }
        if(boardArr[1] === 1 && boardArr[7] === 1 && boardArr[4] === 0) {
            return this.playMove(1,1);
        }
        if(boardArr[2] === 1 && boardArr[8] === 1 && boardArr[5] === 0) {
            return this.playMove(1,2);
        }

        if(boardArr[0] === 1 && boardArr[4] === 1 && boardArr[8] === 0) {
            return this.playMove(2,2);
        }
        if(boardArr[4] === 1 && boardArr[8] === 1 && boardArr[0] === 0) {
            return this.playMove(0,0);
        }
        if(boardArr[2] === 1 && boardArr[4] === 1 && boardArr[6] === 0) {
            return this.playMove(2,0);
        }
        if(boardArr[4] === 1 && boardArr[6] === 1 && boardArr[2] === 0) {
            return this.playMove(0,2);
        }

            //second moves too complicated, going to make it random
        for (let i = 0; i < boardArr.length; i++) {
            if (boardArr[i] === 0) {
                let rowIndex = Math.floor(i/3);
                let colIndex = (i % 3); 
                emptySpaceArr.push([rowIndex,colIndex]);
            }
        }

        randIndex = Math.floor(Math.random() * emptySpaceArr.length);
        return this.playMove(emptySpaceArr[randIndex][0], emptySpaceArr[randIndex][1]);
        
    }
}