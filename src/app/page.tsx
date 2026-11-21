export default function Home() {
  const faceClasses =
    "h-20 w-20 text-outline text-white flex items-center justify-center border border-foreground text-5xl font-craze font-bold animate-clash";

  return (
    <main className="min-h-screen flex flex-col items-center justify-center overflow-x-hidden">
      <h1 className="text-5xl font-craze text-white text-outline text-shadow-[6px_6px_0_#f84535]">ECHO-Hack</h1>
      <p className="mt-4 text-xl">Coming April 2027</p>

      <div className="flex h-64 items-center justify-center gap-0">
        <div className={`${faceClasses} bg-clash-left border-r-0 [--start-x:-200px] [--end-skew:30deg]`}>
          EH
        </div>
        <div className={`${faceClasses} bg-clash-right [--start-x:200px] [--end-skew:-30deg]`}>
          27
        </div>
      </div>
    </main>
  );
}
