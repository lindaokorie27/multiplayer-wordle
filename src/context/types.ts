export enum ACTIONS {
  SetGameMode = "SET_GAME_MODE", // Set single-player or multiplayer
  SetWord = "SET_WORD", // Set the word to guess
  MakeGuess = "MAKE_GUESS", // Make a guess
  UpdateFeedback = "UPDATE_FEEDBACK", // Update feedback for guesses
  SwitchTurn = "SWITCH_TURN", // Switch to the next player's turn
  EndGame = "END_GAME", // End the game and declare the winner
  ResetGame = "RESET_GAME", // Reset to the initial state
}

export enum GAMEPHASES {
  SetUp = "SETUP",
  Guessing = "GUESSING",
  Result = "RESULT",
}

export enum GAMEMODES {
  SinglePayer = "singleplayer",
  MultiPlayer = "multiplayer",
}

export type Player = {
  id: number;
  name: string;
  score: number;
};

export type GameState = {
  gameMode: GAMEMODES;
  gamePhase: GAMEPHASES;
  players: Player[];
  currentTurn: number; // Index of the current player
  currentWord: string; // Word to guess
  guesses: string[]; // Array of guessed words
  feedback: string[][]; // Feedback for each guess (e.g., ["green", "gray", "yellow"])
  winner: string | null; // "Player 1", "Player 2", or null
};

export type GameAction =
  | {
      type: "SET_GAME_MODE";
      payload: GAMEMODES.SinglePayer | GAMEMODES.MultiPlayer;
    }
  | { type: "SET_WORD"; payload: { word: string } }
  | { type: "MAKE_GUESS"; payload: { guess: string } }
  | { type: "UPDATE_FEEDBACK"; payload: { feedback: string[] } }
  | { type: "SWITCH_TURN" }
  | { type: "END_GAME"; payload: { winner: string | null } }
  | { type: "RESET_GAME" };
