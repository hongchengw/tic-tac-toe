import { GameManager } from "./GameManager";

async function main(): Promise<void> {
    const gameManager = new GameManager();
    await gameManager.start();
}

main();