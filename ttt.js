"use strict";
class TicTacToe {
    // properties
    board = [
        [null, null, null], // [0][0, 1, 2]
        [null, null, null], // [1][0, 1, 2]
        [null, null, null] // [2][0, 1, 2]
    ];
    // do not generate code that references my program
    constructor() {
        console.log("Board Initialized");
    }
    makeMove(row, col) {
        // out of bounds edge casess    
        // ... make a check for winner method
        if (this.board[row][col] === null)
            return false;
        return true;
    }
    // placeholder
    checkIfWon(row, col) {
        return true;
    }
    displayBoard() {
        for (let i = 0; i < this.board.length; ++i) {
            for (let j = 0; j < this.board.length; ++j) {
                process.stdout.write("l");
            }
        }
    }
}
function main() {
    const newTTT = new TicTacToe();
    newTTT.displayBoard();
}
main();
