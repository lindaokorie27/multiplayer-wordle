"use client";
import { notFound } from "next/navigation";
import { useGameSessions } from "@/context/GameContext";
import GameArea from "@/components/GameArea/GameArea";

const GamePage: React.FC = () => {
  const { state: gameState, dispatch } = useGameSessions();

  if (!gameState) {
    return notFound();
  }

  return (
    <div className="h-screen">
      <GameArea state={gameState} dispatchAction={dispatch} />
    </div>
  );
};
export default GamePage;
