export type GameSessionsAction =
  | {
      type: "CREATE_SINGLEPLAYER_GAME";
      payload: { gameId: string; word: string };
    }
  | {
      type: "CREATE_MULTIPLAYER_GAME";
      payload: {
        gameId: string;
        players: { id: number; name: string }[];
        word: string;
      };
    }
  | { type: "MAKE_GUESS"; payload: { gameId: string; guess: string } }
  | {
      type: "END_GAME";
      payload: { gameId: string; winner: string | boolean | null };
    }
  | { type: "REMOVE_GAME"; payload: { gameId: string } };

export type GamePhases = "playing" | "finished";

export type GameModes = "singleplayer" | "multiplayer";

export type Player = {
  id: number;
  name: string;
  score: number;
};

export type SinglePlayerState = {
  gameMode: "singleplayer";
  gamePhase: GamePhases;
  currentWord: string;
  guesses: string[];
  winner: boolean | null;
};

export type MultiPlayerState = {
  gameMode: "multiplayer";
  gamePhase: GamePhases;
  players: Player[];
  currentTurn: number;
  currentWord: string;
  guesses: string[];
  winner: string | null;
};

type GameSession = SinglePlayerState | MultiPlayerState;

export type GameSessionsState = {
  [gameId: string]: GameSession;
};
