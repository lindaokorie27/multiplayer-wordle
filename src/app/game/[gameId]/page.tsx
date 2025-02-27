"use client";
import { notFound, useParams } from "next/navigation";
import { useGameSessions } from "@/context/GameContext";
import GameArea from "@/components/GameArea/GameArea";

const GamePage: React.FC = () => {
  const { state, dispatch } = useGameSessions();
  const params = useParams<{ gameId: string }>();
  const gameState = state[params.gameId];

  if (!gameState) {
    return notFound();
  }

  return (
    <div className="h-screen">
      <GameArea
        state={gameState}
        dispatchAction={dispatch}
        gameId={params.gameId}
      />
    </div>
  );
};
export default GamePage;
