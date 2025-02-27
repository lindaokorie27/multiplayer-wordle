import { toast } from "sonner";

import Keyboard from "../Keyboard";
import Grid from "../Grid";
import GameStatusPanel from "../StatusPanel";
import { Dispatch, useState } from "react";
import { CharValue, getEmptyTiles, getRowWord } from "@/lib/helpers";
import { GameSession, GameSessionsAction, Tile } from "@/context/types";

type GameAreaProps = {
  gameId: string;
  state: GameSession;
  dispatchAction: Dispatch<GameSessionsAction>;
};
const GameArea: React.FC<GameAreaProps> = ({
  gameId,
  state,
  dispatchAction,
}) => {
  const [tiles, setTiles] = useState<Array<Array<Tile>>>(getEmptyTiles);
  const [currentRow, setCurrentRow] = useState(0); // keep track of the row in the grid.
  const [currentCol, setCurentCol] = useState(0); // keep track of current column.

  const handleCharChange = (charValue: CharValue) => {
    const rowGuess = getRowWord(tiles[currentRow]);
    if (rowGuess.length === 5) {
      return; // max characters have been entered don't enter more
    }
    const tilesCopy = tiles.map((row) => [...row]);
    const newTile: Tile = { value: charValue };

    tilesCopy[currentRow][currentCol] = newTile;
    setTiles(tilesCopy);
    setCurentCol(currentCol + 1);
  };

  const handleDelete = () => {
    if (currentCol === 0) return; // no more tiles to delete

    const tilesCopy = tiles.map((row) => [...row]);
    const newCol = currentCol - 1;

    tilesCopy[currentRow][newCol] = { value: "" };
    setTiles(tilesCopy);
    setCurentCol(newCol);
  };

  const handleEnter = () => {
    const rowGuess = getRowWord(tiles[currentRow]);
    if (rowGuess.length !== 5) {
      toast("Make a 5-lettered guess");
      return;
    }
    //check if word exists
    dispatchAction({
      type: "MAKE_GUESS",
      payload: { gameId, guess: rowGuess },
    });
    //update row with statuses
    setCurrentRow(currentRow + 1);
    setCurentCol(0);
  };

  return (
    <>
      {state.gameMode === "multiplayer" && <GameStatusPanel />}

      <div>
        <Grid tiles={tiles} />
        {/* Word entered for round - show only in two player game to player that entered it */}
        <Keyboard
          guesses={state.guesses}
          currentSecret={state.currentSecret}
          onDelete={handleDelete}
          onChar={handleCharChange}
          onEnter={handleEnter}
        />
      </div>
    </>
  );
};
export default GameArea;
