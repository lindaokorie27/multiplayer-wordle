"use client";

import { GameProvider } from "@/context/GameContext";

type ProvidersProps = { children: React.ReactNode };
const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return <GameProvider>{children}</GameProvider>;
};
export default Providers;
