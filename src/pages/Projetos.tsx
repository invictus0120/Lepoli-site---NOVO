import React from "react";
import { motion } from "motion/react";
import { Rocket, Star, Briefcase, Mic, ChevronRight, Code, Users, BookOpen } from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  status: "Ativo" | "Em Breve" | "Concluído";
  desc: string;
  icon: React.ReactNode;
  gradient: string;
}

const projects: ProjectItem[] = [
  // Principais (que também aparecem na Home)
  {
    id: "garagem",
    title: "Garagem de Startups",
    category: "Aceleração",
    status: "Ativo",
    desc: "O laboratório e ecossistema onde ideias universitárias se transformam em MVP com mentorias, infraestrutura e conexões diretas com fundos de capital de risco.",
    icon: <Rocket className="w-6 h-6 text-purple-400" />,
    gradient: "from-purple-900/60 to-purple-800/20",
  },
  {
    id: "onboarding",
    title: "Onboarding de Membros",
    category: "Capacitação",
    status: "Ativo",
    desc: "Treinamento intensivo prático de integração para alinhar novos membros à cultura e aos projetos de execução da LEPoli USP.",
    icon: <Star className="w-6 h-6 text-indigo-400" />,
    gradient: "from-indigo-900/60 to-indigo-800/20",
  },
  {
    id: "estagios",
    title: "Programa de Estágios",
    category: "Mercado",
    status: "Ativo",
    desc: "Oportunidades exclusivas de conexão e posições de liderança em startups parceiras e fundos de venture capital.",
    icon: <Briefcase className="w-6 h-6 text-cyan-400" />,
    gradient: "from-cyan-900/60 to-cyan-800/20",
  },
  {
    id: "founders",
    title: "Founder's Talk",
    category: "Eventos",
    status: "Ativo",
    desc: "Eventos abertos aproximando alunos a fundadores lendários e grandes expoentes de tecnologia do cenário brasileiro.",
    icon: <Mic className="w-6 h-6 text-pink-400" />,
    gradient: "from-pink-900/60 to-pink-800/20",
  },
  // Outros projetos
  {
    id: "hackathon",
    title: "Hackathon LEPoli",
    category: "Competição",
    status: "Em Breve",
    desc: "Maratona de programação e negócios de 48h onde os alunos devem resolver desafios reais propostos por empresas parceiras.",
    icon: <Code className="w-6 h-6 text-emerald-400" />,
    gradient: "from-emerald-900/60 to-emerald-800/20",
  },
  {
    id: "mentoria",
    title: "Mentoria 1-on-1",
    category: "Desenvolvimento",
    status: "Ativo",
    desc: "Programa de conexão entre alunos e grandes líderes de mercado para aconselhamento de carreira e negócios.",
    icon: <Users className="w-6 h-6 text-amber-400" />,
    gradient: "from-amber-900/60 to-amber-800/20",
  },
  {
    id: "biblioteca",
    title: "Biblioteca Empreendedora",
    category: "Recursos",
    status: "Concluído",
    desc: "Acervo de livros, artigos e cursos curados e disponibilizados gratuitamente para todos os membros da Liga.",
    icon: <BookOpen className="w-6 h-6 text-rose-400" />,
    gradient: "from-rose-900/60 to-rose-800/20",
  },
];

export default function Projetos() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 flex flex-col items-center">
      <div className="max-w-6xl w-full">
        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <span className="text-sm font-mono tracking-widest text-purple-400 uppercase mb-3">
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

        {/* Projects List */}
        <div className="flex flex-col gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative bg-[#1a0b2e]/60 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 hover:border-purple-500/50 hover:bg-[#1a0b2e]/80 transition-all duration-300 shadow-lg cursor-pointer overflow-hidden"
            >
              {/* Subtle background glow based on the gradient color */}
              <div className={`absolute -inset-4 opacity-0 group-hover:opacity-10 bg-gradient-to-tr ${project.gradient} transition-opacity duration-500 blur-2xl pointer-events-none`} />

              {/* Icon Container */}
              <div className={`w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-tr ${project.gradient} border border-white/10 flex items-center justify-center`}>
                {project.icon}
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-bold text-2xl text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <span className={`text-[10px] font-mono tracking-wider font-bold px-2 py-1 rounded-md uppercase border ${
                    project.status === 'Ativo' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 
                    project.status === 'Em Breve' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' : 
                    'bg-slate-500/10 text-slate-400 border-slate-500/20'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <span className="text-xs font-mono text-purple-400 uppercase mb-3 block">
                  {project.category}
                </span>
                
                <p className="text-gray-300 text-sm md:text-base max-w-3xl leading-relaxed">
                  {project.desc}
                </p>
              </div>

              {/* Action Button */}
              <div className="md:ml-auto mt-4 md:mt-0 flex items-center shrink-0">
                <button className="flex items-center gap-2 text-sm font-medium text-purple-300 group-hover:text-white bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 px-5 py-2.5 rounded-full transition-all">
                  Saber mais
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
