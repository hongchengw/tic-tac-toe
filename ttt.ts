/*
    Random Syntax Notes
    ?. --> optional chaining 
        - precent runtime errors
        - safely access properties that might be null/undefined

    Type Assertion --> as ___ | ____ 
        - forces it to thinks blank1 or blank2

    ?? --> nullish coalescing 
        - eval left operand; 
        - if null or undefined, return right operand, otherwise return left operant

    ! --> type-checking 
        - removes nullish types from type system
*/

class TicTacToe {
    // Properties
    private readonly board: (string | null)[][] = [ 
        [null, null, null], // [0][0, 1, 2]
        [null, null, null], // [1][0, 1, 2]
        [null, null, null]  // [2][0, 1, 2]
    ];

    // Constructor
    constructor() { 
        console.log("Board Initialized");
    } 

    // Player adds a move on the board
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
            [1][2][3]
            [4][5][6]
            [7][8][9]
        */
    public checkIfWon(): boolean {
        // Row 1 Pieces
        const val1 = this.board[0]?.[0];
        const val2 = this.board[0]?.[1];
        const val3 = this.board[0]?.[2];
        // Row 2 Pieces
        const val4 = this.board[1]?.[0];
        const val5 = this.board[1]?.[1];
        const val6 = this.board[2]?.[2];

        // Row 3 Pieces
        const val7 = this.board[2]?.[0];
        const val8 = this.board[2]?.[1];
        const val9 = this.board[2]?.[2];

        // need to figure out how to know which player won...

        // rows
        if (val1 === val2 && val2 === val3) {
            return true;
        } else if (val4 === val5 && val5  === val6) {
            return true;
        } else if (val7 === val8 && val8  === val9) {
            return true;

        // Columns
        } else if (val1 === val4 && val4  === val9) {
            return true;
        } else if (val2 === val5 && val5  === val8) {
            return true;
        } else if (val3 === val6 && val6  === val9) {
            return true;

        // Diagonals
        } else if (val1 === val5 && val5  === val9) {
            return true;
        } else if (val3 === val5 && val5  === val7) {
            return true;
        
        // No win
        } else {
            return false;
        }
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
} 


// Main
function main(): void {
    const newTTT = new TicTacToe(); 
    /*
        Start Game: Player 1 (x) & Player 2 (o)
        Worry about scalability later, hardcode player 1 to be X and player 2 to be O
    */
   // Player 1: boolean = true;     // Mark = "X"
   // Player 2: boolean = false;    // Mark = "O"
   newTTT.makeMove(0, 1, "X");
   newTTT.displayBoard();
   newTTT.makeMove(0, 2, "x");
   newTTT.displayBoard();
   newTTT.makeMove(0, 0, "X");
   newTTT.displayBoard();
   let winner: boolean = newTTT.checkIfWon();
   console.log(winner);
}

main();