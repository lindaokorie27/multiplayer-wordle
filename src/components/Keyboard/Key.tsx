import { KeyValue, CharStatus } from "@/lib/helpers";
import classNames from "classnames";
import { FC, ReactNode } from "react";

type KeyProps = {
  children?: ReactNode;
  value: KeyValue;
  status?: CharStatus;
  width?: number;
  onClick: (value: KeyValue) => void;
};

const Key: FC<KeyProps> = (props) => {
  const { value, status, onClick, children } = props;
  const classes = classNames(
    "flex items-center justify-center rounded mx-0.5 p-3 text-xs md:text-base lg:text-xl font-bold cursor-pointer",
    {
      "bg-slate-200 hover:bg-slate-300 active:bg-slate-400": !status,
      "bg-slate-500 text-white": status === "ABSENT",
      "bg-green-500 hover:bg-green-600 active:bg-green-700 text-white":
        status === "CORRECT",
      "bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 text-white":
        status === "PRESENT",
    }
  );
  return (
    <button className={classes} onClick={() => onClick(value)}>
      {children ? children : value}
    </button>
  );
};
export default Key;
