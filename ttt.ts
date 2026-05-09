

class TicTacToe {
    // properties
    private readonly board: (string | null)[][] = [ 
        [null, null, null], // [0][0, 1, 2]
        [null, null, null], // [1][0, 1, 2]
        [null, null, null]  // [2][0, 1, 2]
    ];
    // do not generate code that references my program
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
        for (let i = 0; i < this.board.length; ++i) {
            for (let j = 0; j < this.board.length; ++j) {
                process.stdout.write("l")
            }
        }
    }

} 

function main(): void {
    const newTTT = new TicTacToe(); 
    newTTT.displayBoard();
}

main();