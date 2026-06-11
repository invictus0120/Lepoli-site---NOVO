import * as React from 'react';
import { motion } from 'motion/react';
import { Crown, Cpu, Megaphone, Rocket, Calendar } from 'lucide-react';

// Wrapper component to give a sleek high-tech container style
interface VisualWrapperProps {
  children: React.ReactNode;
  gradientFrom: string;
  gradientTo: string;
}

const VisualWrapper = ({ children, gradientFrom, gradientTo }: VisualWrapperProps) => {
  return (
    <div className="relative w-full h-32 flex items-center justify-center overflow-hidden rounded-xl border border-gray-800 bg-gray-950 shadow-inner mb-4 group-hover:border-purple-500/50 transition-colors duration-500">
      {/* Dynamic Glowing light in the background - Increased opacity for more vibrancy */}
      <div 
        className={`absolute inset-0 opacity-25 bg-gradient-to-tr ${gradientFrom} ${gradientTo} blur-xl group-hover:opacity-50 transition-opacity duration-500`} 
      />
      
      {/* Decorative grid lines - Made brighter */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:14px_24px]" />
      
      {/* Visual content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export const PresidenciaVisual = () => {
  return (
    <VisualWrapper gradientFrom="from-purple-600" gradientTo="to-indigo-500">
      <div className="relative flex items-center justify-center w-24 h-24">
        {/* Outer orbital dashboard rings */}
        <motion.div
          className="absolute w-20 h-20 border border-dashed border-purple-500/30 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Secondary fast dashboard ring */}
        <motion.div
          className="absolute w-16 h-16 border border-purple-500/20 rounded-full before:content-[''] before:absolute before:-top-1 before:left-1/2 before:w-2 before:h-2 before:bg-purple-400 before:rounded-full before:shadow-[0_0_8px_#a855f7]"
          animate={{ rotate: -360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        {/* Central glowing core pedestal */}
        <motion.div 
          className="absolute bottom-3 w-10 h-2 bg-gradient-to-r from-purple-500/40 to-indigo-500/40 blur-[2px] rounded-full"
          animate={{ scaleX: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Core leadership illustration - Crown and Shield */}
        <motion.div
          className="relative z-10 text-purple-400 drop-shadow-[0_0_12px_rgba(168,85,247,0.4)]"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Crown className="w-9 h-9 stroke-[1.5]" />
        </motion.div>
      </div>
    </VisualWrapper>
  );
};

export const VicePresidenciaVisual = () => {
  return (
    <VisualWrapper gradientFrom="from-blue-600" gradientTo="to-cyan-500">
      <div className="relative flex items-center justify-center w-24 h-24">
        {/* Flow connection grid */}
        <svg className="absolute w-20 h-20 opacity-30" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-cyan-500" strokeDasharray="3 3" />
          <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="0.5" className="text-cyan-500" />
          <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="0.5" className="text-cyan-500" />
        </svg>

        {/* Pulsating sync node circles */}
        <motion.div
          className="absolute w-12 h-12 border border-cyan-500/20 rounded-full"
          animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Interactive gears */}
        <motion.div 
          className="absolute right-5 bottom-5 text-purple-500/60"
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          <Cpu className="w-6 h-6 stroke-[1]" />
        </motion.div>

        {/* Central Operations engine core */}
        <motion.div
          className="relative z-10 text-cyan-400 drop-shadow-[0_0_12px_rgba(6,182,212,0.4)]"
          animate={{ rotate: [0, 45, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Cpu className="w-10 h-10 stroke-[1.5]" />
        </motion.div>
      </div>
    </VisualWrapper>
  );
};

export const ComunicacaoVisual = () => {
  return (
    <VisualWrapper gradientFrom="from-pink-600" gradientTo="to-purple-500">
      <div className="relative flex items-center justify-center w-24 h-24">
        {/* Pulsing communication signal rings */}
        {[1, 2, 3].map((index) => (
          <motion.div
            key={index}
            className="absolute rounded-full border border-pink-500/30"
            style={{ width: 12 + index * 20, height: 12 + index * 20 }}
            animate={{ 
              scale: [0.8, 1.3, 0.8], 
              opacity: [0.2, 0.7, 0.2],
              borderWidth: index === 3 ? ['1px', '1px', '1px'] : ['1px', '1.5px', '1px']
            }}
            transition={{ 
              duration: 3, 
              delay: index * 0.4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        ))}

        {/* Spinning info dust */}
        <motion.div
          className="absolute w-20 h-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-pink-400 rounded-full shadow-[0_0_6px_#f472b6]" />
          <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-purple-400 rounded-full shadow-[0_0_4px_#c084fc]" />
        </motion.div>

        {/* Central Brand Megaphone transmitter */}
        <motion.div
          className="relative z-10 text-pink-400 drop-shadow-[0_0_12px_rgba(236,72,153,0.4)]"
          animate={{ scale: [1, 1.08, 1], rotate: [0, -5, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Megaphone className="w-9 h-9 stroke-[1.5]" />
        </motion.div>
      </div>
    </VisualWrapper>
  );
};

export const AceleracaoVisual = () => {
  return (
    <VisualWrapper gradientFrom="from-emerald-600" gradientTo="to-teal-500">
      <div className="relative flex items-center justify-center w-24 h-24">
        {/* Upward acceleration stream lines */}
        <div className="absolute inset-0 flex justify-around px-4">
          {[1, 2, 3].map((col) => (
            <motion.div
              key={col}
              className="w-[1px] h-12 bg-gradient-to-b from-transparent via-emerald-400/20 to-transparent"
              animate={{ y: [-40, 60] }}
              transition={{ 
                duration: 1.5 + col * 0.4, 
                repeat: Infinity, 
                ease: "linear",
                delay: col * 0.3
              }}
            />
          ))}
        </div>

        {/* Glowing acceleration gauge */}
        <motion.div
          className="absolute w-16 h-16 border-t-2 border-r-2 border-emerald-500/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />

        {/* Thrust particle fire glow behind the rocket */}
        <motion.div
          className="absolute bottom-4 w-6 h-6 bg-emerald-500/30 blur-md rounded-full shadow-[0_0_20px_#10b981]"
          animate={{ scale: [0.8, 1.5, 0.8], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Modern Rocket Illustration launching */}
        <motion.div
          className="relative z-10 text-emerald-400 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]"
          animate={{ 
            y: [2, -6, 2],
            x: [-0.5, 0.5, -0.5]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Rocket className="w-10 h-10 stroke-[1.5] -rotate-45" />
        </motion.div>
      </div>
    </VisualWrapper>
  );
};

export const EventosVisual = () => {
  return (
    <VisualWrapper gradientFrom="from-amber-500" gradientTo="to-orange-500">
      <div className="relative flex items-center justify-center w-24 h-24">
        {/* Converging stage spotlight beams */}
        <svg className="absolute w-20 h-20 opacity-20" viewBox="0 0 100 100">
          <path d="M 10 10 L 50 50 L 90 10" fill="none" stroke="currentColor" strokeWidth="1" className="text-amber-500" />
          <path d="M 10 90 L 50 50 L 90 90" fill="none" stroke="currentColor" strokeWidth="1" className="text-amber-500" />
        </svg>

        {/* Networking dots/rings appearing */}
        {[0, 120, 240].map((angle, i) => {
          const x = 22 * Math.cos((angle * Math.PI) / 180);
          const y = 22 * Math.sin((angle * Math.PI) / 180);
          return (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_#f59e0b]"
              style={{ x, y }}
              animate={{ 
                scale: [0.8, 1.4, 0.8], 
                opacity: [0.5, 1, 0.5] 
              }}
              transition={{ 
                duration: 2.5, 
                delay: i * 0.5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
          );
        })}

        {/* Orbit loop */}
        <motion.div
          className="absolute w-14 h-14 border border-dashed border-amber-500/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />

        {/* Central Event spotlight / calendar core */}
        <motion.div
          className="relative z-10 text-amber-400 drop-shadow-[0_0_12px_rgba(245,158,11,0.4)]"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Calendar className="w-9 h-9 stroke-[1.5]" />
        </motion.div>
      </div>
    </VisualWrapper>
  );
};
