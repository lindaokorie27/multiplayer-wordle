export default function Result() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <p className="font-bold text-base md:text-2xl">Game finished!</p>
      <div className="flex justify-between my-7 min-w-full">
        <div className="font-semibold text-base md:text-xl">P1: 83</div>
        <div className="font-semibold text-base md:text-xl">P2: 42</div>
      </div>
      <p className="font-bold text-base md:text-4xl">P1 wins!</p>
    </div>
  );
}
