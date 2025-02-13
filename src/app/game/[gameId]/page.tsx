"use client";
import Board from "@/components/Board";
import Keyboard from "@/components/Keyboard";
import GameStatusPanel from "@/components/GameStatusPanel";
import { useGameSessions } from "@/context/GameContext";
import { notFound, useParams } from "next/navigation";

const GamePage: React.FC = () => {
  const { state } = useGameSessions();
  const params = useParams<{ gameId: string }>();

  const gameState = state[params.gameId];

  if (!gameState) {
    return notFound();
  }
  return (
    <div className="h-screen">
      {/* Player scores and game status - show only in two player game*/}
      <GameStatusPanel />
      <div>
        <Board
          tiles={[
            [
              { value: "", status: "" },
              { value: "", status: "" },
              { value: "", status: "" },
              { value: "", status: "" },
              { value: "", status: "" },
            ],
            [
              { value: "", status: "" },
              { value: "", status: "" },
              { value: "", status: "" },
              { value: "", status: "" },
              { value: "", status: "" },
            ],
            [
              { value: "", status: "" },
              { value: "", status: "" },
              { value: "", status: "" },
              { value: "", status: "" },
              { value: "", status: "" },
            ],
            [
              { value: "", status: "" },
              { value: "", status: "" },
              { value: "", status: "" },
              { value: "", status: "" },
              { value: "", status: "" },
            ],
            [
              { value: "", status: "" },
              { value: "", status: "" },
              { value: "", status: "" },
              { value: "", status: "" },
              { value: "", status: "" },
            ],
            [
              { value: "", status: "" },
              { value: "", status: "" },
              { value: "", status: "" },
              { value: "", status: "" },
              { value: "", status: "" },
            ],
          ]}
        />
        {/* Word entered for round - show only in two player game to player that entered it */}
        <Keyboard
          guesses={[]}
          onDelete={() => console.log("delete clicked")}
          onChar={(str) => console.log(`${str} key clicked`)}
          onEnter={() => console.log("enter clicked")}
        />
      </div>
    </div>
  );
};
export default GamePage;
