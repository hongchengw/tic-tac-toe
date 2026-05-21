export class TicTacToe {
    // Properties
    private readonly board: (string | null)[][] = [ 
        [null, null, null], // [0][0, 1, 2] -- [0][0] [0][1] [0][2]
        [null, null, null], // [1][0, 1, 2] -- [1][0] [1][1] [1][2]
        [null, null, null]  // [2][0, 1, 2] -- [2][0] [2][1] [2][2]
    ];

    // Public Methods 

    // Player adds a move on the board
    public makeMove(row: number, col: number, mark: string): boolean {
        // out of bounds edge casess    
        if (row < 0 || row > 2 || col < 0 || col > 2) return false;
        const value = this.board[row]?.[col];
        // need to track which player is playing :doro_thinking:
        if (value === null) { 
            this.board[row]![col] = mark; 
            return true; 
        } else { 
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

    // Check for draw state
    public checkIfDraw(): boolean {
        // check every row (its cells) is full & not null
        const isFull = this.board.every(row => row.every(cell => cell !== null));
        return isFull && this.checkIfWon();
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

    // Reset entire board to be null
    public reset(): void {
        for (let i = 0; i < 3; i++) {
            this.board[i]!.fill(null);
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
} // TicTacToe class