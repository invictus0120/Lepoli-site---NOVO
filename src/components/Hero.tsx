import React, { useState } from "react";
import { motion } from "motion/react";

export default function Hero() {
  const [bgFailed, setBgFailed] = useState(false);

  // Background style: fallback to a premium CSS deep dark space gradient with animated glowing nodes if background.jpeg fails.
  const backgroundStyle = bgFailed
    ? {
        background: "radial-gradient(circle at 50% 50%, #1e0b36 0%, #0b0213 100%)",
      }
    : {
        backgroundImage: `linear-gradient(rgba(18, 2, 36, 0.75), rgba(11, 61, 145, 0.65)), url('/background.jpeg')`,
      };

  return (
    <section
      id="hero"
      style={backgroundStyle}
      className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 px-6 bg-cover bg-center overflow-hidden"
    >
      {/* Decorative starry glowing background simulation */}
      {bgFailed && (
        <div className="absolute inset-0 z-0 opacity-40">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(168, 85, 247, 0.15)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            <circle cx="20%" cy="30%" r="200" fill="rgba(88, 28, 135, 0.3)" filter="blur(80px)" />
            <circle cx="80%" cy="70%" r="250" fill="rgba(6, 182, 212, 0.15)" filter="blur(100px)" />
          </svg>
        </div>
      )}

      {/* Invisible img selector to detect image loading failure */}
      {!bgFailed && (
        <img
          src="/background.jpeg"
          alt="raw-detect"
          className="hidden"
          onError={() => setBgFailed(true)}
        />
      )}

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Badge Indicator */}
        <motion.span
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-4 py-1.5 rounded-full bg-purple-500/20 text-purple-300 font-mono text-xs tracking-wider uppercase border border-purple-400/20 mb-8"
        >
          🚀 LEPoli USP • Fomento ao Empreendedorismo
        </motion.span>

        {/* Big Display Heading */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight mb-8 drop-shadow-md text-center max-w-3xl"
        >
          Fomentamos o ambiente <span className="text-purple-400">empreendedor</span> universitário
        </motion.h2>

        {/* Justified Description sentence */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans text-lg sm:text-xl text-gray-200 leading-relaxed text-justify max-w-3xl mb-12 flex flex-col"
        >
          <span className="text-center-last">
            Conectamos alunos da Escola Politécnica ao mercado de trabalho e ao empreendedorismo
          </span>
        </motion.p>

        {/* CTA Anchors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap items-center gap-4 justify-center"
        >
          <a
            href="#quem-somos"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium shadow-lg hover:from-purple-500 hover:to-indigo-500 hover:shadow-purple-500/30 hover:scale-105 active:scale-100 transition-all font-sans text-base"
          >
            Conhecer a Liga
          </a>
          <a
            href="#iniciativas"
            className="px-8 py-4 rounded-full bg-slate-900/80 text-gray-300 hover:text-white font-medium border border-gray-700 hover:border-gray-500 hover:bg-slate-950 transition-all font-sans text-base"
          >
            Nossas Iniciativas
          </a>
        </motion.div>
      </div>

      {/* Decorative separator overlay at section bottom */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-[#0b3d91] z-10" />
    </section>
  );
}
