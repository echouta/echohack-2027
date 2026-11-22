export default function Home() {
  const faceText =
    "text-outline text-white text-8xl font-craze font-bold select-none";

  // left + right open first (pair a), then front + back (pair b)
  const flaps = [
    { side: "right", pair: "a", color: "bg-clash-right" },
    { side: "left", pair: "a", color: "bg-clash-right" },
    { side: "front", pair: "b", color: "bg-clash-left" },
    { side: "back", pair: "b", color: "bg-clash-left" },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center overflow-x-hidden">
      <h1 className="text-5xl font-craze text-white text-outline text-shadow-[6px_6px_0_#f84535]">
        ECHOHack 2027
      </h1>

      {/* room above the box for the card to come out */}
      <div className="mt-52 mb-8">
        <div className="scene" aria-hidden="true">
          <div className="cube">
            {/* inside */}
            <div className="face face--back" />
            <div className="face face--left" />
            <div className="face face--bottom" />

            {/* what's in the box */}
            <div className="reveal">
              <div className="card flex flex-col items-center justify-center border border-foreground bg-black text-white">
                <span className="text-xs font-mono">Save the date</span>
                <span className="text-3xl font-craze font-bold text-shadow-[4px_4px_0_#f84535] items-left">APR 2027</span>
              </div>
            </div>
            <div className={`face face--front bg-clash-left ${faceText}`}>EH</div>
            <div className={`face face--right bg-clash-right ${faceText}`}>27</div>
            
            {flaps.map(({ side, pair, color }) => (
              <div key={side} className={`flap-wrap flap-wrap--${side} flap-wrap--${pair}`}>
                <div className="flap-hinge">
                  <div className="flap">
                    <div className="flap-side flap-side--inner" />
                    <div className={`flap-side flap-side--outer ${color}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}