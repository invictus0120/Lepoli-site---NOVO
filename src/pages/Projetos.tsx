import React, { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  Rocket, Star, Mic, Users, 
  Presentation, TrendingUp, MessageCircle, Mail,
  Compass, Zap, Sun, Network, ArrowLeft
} from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  desc: string;
  imgSrc: string;
  icon: React.ReactNode;
  fallbackGradient: string;
  gridClass: string;
}

interface ProjectCategory {
  title: string;
  projects: ProjectItem[];
}

const projectCategories: ProjectCategory[] = [
  {
    title: "Comunica",
    projects: [
      {
        id: "pitch-deck",
        title: "Pitch Deck",
        desc: "Desenvolvimento de apresentações de alto impacto para captação de recursos e vendas.",
        imgSrc: "/foto-pitch-deck.png",
        icon: <Presentation className="w-6 h-6 text-purple-400" />,
        fallbackGradient: "from-purple-900 to-indigo-950",
        gridClass: "md:col-span-2 md:row-span-2 min-h-[360px]",
      },
      {
        id: "venture-sales",
        title: "Venture Sales",
        desc: "Estratégias de vendas voltadas para startups e ecossistema de inovação.",
        imgSrc: "/foto-venture-sales.png",
        icon: <TrendingUp className="w-6 h-6 text-emerald-400" />,
        fallbackGradient: "from-emerald-900 to-[#0b3d91]",
        gridClass: "md:col-span-1 md:row-span-1 min-h-[200px]",
      },
      {
        id: "pitch-de-bar",
        title: "Pitch de Bar",
        desc: "Ambiente descontraído para treinar o discurso de vendas e receber feedbacks valiosos.",
        imgSrc: "/foto-pitch-bar.png",
        icon: <MessageCircle className="w-6 h-6 text-amber-400" />,
        fallbackGradient: "from-amber-900 to-orange-950",
        gridClass: "md:col-span-1 md:row-span-1 min-h-[200px]",
      },
      {
        id: "omelete",
        title: "Omelete",
        desc: "Nossa newsletter e canal de comunicação interna e externa para compartilhar conhecimento.",
        imgSrc: "/Omelete.png",
        icon: <Mail className="w-6 h-6 text-pink-400" />,
        fallbackGradient: "from-[#0b3d91] to-purple-950",
        gridClass: "md:col-span-3 md:row-span-1 min-h-[220px]",
      }
    ]
  },
  {
    title: "Acelera",
    projects: [
      {
        id: "garagem",
        title: "Garagem",
        desc: "O laboratório e ecossistema onde ideias universitárias se transformam em MVP com mentorias e conexões.",
        imgSrc: "/foto-garagem.png",
        icon: <Rocket className="w-6 h-6 text-purple-400" />,
        fallbackGradient: "from-indigo-900 to-[#0b3d91]",
        gridClass: "md:col-span-2 md:row-span-2 min-h-[360px]",
      },
      {
        id: "first-steps",
        title: "First Steps",
        desc: "Os primeiros passos para quem quer entender como estruturar uma startup do zero.",
        imgSrc: "/FirstSteps.png",
        icon: <Compass className="w-6 h-6 text-cyan-400" />,
        fallbackGradient: "from-cyan-900 to-blue-950",
        gridClass: "md:col-span-1 md:row-span-1 min-h-[200px]",
      },
      {
        id: "onboarding",
        title: "Onboarding",
        desc: "Treinamento intensivo prático de integração para alinhar novos membros à cultura.",
        imgSrc: "/foto-onboarding.png",
        icon: <Star className="w-6 h-6 text-indigo-400" />,
        fallbackGradient: "from-indigo-900 to-purple-900",
        gridClass: "md:col-span-1 md:row-span-1 min-h-[200px]",
      },
      {
        id: "sprints-capacitacao",
        title: "Sprints de Capacitação",
        desc: "Treinamentos ágeis para desenvolvimento de hard e soft skills necessárias no mercado.",
        imgSrc: "/foto-sprints.png",
        icon: <Zap className="w-6 h-6 text-yellow-400" />,
        fallbackGradient: "from-slate-900 to-indigo-950",
        gridClass: "md:col-span-3 md:row-span-1 min-h-[220px]",
      }
    ]
  },
  {
    title: "Eventos",
    projects: [
      {
        id: "founders-talks",
        title: "Founder's Talks",
        desc: "Eventos abertos aproximando alunos a fundadores lendários e grandes expoentes de tecnologia.",
        imgSrc: "/foto-founders.png",
        icon: <Mic className="w-6 h-6 text-pink-400" />,
        fallbackGradient: "from-pink-900 to-rose-950",
        gridClass: "md:col-span-2 md:row-span-2 min-h-[360px]",
      },
      {
        id: "summer-job",
        title: "Summer Job",
        desc: "Oportunidades de imersão e aprendizado rápido em startups durante as férias.",
        imgSrc: "/foto_estagios.png",
        icon: <Sun className="w-6 h-6 text-yellow-400" />,
        fallbackGradient: "from-amber-900 to-orange-950",
        gridClass: "md:col-span-1 md:row-span-1 min-h-[200px]",
      },
      {
        id: "meet-interno",
        title: "Meet Interno",
        desc: "Encontros exclusivos para membros da liga para troca de experiências e networking.",
        imgSrc: "/foto-meet-interno.png",
        icon: <Users className="w-6 h-6 text-emerald-400" />,
        fallbackGradient: "from-emerald-900 to-teal-950",
        gridClass: "md:col-span-1 md:row-span-1 min-h-[200px]",
      },
      {
        id: "startups-hub",
        title: "Startup's Hub",
        desc: "Conexão direta com as startups mais quentes do mercado para oportunidades exclusivas.",
        imgSrc: "/foto-startups-hub.png",
        icon: <Network className="w-6 h-6 text-indigo-400" />,
        fallbackGradient: "from-[#0b3d91] to-purple-950",
        gridClass: "md:col-span-3 md:row-span-1 min-h-[220px]",
      }
    ]
  }
];

export default function Projetos() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 flex flex-col items-center bg-[#121212] overflow-hidden">
      <div className="max-w-6xl w-full z-10 relative">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute top-0 left-0"
        >
          <Link
            to="/"
            className="group flex items-center gap-2 text-purple-400 hover:text-white bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 px-4 py-2 rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Início</span>
          </Link>
        </motion.div>

        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center mb-16 text-center mt-12 sm:mt-0"
        >
          <span className="text-sm font-mono tracking-widest text-purple-400 uppercase mb-3 border border-purple-500/20 px-4 py-1.5 rounded-full">
            Portfólio Completo
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-6">
            Nossos Projetos
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Da concepção à execução, nossas iniciativas são desenhadas para conectar teoria universitária com inovação pragmática do mercado.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-indigo-500 rounded-full mt-8" />
        </motion.div>

        {/* Categories Loop */}
        <div className="flex flex-col gap-20">
          {projectCategories.map((category, catIdx) => (
            <div key={category.title} className="flex flex-col gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4"
              >
                <h2 className="text-3xl font-display font-bold text-white">{category.title}</h2>
                <div className="h-px bg-white/10 flex-1"></div>
              </motion.div>

              {/* Dynamic Bento Grid Layout for each category */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
                {category.projects.map((item, idx) => {
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
                      initial={{ opacity: 0, scale: 0.98 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.08 }}
                      className={`group relative rounded-3xl overflow-hidden bg-gradient-to-tr ${item.fallbackGradient} bg-cover bg-center border border-white/10 flex flex-col justify-end p-6 sm:p-8 text-left transition-all hover:border-purple-500/40 hover:shadow-[0_15px_40px_rgba(168,85,247,0.15)] ${item.gridClass}`}
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
                          <span className="bg-white/5 border border-white/10 w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
          ))}
        </div>
      </div>

      {/* Decorative background blurs inside dark container */}
      <div className="absolute top-1/3 left-10 w-96 h-96 rounded-full bg-indigo-900/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-purple-900/10 blur-[120px] pointer-events-none" />
    </div>
  );
}

