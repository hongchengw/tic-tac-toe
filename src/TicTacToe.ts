/*
Core Game Logic
Player Turn Management — You need a way to track whose turn it is and alternate between players. 
    Currently, the caller manually specifies the mark ("X" or "o"), which allows invalid states like lowercase "x".

Input Validation for Mark — Your code doesn't validate that the mark is a valid player symbol. You accept any string, but tic-tac-toe only has two players.

Draw/Tie Detection — You check for wins but have no logic to detect when the board is full with no winner (a draw condition).

Game State Management — There's no way to track if the game is ongoing, won, or drawn. Each method operates independently.
*/

/*
    Conceptual Flow
    GameManager tracks:
    - currentPlayer (whose turn)
    - gameState (waiting for players, ongoing, won, drawn)
    - both player assignments (who chose X, who chose O)

    When a player makes a move:
        GameManager calls: tictactoe.makeMove(row, col, currentPlayer)
        TicTacToe places the mark and returns true/false
        GameManager checks if won/drawn, switches currentPlayer
*/

enum Player {
    X = "X",
    O = "O",
}

class TicTacToe {
    // Properties
    private readonly board: (string | null)[][] = [ 
        [null, null, null], // [0][0, 1, 2] -- [0][0] [0][1] [0][2]
        [null, null, null], // [1][0, 1, 2] -- [1][0] [1][1] [1][2]
        [null, null, null]  // [2][0, 1, 2] -- [2][0] [2][1] [2][2]
    ];

    // Constructor
    constructor() { 
        console.log("Board Initialized");
    } 

    // Public Methods 

    // Player adds a move on the board
    // Addition: verify mark matches current player symbol;
    public makeMove(row: number, col: number, mark: string): boolean {
       // Implement Try & Catch later
        // out of bounds edge casess    
        if (row < 0 || row > 2 || col < 0 || col > 2) return false;
        const value = this.board[row]?.[col];
        // need to track which player is playing :doro_thinking:
        if (value === null) { 
            this.board[row]![col] = mark; 
            return true; 
        } else { 
            console.log("Invalid Positon"); 
            return false; 
        }
    }

    /*
        Reference: 
                    [1][2][3]
                    [4][5][6]
                    [7][8][9]
    */
    // Check for win-conditions
    public checkIfWon(): boolean {
        return this.checkRows() === true || 
                this.checkCols() === true || 
                this.checkDiagonals() === true;
    }

    public checkIfDraw(): boolean {
        // Check if board is completely full
        let fullBoard: boolean = true;

        for (const row of this.board) {
            for (const cell of row) {
                if (cell === null ||
                     cell === undefined) fullBoard = false;
            }
        }

        // full board and no winner; draw concluded
        if (fullBoard && this.checkIfWon() === false) return true;

        return false;
    }

    // Displays TicTacToe board in 3x3 Pattern.
    public displayBoard(): void {
        console.log("-------------");
        for (const row of this.board) {
            process.stdout.write("| ");
            for (const cell of row) {
                const value = cell ?? " ";
                process.stdout.write(value + " | ");
            } 
            process.stdout.write("\n");
            console.log("-------------");
        }
    } 

    // Private Methods (Helper Functions);

    // Check rows for win condition
    private checkRows(): boolean {
        for (const row of this.board) {
            const allX = row.every((cell) => cell === "X");
            const allO = row.every((cell) => cell === "O");

            if ( allX || allO ) return true;
        }
        return false;
    }

    // Check columns for win condition
    private checkCols(): boolean {
        for(let col = 0; col < this.board.length; ++col) {
            const val1: string | null = this.board[0]?.[col] as string | null;
            const val2: string | null = this.board[1]?.[col] as string | null;
            const val3: string | null = this.board[2]?.[col] as string | null;
            const allX = val1 === "X" && val2 === "X" && val3 === "X";
            const allO = val1 === "O" && val2 === "O" && val3 === "O";
            if ( allX || allO ) return true;
        }
        return false; 
    }

    // Check diagonals for win condition
    private checkDiagonals(): boolean {
        // Hardcoded Values
        const val1: string | null = this.board[0]?.[0] as string | null;
        const val2: string | null = this.board[1]?.[1] as string | null;
        const val3: string | null = this.board[2]?.[2] as string | null;
        const val4: string | null = this.board[2]?.[0] as string | null;
        const val5: string | null = this.board[0]?.[2] as string | null;

        // Setting up arrays for every() method checking
        const rightDiagonal = [val1, val2, val3];
        const leftDiagonal = [val5, val2, val4];

        // Checking right-sliced diagonal
        const rightDiaAllX = rightDiagonal.every((cell) => cell === "X");
        const rightDiaAllO = rightDiagonal.every((cell) => cell === "O");
        if (rightDiaAllX || rightDiaAllO) return true;

        // Checking left-sliced diagonal
        const leftDiaAllX = leftDiagonal.every((cell) => cell === "X");
        const leftDiaAllO = leftDiagonal.every((cell) => cell === "O");
        if (leftDiaAllX || leftDiaAllO) return true;

        return false; 
    }
}

// Main
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