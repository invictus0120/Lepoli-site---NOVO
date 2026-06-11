import React, { useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

interface BentoItem {
  id: string;
  title: string;
  desc: string;
  imgSrc: string;
  icon: string;
  fallbackGradient: string;
  gridClass: string;
}

  export default function Initiatives() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const navigate = useNavigate();

  const items: BentoItem[] = [
    {
      id: "garagem",
      title: "Garagem de Startups",
      desc: "O lugar para fazer conexões com futuros empreendedores e ser mentorado por pessoas de referência no mercado.",
      imgSrc: "/foto-garagem.png",
      icon: "🚀",
      fallbackGradient: "from-purple-900 to-indigo-950",
      gridClass: "md:col-span-2 md:row-span-2 min-h-[360px]",
    },
    {
      id: "onboarding",
      title: "Onboarding de Membros",
      desc: "Treinamento intensivo de integração de novos membros à cultura e aos projetos da LEPoli.",
      imgSrc: "/foto-onboarding.png",
      icon: "⭐",
      fallbackGradient: "from-indigo-900 to-[#0b3d91]",
      gridClass: "md:col-span-1 md:row-span-1 min-h-[200px]",
    },
    {
      id: "estagios",
      title: "Programa de Estágios",
      desc: "Oportunidades exclusivas de conexão e aprendizado a em startups e empresas inovadoras.",
      // Como você não enviou uma foto específica para estágios, mantivemos a estrutura. 
      // Se tiver uma foto, basta colocar na pasta public como "foto-estagios.jpg" e alterar aqui embaixo.
      imgSrc: "/foto_estagios.png",
      icon: "💼",
      fallbackGradient: "from-slate-900 to-indigo-950",
      gridClass: "md:col-span-1 md:row-span-1 min-h-[200px]",
    },
    {
      id: "founders",
      title: "Founder's Talk",
      desc: "Evento abertoo aproximando a comunidade politécnica a founders e grandes expoentes de tecnologia.",
      imgSrc: "/foto-founders.png",
      icon: "🎙️",
      fallbackGradient: "from-[#0b3d91] to-purple-950",
      gridClass: "md:col-span-2 md:row-span-1 min-h-[220px]",
    },
  ];

  return (
    <section
      id="iniciativas"
      className="relative bg-[#121212] py-24 px-6 flex flex-col items-center justify-center text-center overflow-hidden"
    >
      <div className="max-w-6xl w-full z-10">
        
        {/* Culture Subtitle Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16"
        >
          <span className="text-xs font-mono tracking-widest text-[#d1b3ff] border border-white/20 px-3 py-1 rounded-full uppercase mb-3">
            NA PRÁTICA
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Nossas Iniciativas
          </h2>
          <div className="w-16 h-1 bg-purple-500 rounded-full mt-4" />
        </motion.div>

        {/* Dynamic Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto auto-rows-fr">
          {items.map((item, idx) => {
            const hasError = !!imageErrors[item.id];
            
            // Generate visual style for bento cards
            const backgroundStyle = hasError
              ? {}
              : {
                  backgroundImage: `linear-gradient(to top, rgba(10, 2, 24, 0.95) 0%, rgba(10, 10, 40, 0.4) 100%), url('${item.imgSrc}')`,
                };

            return (
              <motion.div
                key={item.id}
                onClick={() => navigate('/projetos')}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`group relative rounded-3xl overflow-hidden bg-gradient-to-tr ${item.fallbackGradient} bg-cover bg-center border border-white/10 flex flex-col justify-end p-6 sm:p-8 text-left transition-all hover:border-purple-500/40 hover:shadow-[0_15px_40px_rgba(168,85,247,0.15)] cursor-pointer ${item.gridClass}`}
                style={backgroundStyle}
              >
                {/* Image detector to flag fallbacks */}
                {!hasError && (
                  <img
                    src={item.imgSrc}
                    alt={`${item.title} detect`}
                    referrerPolicy="no-referrer"
                    className="hidden"
                    onError={() => setImageErrors((prev) => ({ ...prev, [item.id]: true }))}
                  />
                )}

                {/* Cyber grid overlay on error fallback */}
                {hasError && (
                  <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(147,51,234,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.1)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
                )}

                {/* Card Glow accent on hover */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-purple-600/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Content block */}
                <div className="relative z-10 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl bg-white/5 border border-white/10 w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </span>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-purple-300 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="font-sans text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Decorative background blurs inside dark container */}
      <div className="absolute bottom-1/4 left-10 w-72 h-72 rounded-full bg-indigo-900/10 blur-[90px] pointer-events-none" />
    </section>
  );
}