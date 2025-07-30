import { Tile } from "@/context/types";

export type CharStatus = "ABSENT" | "PRESENT" | "CORRECT";

export type CharValue =
  | "Q"
  | "W"
  | "E"
  | "R"
  | "T"
  | "Y"
  | "U"
  | "I"
  | "O"
  | "P"
  | "A"
  | "S"
  | "D"
  | "F"
  | "G"
  | "H"
  | "J"
  | "K"
  | "L"
  | "Z"
  | "X"
  | "C"
  | "V"
  | "B"
  | "N"
  | "M";

export type KeyValue = CharValue | "ENTER" | "DELETE";

export const getKeyStatuses = (
  guesses: string[],
  solution: string
): { [key: string]: CharStatus } => {
  const charObj: { [key: string]: CharStatus } = {};
  const solutionUpper = solution.toLocaleUpperCase();
  //iterate through characters in the guesses
  guesses.forEach((word) => {
    word.split("").forEach((letter, index) => {
      if (!solutionUpper.includes(letter)) {
        // does not include letter then absent
        return (charObj[letter] = "ABSENT");
      }

      if (letter === solutionUpper[index]) {
        // includes letter in correct position
        return (charObj[letter] = "CORRECT");
      }

      return (charObj[letter] = "PRESENT");
    });
  });
  return charObj;
};

export const getTileCorrectness = (tiles: Tile[], solution: string): Tile[] => {
  const newTiles = [...tiles];

  newTiles.forEach((tile, index) => {
    if (!solution.includes(tile.value.toLocaleLowerCase())) {
      // does not include letter then absent
      return (newTiles[index].status = "ABSENT");
    } else if (tile.value.toLocaleLowerCase() === solution[index]) {
      // includes letter in correct position
      return (newTiles[index].status = "CORRECT");
    }

    return (newTiles[index].status = "PRESENT");
  });

  return newTiles;
};

export const TRIES = 6;
export const WORD_LENGTH = 5;

export const getEmptyTiles = () => {
  const tiles: Tile[][] = new Array(TRIES);
  for (let i = 0; i < TRIES; i++) {
    tiles[i] = new Array(WORD_LENGTH).fill({ value: "", status: "" });
  }
  return tiles;
};

export function getRowWord(row: Tile[]) {
  return row
    .map((x) => x.value.trim())
    .filter(Boolean)
    .join("");
}
