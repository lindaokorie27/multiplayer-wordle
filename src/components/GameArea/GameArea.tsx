import { toast } from "sonner";

import Keyboard from "../Keyboard";
import Grid from "../Grid";
import GameStatusPanel from "../StatusPanel";
import { Dispatch, useState } from "react";
import {
  CharValue,
  getEmptyTiles,
  getRowWord,
  getTileCorrectness,
  TRIES,
} from "@/lib/helpers";
import { GameSession, GameSessionsAction, Tile } from "@/context/types";
import * as api from "../../lib/api-client";

type GameAreaProps = {
  state: GameSession;
  dispatchAction: Dispatch<GameSessionsAction>;
};
const GameArea: React.FC<GameAreaProps> = ({ state, dispatchAction }) => {
  const [tiles, setTiles] = useState<Array<Array<Tile>>>(getEmptyTiles);
  const [currentRow, setCurrentRow] = useState(0); // keep track of the row in the grid.
  const [currentCol, setCurrentCol] = useState(0); // keep track of current column.

  const handleCharChange = (charValue: CharValue) => {
    const rowGuess = getRowWord(tiles[currentRow]);
    if (rowGuess.length === 5) {
      return; // max characters have been entered don't enter more
    }
    const tilesCopy = tiles.map((row) => [...row]);
    const newTile: Tile = { value: charValue };

    tilesCopy[currentRow][currentCol] = newTile;
    setTiles(tilesCopy);
    setCurrentCol(currentCol + 1);
  };

  const handleDelete = () => {
    if (currentCol === 0) return; // no more tiles to delete

    const tilesCopy = tiles.map((row) => [...row]);
    const newCol = currentCol - 1;

    tilesCopy[currentRow][newCol] = { value: "" };
    setTiles(tilesCopy);
    setCurrentCol(newCol);
  };

  const checkEntry = (entry: string) => {
    const isLastRow = currentRow === TRIES - 1;

    // check correctness of word
    const tilesWithCorrectness = getTileCorrectness(
      tiles[currentRow],
      state.currentSecret
    );

    // set tiles status for the specific row
    const tilesCopy = tiles.map((row) => [...row]);
    tilesCopy[currentRow] = tilesWithCorrectness;
    setTiles(tilesCopy);

    // check if word is winning word
    const won = state.currentSecret === entry.toLocaleLowerCase();
    if (won) {
      toast("Well Done! You've won!");
      dispatchAction({
        type: "END_GAME",
        payload: { winner: won },
      });
      // check if lastrow
    } else if (isLastRow) {
      toast("Better luck next time! You are out of tries.");
    }
    // conditional rows and columns
    if (!isLastRow) {
      setCurrentRow(currentRow + 1);
      setCurrentCol(0);
    }
  };

  const handleEnter = async () => {
    const rowGuess = getRowWord(tiles[currentRow]);
    if (rowGuess.length !== 5) {
      toast("Make a 5-lettered guess");
      return;
    }
    const wordExists = await api.verifyWord(rowGuess.toLowerCase());
    if (!wordExists) {
      toast("Not a valid word!");
      return;
    }
    dispatchAction({
      type: "MAKE_GUESS",
      payload: { guess: rowGuess },
    });

    checkEntry(rowGuess);
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
