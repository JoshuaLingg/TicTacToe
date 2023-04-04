//this file is for a two player game
// create a function that toggles between the players
//let player select a square (get player input)
// loop through until winner
let player1turn = true;
let computerPlay = true;

$("document").ready(function() {
    render();
    console.log("its working");
    $("#square00").click(function() {
        play(0,0);
    });
    $("#square01").click(function() {
    play(0,1);
    });
    $("#square02").click(function() {
        play(0,2);
    });
    $("#square10").click(function() {
        play(1,0);
    });
    $("#square11").click(function() {
    play(1,1);
    });
    $("#square12").click(function() {
        play(1,2);
    });
    $("#square20").click(function() {
        play(2,0);
    });
    $("#square21").click(function() {
        play(2,1);
    });
    $("#square22").click(function() {
        play(2,2);
    });

    //gameover button
    $("#playagain").click(function() {
        board.restart();
        
        $(".square").css("pointer-events", "auto");
        $("#gameover").toggle();
        player1turn = true;
        render();
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

const play = (row, col) => {
    if (board[row][col] != 0) {
        return;
    }
    if (player1turn) {
        board.select(row,col,1);
    }
    else {
        board.select(row,col,2);
    }

    player1turn = !player1turn;
    render();

    if (!player1turn && computer && !board.gameOver) {
        computer.decideMove();
        player1turn = !player1turn;
        render();
    }
    
    if (board.gameOver) {
        console.log("over");
        //render();
        if (board.winner === 0) {
            $("#gameovertext").html("Draw");
        }
        else {
            $("#gameovertext").html(`Player ${board.winner} Wins!`);
        }
        $(".square").css("pointer-events", "none");
        $("#gameover").toggle();
    }
}

