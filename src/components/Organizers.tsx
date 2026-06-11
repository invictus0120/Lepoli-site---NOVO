import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  PresidenciaVisual, 
  VicePresidenciaVisual, 
  ComunicacaoVisual, 
  AceleracaoVisual, 
  EventosVisual 
} from './CardVisuals';

const renderVisual = (id: string) => {
  switch(id) {
    case "presidencia": return <PresidenciaVisual />;
    case "vice-presidencia": return <VicePresidenciaVisual />;
    case "comunicacao": return <ComunicacaoVisual />;
    case "aceleracao": return <AceleracaoVisual />;
    case "eventos": return <EventosVisual />;
    default: return null;
  }
};

interface CardData {
  id: string;
  category: "organization" | "team";
  title: string;
  frontDesc: string;
  backTitle: string;
  backDesc: string;
  department: string;
  icon: string;
  frontBg: string;
  borderColor: string;
  memberPhoto: string;
}

export default function Organizers() {
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const cards: CardData[] = [
    {
      id: "presidencia",
      category: "organization",
      title: "Presidência",
      frontDesc: "Responsável pela estratégia geral e representação institucional da Liga de Empreendedorismo.",
      backTitle: "Presidente",
      backDesc: "Luiggi",
      department: "Engenharia Ambiental",
      icon: "🏛️",
      memberPhoto: "/equipe/Luiggi.png",
      frontBg: "bg-emerald-50 text-emerald-950",
      borderColor: "border-emerald-200 hover:shadow-emerald-100",
    },
    {
      id: "vice-presidencia",
      category: "organization",
      title: "Vice-Presidência",
      frontDesc: "Garante a execução das estratégias internas e a total sinergia entre todas as áreas operacionais.",
      backTitle: "Vice-Presidente",
      backDesc: "Jõao Vitor (JV)",
      department: "Engenharia de Minas",
      icon: "⚙️",
      memberPhoto: "/equipe/JV.jpg",
      frontBg: "bg-rose-50 text-rose-950",
      borderColor: "border-rose-200 hover:shadow-rose-100",
    },
    {
      id: "comunicacao",
      category: "team",
      title: "Comunicação",
      frontDesc: "Responsável pela imagem da Liga, redes sociais, marketing visual e atração de novos talentos.",
      backTitle: "Diretoria",
      backDesc: "Baglioni",
      department: "Engenharia Civil",
      icon: "📢",
      memberPhoto: "/equipe/Baglioni.png",
      frontBg: "bg-amber-50 text-amber-950",
      borderColor: "border-amber-200 hover:shadow-amber-100",
    },
    {
      id: "aceleracao",
      category: "team",
      title: "Aceleração",
      frontDesc: "Focado no desenvolvimento e na capacitação dos membros da liga.",
      backTitle: "Diretoria",
      backDesc: "Felipe",
      department: "Engenharia Civil",
      icon: "🚀",
      memberPhoto: "/equipe/Felipe.png",
      frontBg: "bg-blue-50 text-blue-950",
      borderColor: "border-blue-200 hover:shadow-blue-100",
    },
    {
      id: "eventos",
      category: "team",
      title: "Eventos",
      frontDesc: "Organiza e executa os principais eventos da liga.",
      backTitle: "Diretoria",
      backDesc: "Kart",
      department: "Engenharia Civil",
      icon: "📅",
      memberPhoto: "/equipe/kart.png",
      frontBg: "bg-purple-50 text-purple-950",
      borderColor: "border-purple-200 hover:shadow-purple-100",
    },
  ];

  const handleCardClick = (id: string) => {
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const orgCards = cards.filter((c) => c.category === "organization");
  const teamCards = cards.filter((c) => c.category === "team");

  return (
    <section id="organizacao" className="relative bg-[#0b3d91] pb-24 px-6 flex flex-col items-center justify-center -mt-1 text-center">
      <div className="max-w-6xl w-full">
        {/* Core Header */}
        <motion.div className="flex flex-col items-center mb-12">
          <span className="text-xs font-mono tracking-widest text-[#d1b3ff] uppercase mb-2">ORGANIZAÇÃO</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">Quem Faz Acontecer</h2>
          <div className="w-16 h-1 bg-purple-500 rounded-full mt-4" />
        </motion.div>

        {/* Board Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-20">
          {orgCards.map((card) => (
            <div key={card.id} className="perspective-1000 h-80 cursor-pointer w-full" onClick={() => handleCardClick(card.id)}>
              <div className={`relative w-full h-full preserve-3d transition-transform duration-700 ${flippedCards[card.id] ? "rotate-y-180" : ""}`}>
                {/* FRONT */}
                <div className={`absolute inset-0 backface-hidden rounded-3xl p-6 flex flex-col items-center justify-between border-2 ${card.frontBg} ${card.borderColor}`}>
                  <div className="w-full">
                    {renderVisual(card.id)}
                    <h3 className="font-display font-bold text-2xl mt-4">{card.title}</h3>
                    <p className="text-sm opacity-90 px-2">{card.frontDesc}</p>
                  </div>
                </div>
                {/* BACK */}
                <div className={`absolute inset-0 backface-hidden rotate-y-180 rounded-3xl p-6 flex flex-col items-center justify-center border-2 ${card.frontBg} ${card.borderColor}`}>
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-white shadow-md">
                     <img src={card.memberPhoto} alt={card.backDesc} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-bold text-xl">{card.backDesc}</h3>
                  <p className="text-sm italic">{card.department}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nossos Times Header */}
        <div className="flex flex-col items-center mb-12">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">Nossos Times</h2>
          <div className="w-16 h-1 bg-purple-500 rounded-full mt-4" />
        </div>

        {/* Divisional Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamCards.map((card) => (
            <div key={card.id} className="perspective-1000 h-[340px] cursor-pointer w-full" onClick={() => handleCardClick(card.id)}>
              <div className={`relative w-full h-full preserve-3d transition-transform duration-700 ${flippedCards[card.id] ? "rotate-y-180" : ""}`}>
                {/* FRONT */}
                <div className={`absolute inset-0 backface-hidden rounded-3xl p-6 flex flex-col items-center justify-between border-2 ${card.frontBg} ${card.borderColor}`}>
                  <div className="w-full mb-4">
                    {renderVisual(card.id)}
                  </div>
                  <h3 className="font-bold text-xl">{card.title}</h3>
                  <p className="text-sm opacity-90">{card.frontDesc}</p>
                </div>
                {/* BACK */}
                <div className={`absolute inset-0 backface-hidden rotate-y-180 rounded-3xl p-6 flex flex-col items-center justify-center border-2 ${card.frontBg} ${card.borderColor}`}>
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-white shadow-md">
                     <img src={card.memberPhoto} alt={card.backDesc} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-bold text-xl">{card.backDesc}</h3>
                  <p className="text-sm italic">{card.department}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}