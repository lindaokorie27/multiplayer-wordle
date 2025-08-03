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
  | { type: "MAKE_GUESS"; payload: { guess: string } }
  | {
      type: "END_GAME";
      payload: { winner: string | boolean | null };
    }
  | { type: "REMOVE_GAME"; payload: { gameId: string } };

export type GamePhases = "playing" | "finished";

export type GameModes = "singleplayer" | "multiplayer";

export type Player = {
  id: number;
  name: string;
  score: number;
};
export type Tile = {
  value: string;
  status?: string;
};

export type SinglePlayerState = {
  gameId: string | null;
  gameMode: "singleplayer";
  gamePhase: GamePhases;
  currentSecret: string;
  guesses: string[];
  winner: boolean | null;
};

export type MultiPlayerState = {
  gameId: string | null;
  gameMode: "multiplayer";
  gamePhase: GamePhases;
  players: Player[];
  currentTurn: number;
  currentSecret: string;
  guesses: string[];
  winner: string | null;
};

export type GameSession = SinglePlayerState | MultiPlayerState;

export type GameSessionsState = GameSession | null;
