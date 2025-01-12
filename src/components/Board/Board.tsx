import { FC } from "react";
import Tile from "./Tile";

import { TileType } from "@/lib/statuses";

type BoardProps = {
  tiles: Array<Array<TileType>>;
  keys?: Array<string>;
  rowStatus?: string;
};
const Board: FC<BoardProps> = (props) => {
  const { tiles } = props;
  return (
    <div className="grid grid-cols-5 gap-2 w-[calc(3.5rem_*_5.5)] mx-auto my-7">
      {tiles.map((tileRow) => {
        return tileRow.map((tileDetails, index) => (
          <Tile key={index} {...tileDetails} />
        ));
      })}
    </div>
  );
};
export default Board;
