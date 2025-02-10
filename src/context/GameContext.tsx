import { createContext, useReducer, Dispatch } from "react";
import { gameSessionsReducer } from "./reducers";
import { GameSessionsAction, GameSessionsState } from "./types";

const GameContext = createContext<{
  state: GameSessionsState;
  dispatch: Dispatch<GameSessionsAction>;
} | null>(null);

type GameProviderProps = {
  children: React.ReactNode;
};

const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(gameSessionsReducer, {});

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

export { GameProvider, GameContext };
