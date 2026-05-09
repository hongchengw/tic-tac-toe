

class TicTacToe {
    // properties
    private readonly board: (string | null)[][] = [ 
        ["X", "X", "X"], // [0][0, 1, 2]
        ["X", "X", "X"], // [1][0, 1, 2]
        ["X", "X", "X"]  // [2][0, 1, 2]
    ];

    constructor() { 
        console.log("Board Initialized");
    } 

    public makeMove(row: number, col: number): boolean {
        // out of bounds edge casess    
        // ... make a check for winner method
        if (this.board[row][col] === null) return false;
        return true;
    }

    // placeholder
    private checkIfWon(row: number, col: number): boolean {
        return true;
    }

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

function main(): void {
    const newTTT = new TicTacToe(); 
    newTTT.displayBoard();
}

main();