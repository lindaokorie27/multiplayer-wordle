import {
  GameSessionsState,
  GameSessionsAction,
  SinglePlayerState,
  MultiPlayerState,
} from "./types";

const GAME_STATE_KEY = "gameState";

// Initial State
export const singlePlayerInitialState: SinglePlayerState = {
  gameId: null, // Initially null, will be set when the game is created
  // or when the game is loaded from local storage
  gameMode: "singleplayer",
  gamePhase: "playing",
  currentSecret: "",
  guesses: [],
  winner: null,
};

export const multiplayerInitialState: MultiPlayerState = {
  gameId: null, // Initially null, will be set when the game is created
  // or when the game is loaded from local storage
  gameMode: "multiplayer",
  gamePhase: "playing",
  players: [
    { id: 1, name: "Player 1", score: 0 },
    { id: 2, name: "Player 2", score: 0 },
  ],
  currentTurn: 0,
  currentSecret: "",
  guesses: [],
  winner: null,
};

export const getInitialState = (): GameSessionsState => {
  const savedState = localStorage.getItem(GAME_STATE_KEY);
  return savedState
    ? (JSON.parse(savedState) as GameSessionsState)
    : ({} as GameSessionsState);
};

export const gameSessionsReducer = (
  state: GameSessionsState,
  action: GameSessionsAction
): GameSessionsState => {
  const newState: GameSessionsState = (() => {
    switch (action.type) {
      case "CREATE_SINGLEPLAYER_GAME":
        return {
          ...singlePlayerInitialState,
          gameId: action.payload.gameId,
          currentSecret: action.payload.word,
        } as SinglePlayerState;

      case "CREATE_MULTIPLAYER_GAME":
        return {
          ...multiplayerInitialState,
          gameId: action.payload.gameId,
          players: action.payload.players.map((p) => ({ ...p, score: 0 })),
          currentSecret: action.payload.word,
        } as MultiPlayerState;

      case "MAKE_GUESS":
        return {
          ...state,
          guesses: [...(state?.guesses ?? []), action.payload.guess],
        } as GameSessionsState;

      case "END_GAME": {
        if (!state) return state; // Guard clause

        if (state.gameMode === "singleplayer") {
          return {
            ...state,
            gamePhase: "finished",
            winner:
              typeof action.payload.winner === "boolean"
                ? action.payload.winner
                : null,
          } as SinglePlayerState;
        }

        if (state.gameMode === "multiplayer") {
          return {
            ...state,
            gamePhase: "finished",
            winner:
              typeof action.payload.winner === "string"
                ? action.payload.winner
                : null,
          } as MultiPlayerState;
        }

        return state; // Fallback
      }

      case "REMOVE_GAME": {
        // Reset the state to an empty object or initial state
        return {} as GameSessionsState;
      }

      default:
        return state;
    }
  })();

  // Update local storage whenever the state changes
  localStorage.setItem(GAME_STATE_KEY, JSON.stringify(newState));
  return newState;
};
