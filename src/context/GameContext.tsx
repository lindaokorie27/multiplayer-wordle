import { createContext, useReducer, Dispatch } from "react";
import { gameReducer, initialState } from "./reducers";
import { GameAction, GameState } from "./types";

const GameContext = createContext<{
  state: GameState;
  dispatch: Dispatch<GameAction>;
} | null>(null);

type GameProviderProps = {
  children: React.ReactNode;
};

const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

export { GameProvider, GameContext };
