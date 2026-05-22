# CLI Tic-Tac-Toe Game

## What It Does
Brief overview of functionality:
- two player command line tic-tac-toe game
- real time board updates
- win/draw detection
- replay functionality

## How its built
**Tech Stack:**
- Typescript
- Node.js
- Readline (for CLI input)

**Architecture:**
- `TicTacToe.ts` -- Game logic (board, win conditions)
- `GameManager.ts` -- Game orchestration (turn management, state)
- `main.ts` -- CLI entry point (user interaction)
- `enums.ts` -- Type definitions (Player, GameStatus)

## Getting Started
**Prerequisites:**
- Node.js v16+
- npm

**Installation:**

```bash
npm install
npm run build
npm start
```

**How to Play:**

1. Enter your move as two numbers: `row col`
2. Valid positions: `0-2` for both row and column
3. X always goes first
4. Win by getting 3 in a row (horizontal, vertical, or diagonal)
5. Game announces winner or draw
6. Choose to replay or exit

**Example Move:**
```
Player X, enter row and column (0-2): 0 0
```

## Future Improvements
- Web UI possibly (with React)
- Game statistics tracking
- AI opponent

## License
MIT

<br>

Last Updated: 05/21/2026
