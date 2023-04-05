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
    },

    getBoard: function() {
        boardArr = []; // im so dumb could have made a 3x3 ...oh well
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
                const randCorner = Math.floor(Math.random()*4);
                if (randCorner === 0) {
                    return this.playMove(0,0);
                }
                if (randCorner === 1) {
                    return this.playMove(0,2);
                }
                if (randCorner === 2) {
                    return this.playMove(2,0);
                }
                if (randCorner === 3) {
                    return this.playMove(2,2);
                }
            }
        
        //checks for row for computer
        for (let i = 0; i < 9; i += 3) {
            if(boardArr[i] === 2 && boardArr[i+1] === 2 && boardArr[i+2] === 0) {   
                return this.playMove(Math.floor((i+2)/3), ((i+2) % 3));
            }
            if(boardArr[i+1] === 2 && boardArr[i+2] === 2 && boardArr[i] === 0) {
                return this.playMove(Math.floor((i)/3), (i % 3));
            }
            if(boardArr[i] === 2 && boardArr[i+2] === 2 && boardArr[i+1] === 0) {
                return this.playMove(Math.floor((i+1)/3), ((i+1) % 3));
            }
        }
        
        //checks for col for computer
        for (let i = 0; i < 3; i++) {
            if(boardArr[i] === 2 && boardArr[i+3] === 2 && boardArr[i+6] === 0) {   
                return this.playMove(Math.floor((i+6)/3), (i % 3));
            }

            if(boardArr[i+3] === 2 && boardArr[i+6] === 2 && boardArr[i] === 0) {
                return this.playMove(Math.floor((i)/3), (i % 3));
            }
            if(boardArr[i] === 2 && boardArr[i+6] === 2 && boardArr[i+3] === 0) {
                return this.playMove(Math.floor((i+3)/3), (i % 3));
            }
        }
        
        //diagonals for computer
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

        //check row for player1
        for (let i = 0; i < 9; i += 3) {
            if(boardArr[i] === 1 && boardArr[i+1] === 1 && boardArr[i+2] === 0) {   
                console.log(Math.floor((i+2)/3), (i % 3));
                return this.playMove(Math.floor((i+2)/3), ((i+2) % 3));
            }
            if(boardArr[i+1] === 1 && boardArr[i+2] === 1 && boardArr[i] === 0) {
                console.log(Math.floor((i+2)/3), (i % 3));
                return this.playMove(Math.floor((i)/3), (i % 3));
            }
            if(boardArr[i] === 1 && boardArr[i+2] === 1 && boardArr[i+1] === 0) {
                return this.playMove(Math.floor((i+1)/3), ((i+1) % 3));
            }
        }

        //check for col for player1
        for (let i = 0; i < 3; i++) {
            if(boardArr[i] === 1 && boardArr[i+3] === 1 && boardArr[i+6] === 0) {   
                return this.playMove(Math.floor((i+6)/3), (i % 3));
            }

            if(boardArr[i+3] === 1 && boardArr[i+6] === 1 && boardArr[i] === 0) {
                return this.playMove(Math.floor((i)/3), (i % 3));
            }
            if(boardArr[i] === 1 && boardArr[i+6] === 1 && boardArr[i+3] === 0) {
                return this.playMove(Math.floor((i+3)/3), (i % 3));
            }
        }

        //diagonals for player1
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