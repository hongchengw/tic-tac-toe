import { GameManager } from "./GameManager";
import * as readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function getUserInput(prompt: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(prompt, (answer: string) => {
            resolve(answer.trim());
        })
    })
}

async function main(): Promise<void> {

    const gameManager = new GameManager();
    let playAgain: boolean = true;
    
    console.log("Welcome to TicTacToe! (Note: Player 'X' goes first by default.)");
    
    while(playAgain) {
        await gameManager.start();
        const response = await getUserInput("Play again? (y/n): ");
        playAgain = response.toLowerCase() === "y";

        if(playAgain) {
            gameManager.reset();
            console.log("New Game!");
        } else {
            console.log("Thanks for playing!");
        }
    }

    rl.close();
}

main();