import React from "react";
import { motion } from "motion/react";

export default function About() {
  return (
    <section
      id="quem-somos"
      className="relative bg-[#0b3d91] pt-20 pb-12 px-6 flex flex-col items-center justify-center text-center overflow-hidden"
    >
      <div className="max-w-4xl mx-auto z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-8"
        >
          <span className="text-xs font-mono tracking-widest text-purple-300 uppercase bg-white/5 border border-white/10 px-3 py-1 rounded-full mb-3">
            História & Propósito
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Quem Somos
          </h2>
          <div className="w-16 h-1 bg-purple-500 rounded-full mt-4" />
        </motion.div>

        {/* Content Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-sans text-lg sm:text-xl text-slate-200 leading-relaxed text-justify mb-12"
        >
          A LEPoli é uma comunidade de estudantes apaixonados por inovação, empreendedorismo. Fomentamos o protagonismo universitário com conexões e prática. Aqui, o objetivo é tirar ideias do papel e colocar na realidade.
        </motion.p>

        {/* Visual Pill Accents */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {[
            { label: "Protagonismo", icon: "⭐" },
            { label: "Inovação", icon: "💡" },
            { label: "Conexões", icon: "🌐" },
            { label: "Capacitação", icon: "🛠️" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 hover:bg-white/10 hover:border-purple-400/40 hover:scale-105 transition-all duration-300 group shadow-md"
            >
              <span className="text-2xl group-hover:animate-bounce">{item.icon}</span>
              <span className="font-sans font-medium text-white text-sm">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Decorative absolute subtle light blur */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-purple-600/10 blur-[80px] pointer-events-none" />
    </section>
  );
}
