import { Player, GameStatus } from "./types/enums";
import { TicTacToe } from "./TicTacToe";
import * as readline from "node:readline";

export class GameManager {
    // Properties
    private gameStatus: GameStatus = GameStatus.IN_PROGRESS;
    private readonly player1: Player = Player.X;
    private readonly player2: Player = Player.O;   
    private currentPlayer: Player;
    private board: TicTacToe; 
    private rl: readline.Interface;

    // Constructor  
    constructor() {
        this.board = new TicTacToe();
        this.currentPlayer = this.player1; // X starts first
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    // Continous game until WON or DRAW state achieved
    public async start(): Promise<void> {
        while (this.gameStatus !== GameStatus.WON && this.gameStatus !== GameStatus.DRAW) {
            await this.playRound();
        }
        this.endGame();
    }

    // Players turn to make a valid move
    public async playRound(): Promise<void> {
        let moveSuccessful: boolean = false; 

        while(!moveSuccessful) {
            const input = await this.getUserInput(
                `Player ${this.currentPlayer}, enter row and column (0-2): `
            );
            const parts = input.split(" ").map(Number); // Number, converts string to number
            const row = parts[0];
            const col = parts[1];

            if(row === undefined || col === undefined) {
                console.log("Invalid spot.");
                continue;
            }


            const mark: string = this.currentPlayer;
            moveSuccessful = this.board.makeMove(row, col, mark);
            
            if (moveSuccessful) {
                this.board.displayBoard();
            } else {
                console.log("Invalid spot. Try again.")
            }
        }


        if(this.board.checkIfWon()) {
            this.gameStatus = GameStatus.WON;
            return;
        }
        if(this.board.checkIfDraw()) {
            this.gameStatus = GameStatus.DRAW;
            return;
        }

        this.switchPlayer();
    }

    // Return current player: X or O
    public getCurrentPlayer(): Player{
        return this.currentPlayer;
    }

    // Switch players 
    public switchPlayer(): void {
        if (this.currentPlayer === Player.X) {
            this.currentPlayer = this.player2
        } else {
            this.currentPlayer = this.player1;
        }
    }

    // End message stating who won or draw
    public endGame(): void {
        if (this.gameStatus === GameStatus.WON) {
            console.log(`The winner is Player ${this.currentPlayer}!`);
        } else if (this.gameStatus === GameStatus.DRAW) {
            console.log(`Game ended in a draw!`);
        }
    }

    // Reset game
    public reset(): void {
        this.board.reset();
        this.gameStatus = GameStatus.IN_PROGRESS;
        this.currentPlayer = this.player1;
    }

    // Helper Methods
    private async getUserInput(prompt: string): Promise<string> {
        return new Promise((resolve) => {
            this.rl.question(prompt, (answer: string) => {
                resolve(answer.trim());
            })
        });
    }
} // Game Manager Class