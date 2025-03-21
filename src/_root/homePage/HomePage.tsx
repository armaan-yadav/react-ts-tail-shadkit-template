import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";

const HomePage = () => {
  const [showConfetti, setShowConfetti] = useState(true);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-700 to-blue-900 flex items-center justify-center p-4">
      {showConfetti && (
        <ReactConfetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={500}
          gravity={0.05}
        />
      )}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-10 shadow-xl max-w-md w-full border border-white/20 transition-all duration-500 hover:shadow-2xl hover:bg-white/15">
        <h1 className="text-4xl font-bold text-white text-center mb-8 tracking-wide">
          Namaste World
        </h1>

        <div className="space-y-6">
          <p className="text-white/90 text-center text-lg leading-relaxed">
            Welcome to this starter template designed to save you time.
          </p>

          <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent my-6"></div>

          <div className="bg-white/5 p-4 rounded-lg border border-white/10">
            <h2 className="text-white text-center font-medium mb-3">
              Pre-installed Technologies:
            </h2>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center gap-2 text-white/80">
                <div className="w-1.5 h-1.5 rounded-full bg-teal-400"></div>
                <span>shadcn/ui</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                <span>Redux</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                <span>React Router</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                <span>Tailwind CSS</span>
              </div>
            </div>
          </div>

          <p className="text-white/80 text-center italic">
            "Simplicity is the ultimate sophistication."
          </p>

          <div className="flex justify-center mt-8">
            <Button className="bg-white/20 hover:bg-white/30 text-white border-white/10 px-8 py-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group">
              <span className="group-hover:scale-105 inline-block transition-transform duration-300">
                Get Started
              </span>
            </Button>
          </div>
        </div>

        <p className="text-white/70 text-sm text-center mt-10">
          ✧ Save development time with this pre-configured template ✧
        </p>
      </div>
    </div>
  );
};

export default HomePage;
