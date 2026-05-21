import { GameManager } from "./GameManager";
import { TicTacToe } from "./TicTacToe";

function main(): void {
    /*
        Start Game: Player 1 (x) & Player 2 (o)
        Worry about scalability later, hardcode player 1 to be X and player 2 to be O
    */
    // Player 1: boolean = true;     // Mark = "X"
    // Player 2: boolean = false;    // Mark = "O"
    const ttt = new TicTacToe();
    
    // Fill board with a draw scenario (no winner)
    ttt.makeMove(0, 0, "X");
    ttt.makeMove(0, 1, "O");
    ttt.makeMove(0, 2, "X");
    ttt.makeMove(1, 0, "X");
    ttt.makeMove(1, 1, "O");
    ttt.makeMove(1, 2, "O");
    ttt.makeMove(2, 0, "O");
    ttt.makeMove(2, 1, "X");
    ttt.makeMove(2, 2, "X");
    
    ttt.displayBoard();
    
    const isDraw = ttt.checkIfDraw();
    const isWon = ttt.checkIfWon();
    
    console.log(`Is Draw: ${isDraw}`);
    console.log(`Is Won: ${isWon}`);
    console.log(`Test ${isDraw && !isWon ? "PASSED ✓" : "FAILED ✗"}`);
}

main();