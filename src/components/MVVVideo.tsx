import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function MVVVideo() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: "M.V.V",
      subtitle: "Missão, Visão e Valores",
      desc: "Toda grande empresa precisa de um M.V.V, pois sem um norte claro, a execução não tem direção.",
      accent: "from-purple-500 to-pink-500",
    },
    {
      title: "MISSÃO",
      subtitle: "Fomentar o Ecossistema",
      desc: "Fomentar o ecossistema empreendedor universitário e conectar talentos ao mercado.",
      accent: "from-blue-500 to-indigo-500",
    },
    {
      title: "VISÃO",
      subtitle: "Referência Nacional",
      desc: "Ser a principal referência de empreendedorismo no Brasil, formando líderes e startups de alto impacto.",
      accent: "from-emerald-500 to-teal-500",
    },
    {
      title: "VALORES",
      subtitle: "A Cultura LEPoli",
      desc: "Amizade • Mente Aberta • Sentimento de dono • Foco no resultado • No bullshit • Sonho grande.",
      accent: "from-yellow-500 to-amber-500",
    },
  ];

  // Roda o slide automaticamente a cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="mvv"
      className="bg-[#0b3d91] pb-24 px-6 flex flex-col items-center justify-center -mt-1"
    >
      <div className="max-w-4xl w-full">
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col items-center text-center mb-10">
          <h3 className="font-display font-medium text-purple-200 text-sm tracking-widest uppercase mb-2">
            NOSSOS PILARES
          </h3>
          <p className="font-sans text-sm text-slate-300 max-w-lg mb-6">
            Conheça o M.V.V que guia a Liga de Empreendedorismo da Poli.
          </p>
        </div>

        {/* The Retro CRT Monitor Frame Container */}
        <div className="relative mx-auto max-w-2xl bg-slate-900 border-4 border-slate-700 rounded-3xl p-4 shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden">
          {/* Wooden / Tech monitor details */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-slate-600 rounded-full opacity-50" />
          <div className="absolute bottom-2 left-6 right-6 flex items-center justify-between text-slate-500 font-mono text-[9px]">
            <span>CRT TRINITRON SYSTEM 86</span>
            <div className="flex items-center gap-2">
              <span>H-SYNC</span>
              <div className="w-2 h-2 rounded-full bg-purple-500 animate-ping" />
            </div>
          </div>

          {/* Inner Curved TV Glass Screen border-inside shadow */}
          <div className="relative rounded-2xl overflow-hidden aspect-video bg-black border border-slate-950 shadow-[inset_0_0_50px_rgba(0,0,0,0.9)] z-10 flex flex-col items-center justify-center">
            
            {/* Glossy Reflection overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 pointer-events-none z-30 mix-blend-overlay" />
            
            {/* Scanlines Overlay mimicking the grid effect inside of CRT screen */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[size:100%_4px] pointer-events-none z-20" />
            
            {/* Glowing noise screen filter */}
            <div className="absolute inset-0 bg-purple-500/5 opacity-10 pointer-events-none z-20 mix-blend-screen" />

            {/* Simulated Interactive CRT Typewriter Slideshow */}
            <div className="relative w-full h-full bg-[#120120] p-6 sm:p-10 flex flex-col justify-between overflow-hidden font-mono z-10 animate-[flicker_0.15s_infinite]">
              {/* Simulated Glowing Retro Cyber-grid in canvas */}
              <div className="absolute inset-0 opacity-25 z-0">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="retro-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#a855f7" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#retro-grid)" />
                </svg>
              </div>

              {/* CRT Screen Header */}
              <div className="flex items-center justify-between z-10 border-b border-purple-500/30 pb-2 text-[10px] text-purple-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-purple-500 animate-ping" />
                  <span>SYSTEM: DIRETRIZES_MVV.EXE</span>
                </div>
                <span>SLIDE {activeSlide + 1} / 4</span>
              </div>

              {/* Slide content panel with AnimatePresence */}
              <div className="my-auto z-10 flex flex-col justify-center items-center min-h-[140px] text-center px-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSlide}
                    initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
                    exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center"
                  >
                    <div className={`px-4 py-1 mb-3 rounded-full bg-gradient-to-r ${slides[activeSlide].accent} text-black font-semibold text-[11px] uppercase tracking-widest shadow-md shadow-black/20`}>
                      {slides[activeSlide].title}
                    </div>
                    
                    <h4 className="text-white text-base sm:text-lg font-bold tracking-wide mb-2">
                      {slides[activeSlide].subtitle}
                    </h4>
                    
                    <p className="text-purple-200 text-xs sm:text-sm leading-relaxed max-w-lg select-none">
                      &gt; {slides[activeSlide].desc}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Mini CRT selector buttons inside simulator */}
              <div className="flex justify-between items-center z-10 border-t border-purple-500/30 pt-2 text-[9px]">
                <div className="flex items-center gap-2">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveSlide(i)}
                      className={`w-3.5 h-3.5 rounded border flex items-center justify-center font-mono hover:bg-purple-600/50 hover:text-white transition-all ${
                        activeSlide === i
                          ? "bg-purple-500 border-purple-400 text-black font-bold"
                          : "bg-black/40 border-purple-500/40 text-purple-400"
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
                <span className="text-purple-400/80 uppercase">Aperte os canais para pular slides</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}