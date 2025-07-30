import { createContext, useReducer, Dispatch, useContext } from "react";
import { gameSessionsReducer, getInitialState } from "./reducers";
import { GameSessionsAction, GameSessionsState } from "./types";

interface GameSessionsContextType {
  state: GameSessionsState;
  dispatch: Dispatch<GameSessionsAction>;
}

const GameSessionsContext = createContext<GameSessionsContextType | null>(null);

export const useGameSessions = () => {
  const context = useContext(GameSessionsContext);
  if (!context) {
    throw new Error(
      "useGameSessions must be used within a GameSessionsProvider"
    );
  }
  return context;
};

type GameProviderProps = {
  children: React.ReactNode;
};

const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(
    gameSessionsReducer,
    undefined,
    getInitialState
  );

  return (
    <GameSessionsContext.Provider value={{ state, dispatch }}>
      {children}
    </GameSessionsContext.Provider>
  );
};

export { GameProvider, GameSessionsContext };
