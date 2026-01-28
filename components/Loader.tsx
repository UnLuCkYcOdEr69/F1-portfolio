import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  onFinish?: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState("ENGINE STARTING...");
  const [flagFlash, setFlagFlash] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setText("BOX BOX BOX!");

          // ✅ let user see final message a bit
          setTimeout(() => {
            // ✅ start leaving now
            onFinish?.();
          }, 450);

          return 100;
        }
        return prev + 2.5;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        x: "-100%",
        skewX: -10,
        transition: { duration: 0.6, ease: "circIn" },
      }}
      // ✅ trigger flag flash ONLY when exit starts
      onAnimationStart={(def) => {
        // This triggers on mount too sometimes, so we guard:
        // Only flash when progress is finished
        if (progress >= 100) {
          setTimeout(() => setFlagFlash(true), 380); // ✅ last part of exit
          setTimeout(() => setFlagFlash(false), 580); // ✅ 0.2s flash window
        }
      }}
      className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #333 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* ✅ Chequered Flag Flash ONLY at the END of transition */}
      <AnimatePresence>
        {flagFlash && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.12, ease: "easeOut" }}
            className="absolute inset-0 z-[60] pointer-events-none"
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(45deg, #000 25%, transparent 25%),
                  linear-gradient(-45deg, #000 25%, transparent 25%),
                  linear-gradient(45deg, transparent 75%, #000 75%),
                  linear-gradient(-45deg, transparent 75%, #000 75%)
                `,
                backgroundSize: "42px 42px",
                backgroundPosition: "0 0, 0 21px, 21px -21px, -21px 0px",
                backgroundColor: "#fff",
              }}
            />
            <div className="absolute inset-0 bg-black/20" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Car Silhouette */}
      <div className="relative w-full max-w-2xl px-8 z-[70]">
        <svg viewBox="0 0 400 120" className="w-full">
          <motion.path
            d="M 10 95 L 390 95"
            fill="transparent"
            stroke="#1a1a1a"
            strokeWidth="3"
            strokeLinecap="round"
          />

          <motion.g
            animate={{ x: `${progress * 2.8 - 100}px` }}
            transition={{ type: "spring", stiffness: 20, damping: 12 }}
            style={{ scale: 0.45, transformOrigin: "center bottom" }}
          >
            <path
              d="M 325 92 L 315 88 L 285 85 L 245 80 L 225 78 L 205 82"
              fill="transparent"
              stroke="#ff1801"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M 275 82 L 205 80 L 145 65 L 85 68 L 45 85 L 15 90 L 5 92 L 275 92 Z"
              fill="#ff1801"
              className="drop-shadow-[0_0_15px_rgba(255,24,1,0.8)]"
            />
            <path d="M 165 65 L 125 55 L 95 55 L 75 65" fill="#ff1801" className="opacity-70" />
            <path
              d="M 45 85 L 45 60 L 0 58 L 0 80 Z"
              fill="#ff1801"
              className="drop-shadow-[0_0_10px_rgba(255,24,1,0.5)]"
            />
            <g className="fill-black stroke-neutral-800 stroke-2">
              <circle cx="240" cy="88" r="14" />
              <circle cx="240" cy="88" r="6" fill="#1a1a1a" />
              <circle cx="40" cy="88" r="16" />
              <circle cx="40" cy="88" r="7" fill="#1a1a1a" />
            </g>
            <path
              d="M 155 65 Q 135 45 105 68"
              fill="transparent"
              stroke="#000"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </motion.g>
        </svg>
      </div>

      {/* Tachometer */}
      <div className="mt-12 w-64 text-center z-[70]">
        <div className="flex justify-between items-end mb-2 rajdhani text-xs tracking-widest text-neutral-400">
          <span className="text-red-600 font-bold italic">RPM x1000</span>
          <span className="font-mono">{Math.round(progress * 120)}</span>
        </div>

        <div className="h-2 w-full bg-neutral-900/50 overflow-hidden relative border border-neutral-800">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className={`h-full ${
              progress > 85
                ? "bg-red-600 shadow-[0_0_15px_#ff1801]"
                : "bg-cyan-400 shadow-[0_0_15px_rgba(0,243,255,0.5)]"
            }`}
            transition={{ type: "spring", stiffness: 50 }}
          />
        </div>

        <div className="flex flex-col items-center mt-6">
          <motion.p
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ repeat: Infinity, duration: 0.2 }}
            className="f1-font text-xs md:text-sm text-neutral-100 italic font-black tracking-[0.2em]"
          >
            {text}
          </motion.p>
          <div className="mt-2 text-[8px] f1-font text-neutral-600 tracking-[0.4em] uppercase">
            Telemetry Handshake Active
          </div>
        </div>
      </div>

      {/* Highlighted Speed Lines */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-40 z-[40]">
        {[...Array(35)].map((_, i) => {
          const thickness = Math.random() > 0.75 ? 2 : 1;
          const lineWidth = Math.random() * 220 + 80;

          return (
            <motion.div
              key={i}
              className="absolute bg-white/75"
              style={{
                height: `${thickness}px`,
                width: `${lineWidth}px`,
                top: Math.random() * 100 + "%",
                right: "-25%",
                filter: "blur(0.2px)",
                boxShadow: "0 0 16px rgba(255,255,255,0.45)",
              }}
              animate={{ x: "-170vw", opacity: [0.15, 1, 0.15] }}
              transition={{
                duration: 0.55,
                repeat: Infinity,
                delay: Math.random() * 1.8,
                ease: "linear",
              }}
            />
          );
        })}
      </div>
    </motion.div>
  );
};

export default Loader;
