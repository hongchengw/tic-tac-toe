

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
        const value = this.board[row]?.[col] as string | null;
        // need to track which player is playing :doro_thinking:
        if (value === null) { 
            this.board[row]![col] = mark; 
            return true; 
        } else { 
            console.log("Invalid Positon"); 
            return false; 
        }
    }

    // placeholder // ... make a check for winner method
    private checkIfWon(row: number, col: number): boolean {
        return true;
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
   newTTT.makeMove(0, 2, "0");
   newTTT.displayBoard();


}

main();