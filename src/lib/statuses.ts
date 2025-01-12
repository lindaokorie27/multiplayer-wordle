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
export type TileType = {
  value?: string;
  status?: string;
};

//TODO: Get proper solution and replace here.
const solution = "random";

export const getKeyStatuses = (
  guesses: string[]
): { [key: string]: CharStatus } => {
  const charObj: { [key: string]: CharStatus } = {};

  //iterate through characters in the guesses
  guesses.forEach((word) => {
    word.split("").forEach((letter, index) => {
      if (!solution.includes(letter)) {
        // does not include letter then absent
        return (charObj[letter] = "ABSENT");
      }

      if (letter === solution[index]) {
        // includes letter in correct position
        return (charObj[letter] = "CORRECT");
      }

      return (charObj[letter] = "PRESENT");
    });
  });
  return charObj;
};
