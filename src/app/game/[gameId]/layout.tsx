import Navigation from "@/components/Navigation/Navigation";

const GameLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      {/* Layout UI */}
      <Navigation />
      {/* Place children where you want to render a page or nested layout */}
      <main>{children}</main>
    </section>
  );
};
export default GameLayout;
