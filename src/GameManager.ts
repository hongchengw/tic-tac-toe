import { Player, GameStatus } from "./types/enums";
import { TicTacToe } from "./TicTacToe";

export class GameManager {
    // Properties
    private gameStatus: GameStatus = GameStatus.IN_PROGRESS;

    private readonly player1: Player = Player.X;
    private readonly player2: Player = Player.O;   
    private currentPlayer: Player;
    private board: TicTacToe; // brb

    // Constructor

    // Methods
    public start(): void {
        return;
    }

    public playRound(): void {
        return;
    }

    public getCurrentPlayer(): void {
        return;
    }

    public switchPlayer(): void {
        return;
    }

    public endGame(): void {
        return;
    }



} // Game Manager Class