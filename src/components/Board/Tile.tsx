import { TileType as TileProps } from "@/lib/statuses";
import classNames from "classnames";
import { FC } from "react";

const Tile: FC<TileProps> = (props) => {
  const { value, status } = props;
  const classes = classNames(
    "h-14 w-14 inline-flex border-2 items-center justify-center font-bold uppercase text-2xl",
    {
      "border-slate-300": !status,
      "border-slate-500 bg-slate-500 text-white": status === "ABSENT",
      "border-yellow-500 bg-yellow-500 text-white": status === "PRESENT",
      "border-green-500 bg-green-500 text-white": status === "CORRECT",
    }
  );
  return <div className={classes}>{value}</div>;
};
export default Tile;
