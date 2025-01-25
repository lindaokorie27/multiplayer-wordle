import { ACTIONS, GAMEPHASES, GAMEMODES, GameState, GameAction } from "./types";

// Initial State
export const initialState: GameState = {
  gameMode: GAMEMODES.SinglePayer,
  gamePhase: GAMEPHASES.SetUp,
  players: [
    { id: 1, name: "Player 1", score: 0 },
    { id: 2, name: "Player 2", score: 0 }, // In single-player, Player 2 is the "AI".
  ],
  currentTurn: 0, // Index of the current player
  currentWord: "", // Word to guess (set by opponent or randomly in single-player)
  guesses: [], // Array of guesses for the current round
  feedback: [], // Feedback for each guess (green/yellow/gray statuses)
  winner: null, // "Player 1", "Player 2", or null
};

export const gameReducer = (state: GameState, action: GameAction) => {
  switch (action.type) {
    case ACTIONS.SetGameMode:
      return {
        ...state,
        gameMode: action.payload, // "singleplayer" or "multiplayer"
        players:
          action.payload === GAMEMODES.SinglePayer
            ? [
                { id: 1, name: "Player", score: 0 },
                { id: 2, name: "AI", score: 0 },
              ]
            : initialState.players,
      };

    case ACTIONS.SetWord:
      return {
        ...state,
        currentWord: action.payload.word,
        guesses: [],
        feedback: [],
        gamePhase: GAMEPHASES.Guessing,
      };

    case ACTIONS.MakeGuess:
      return {
        ...state,
        guesses: [...state.guesses, action.payload.guess],
      };

    case ACTIONS.UpdateFeedback:
      return {
        ...state,
        feedback: [...state.feedback, action.payload.feedback],
      };

    case ACTIONS.SwitchTurn:
      // In single-player mode, skip switching turns and continue guessing
      return state.gameMode === GAMEMODES.SinglePayer
        ? state
        : {
            ...state,
            currentTurn: (state.currentTurn + 1) % state.players.length,
            gamePhase: GAMEPHASES.SetUp,
            currentWord: "",
            guesses: [],
            feedback: [],
          };

    case ACTIONS.EndGame:
      return {
        ...state,
        winner: action.payload.winner,
        gamePhase: GAMEPHASES.Result,
      };

    case ACTIONS.ResetGame:
      return { ...initialState };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
