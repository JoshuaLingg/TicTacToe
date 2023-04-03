// make an 3x3 array [[1,2,3],[4,5,6],[7,8,9]]
// or make object board { rows as keys, index as value}
// need to know array index is empty, cross or circle
//if array value   0 = empty, 1 = cross, 2 = circle
// function to check iwnner 
const board = {
    0: [0,0,0],
    1: [0,0,0],
    2: [0,0,0],

    gameOver: false,
    tilesPlayed: 0,
    winner: 0,

    select: function (row, column, player) {
        if (this[row][column] === 0) {
            this[row][column] = player;
        }
        this.tilesPlayed += 1;
        this.checkWinner(player);
    },

    restart: function () {
        this[0] = [0,0,0];
        this[1] = [0,0,0];
        this[2] = [0,0,0];

        this.winner = 0;
        this.gameOver = false;
        this.tilesPlayed = 0;
        //can loop later if needed
    },

    checkWinner: function (player) {
        const row1 = this[0];
        const row2 = this[1];
        const row3 = this[2];

        //check rows
        if (row1[0] != 0 && row1[0] === row1[1] && row1[0] === row1[2]) {
            console.log("winner row 1");
            this.winner = player;
            this.gameOver = true;
        }

        if (row2[0] != 0 && row2[0] === row2[1] && row2[0] === row2[2]) {
            console.log("winner row 2");
            this.winner = player;
            this.gameOver = true;
        }

        if (row3[0] != 0 && row3[0] === row3[1] && row3[0] === row3[2]) {
            console.log("winner row 3");
            this.winner = player;
            this.gameOver = true;
        }

        //check columns
        if (row1[0] != 0 && row1[0] === row2[0] && row1[0] === row3[0]) {
            console.log("winner col 1");
            this.winner = player;
            this.gameOver = true;
        }

        if (row1[1] != 0 && row1[1] === row2[1] && row1[1] === row3[1]) {
            console.log("winner col 2");
            this.winner = player;
            this.gameOver = true;
        }

        if (row1[2] != 0 && row1[2] === row2[2] && row1[2] === row3[2]) {
            console.log("winner col 3");
            this.winner = player;
            this.gameOver = true;
        }

        //check diagonals
        if (row1[0] != 0 && row1[0] === row2[1] && row1[0] === row3[2]) {
            console.log("winner top right diagonal");
            this.winner = player;
            this.gameOver = true;
        }

        if (row1[2] != 0 && row1[2] === row2[1] && row1[2] === row3[0]) {
            console.log("winner bottom right diagonal");
            this.winner = player;
            this.gameOver = true;
        }

        if (this.tilesPlayed === 9) {
            this.gameOver = true;
        }

    }
}

//test
board.select(0,0,1);
board.select(0,1,1);
board.select(0,2,1);
board.checkWinner();
board.restart();
board.select(1,0,1);
board.select(1,1,1);
board.select(1,2,1);
board.checkWinner();
board.restart();
board.select(2,0,1);
board.select(2,1,1);
board.select(2,2,1);
board.checkWinner();
board.restart();
board.select(0,0,1);
board.select(1,0,1);
board.select(2,0,1);
board.checkWinner();
board.restart();
board.select(2,0,1);
board.select(1,1,1);
board.select(0,2,1);
board.checkWinner();
board.restart();
board.select(2,2,1);
board.select(1,1,1);
board.select(0,0,1);
board.checkWinner();
board.restart();
board.select(2,1,1);
board.select(1,1,1);
board.select(0,2,1);
board.checkWinner();
board.restart();

