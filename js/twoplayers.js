//this file is for a two player game
// create a function that toggles between the players
//let player select a square (get player input)
// loop through until winner
let player1turn = true;

$("document").ready(function() {
    render();
    
    $("#square00").click(function() {
        twoPlay(0,0);
    });
    $("#square01").click(function() {
    twoPlay(0,1);
    });
    $("#square02").click(function() {
        twoPlay(0,2);
    });
    $("#square10").click(function() {
        twoPlay(1,0);
    });
    $("#square11").click(function() {
    twoPlay(1,1);
    });
    $("#square12").click(function() {
        twoPlay(1,2);
    });
    $("#square20").click(function() {
        twoPlay(2,0);
    });
    $("#square21").click(function() {
        twoPlay(2,1);
    });
    $("#square22").click(function() {
        twoPlay(2,2);
    });

    //gameover button
    $("#playagain").click(function() {
        board.restart();
        render();
        $(".square").css("pointer-events", "auto");
        $("#gameover").toggle();
    });

});

const render = () => {
    colorSquare(0,0);
    colorSquare(0,1);
    colorSquare(0,2);
    colorSquare(1,0);
    colorSquare(1,1);
    colorSquare(1,2);
    colorSquare(2,0);
    colorSquare(2,1);
    colorSquare(2,2);

    if (player1turn) {
        $("#msg").html("It's Player 1's Turn");
    }
    if (!player1turn) {
        $("#msg").html("It's Player 2's Turn");
    }
}

const colorSquare = (row, col) => {
    if (board[row][col] != 0) {
        if (board [row][col] === 1) {
            return $(`#square${row}${col}`).addClass("player1");
        }
        return $(`#square${row}${col}`).addClass("player2");
    }
    $(`#square${row}${col}`).removeClass("player1");
    $(`#square${row}${col}`).removeClass("player2");
}

const twoPlay = (row, col) => {
    if (board[row][col] != 0) {
        return;
    }
    if (player1turn) {
        board.select(row,col,1);
    }
    else {
        board.select(row,col,2);
    }

    if (board.gameOver) {
        render();
        if (board.winner === 0) {
            $("#gameovertext").html("Draw");
        }
        else {
            $("#gameovertext").html(`Player ${board.winner} Wins!`);
        }
        $(".square").css("pointer-events", "none");
        $("#gameover").toggle();
    }

    player1turn = !player1turn;
    render();
    
}

