import {
  GameSessionsState,
  GameSessionsAction,
  SinglePlayerState,
  MultiPlayerState,
} from "./types";

const GAME_STATE_KEY = "gameState";

// Initial State
export const singlePlayerInitialState: SinglePlayerState = {
  gameMode: "singleplayer",
  gamePhase: "playing",
  currentSecret: "",
  guesses: [],
  winner: null,
};

export const multiplayerInitialState: MultiPlayerState = {
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
  return savedState ? JSON.parse(savedState) : {};
};

export const gameSessionsReducer = (
  state: GameSessionsState,
  action: GameSessionsAction
): GameSessionsState => {
  const newState: GameSessionsState = (() => {
    switch (action.type) {
      case "CREATE_SINGLEPLAYER_GAME":
        return {
          ...state,
          [action.payload.gameId]: {
            gameMode: "singleplayer",
            gamePhase: "playing",
            currentSecret: action.payload.word,
            guesses: [],
            winner: null,
          },
        };

      case "CREATE_MULTIPLAYER_GAME":
        return {
          ...state,
          [action.payload.gameId]: {
            gameMode: "multiplayer",
            gamePhase: "playing",
            players: action.payload.players.map((p) => ({ ...p, score: 0 })),
            currentTurn: 0,
            currentSecret: action.payload.word,
            guesses: [],
            winner: null,
          },
        };

      case "MAKE_GUESS":
        return {
          ...state,
          [action.payload.gameId]: {
            ...state[action.payload.gameId],
            guesses: [
              ...state[action.payload.gameId].guesses,
              action.payload.guess,
            ],
          },
        };

      case "END_GAME": {
        const game = state[action.payload.gameId];
        if (!game) return state; // Guard clause

        if (game.gameMode === "singleplayer") {
          return {
            ...state,
            [action.payload.gameId]: {
              ...game,
              gamePhase: "finished",
              winner:
                typeof action.payload.winner === "boolean"
                  ? action.payload.winner
                  : null,
            },
          };
        }

        if (game.gameMode === "multiplayer") {
          return {
            ...state,
            [action.payload.gameId]: {
              ...game,
              gamePhase: "finished",
              winner:
                typeof action.payload.winner === "string"
                  ? action.payload.winner
                  : null,
            },
          };
        }

        return state; // Fallback
      }

      case "REMOVE_GAME": {
        const newState = { ...state };
        delete newState[action.payload.gameId];
        return newState;
      }

      default:
        return state;
    }
  })();

  // Update local storage whenever the state changes
  localStorage.setItem(GAME_STATE_KEY, JSON.stringify(newState));
  return newState;
};
