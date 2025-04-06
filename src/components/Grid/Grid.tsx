import { FC } from "react";
import Tile from "./Tile";

import { Tile as TileType } from "@/context/types";

type GridProps = {
  tiles: TileType[][];
  keys?: Array<string>;
  rowStatus?: string;
};
const Grid: FC<GridProps> = (props) => {
  const { tiles } = props;
  return (
    <div className="grid grid-cols-5 gap-2 w-[calc(3.5rem*5.5)] mx-auto my-7">
      {tiles.map((tileRow) => {
        return tileRow.map((tileDetails, index) => (
          <Tile key={index} {...tileDetails} />
        ));
      })}
    </div>
  );
};
export default Grid;
