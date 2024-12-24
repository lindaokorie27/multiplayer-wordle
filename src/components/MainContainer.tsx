import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MainContainer = ({ children }: Props) => {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      {children}
    </main>
  );
};
export default MainContainer;
