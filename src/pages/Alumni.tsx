import React, { useState } from "react";
import { motion } from "motion/react";
import { User, Linkedin, Mail } from "lucide-react";

interface Member {
  id: string;
  name: string;
  role: string;
  period?: string;
  photo?: string;
  linkedin?: string;
  status: "current" | "alumni";
}

// Current members as taken from the Organizers component
const membersData: Member[] = [
  { id: "1", name: "Luiggi", role: "Presidente", status: "current", photo: "/equipe/Luiggi.png" },
  { id: "2", name: "Jõao Vitor (JV)", role: "Vice-Presidente", status: "current", photo: "/equipe/JV.jpg" },
  { id: "3", name: "Baglioni", role: "Diretoria - Comunicação", status: "current", photo: "/equipe/Baglioni.png" },
  { id: "4", name: "Felipe", role: "Diretoria - Aceleração", status: "current", photo: "/equipe/Felipe.png" },
  { id: "5", name: "Kart", role: "Diretoria - Eventos", status: "current", photo: "/equipe/kart.png" },
  
  // Dummy Alumni Data (can be replaced with real data)
  { id: "a1", name: "Ana Silva", role: "Ex-Presidente", period: "2022 - 2023", status: "alumni" },
  { id: "a2", name: "Carlos Souza", role: "Ex-Diretor de Eventos", period: "2021 - 2022", status: "alumni" },
  { id: "a3", name: "Beatriz Lima", role: "Ex-Diretora de Comunicação", period: "2022 - 2024", status: "alumni" },
  { id: "a4", name: "Pedro Mendes", role: "Ex-Membro Aceleração", period: "2023 - 2024", status: "alumni" },
  { id: "a5", name: "Julia Rocha", role: "Ex-Vice-Presidente", period: "2020 - 2021", status: "alumni" },
];

export default function Alumni() {
  const [filter, setFilter] = useState<"all" | "current" | "alumni">("all");

  const filteredMembers = membersData.filter(
    (m) => filter === "all" || m.status === filter
  );

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
            Nossa História
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-6">
            Membros e Alumni
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Conheça as mentes brilhantes que constroem e já construíram a Liga de Empreendedorismo da Poli. 
            Nossa rede de talentos se estende além da universidade.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-indigo-500 rounded-full mt-8" />
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {["all", "current", "alumni"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f as any)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === f
                  ? "bg-purple-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {f === "all" ? "Todos" : f === "current" ? "Membros Atuais" : "Alumni"}
            </button>
          ))}
        </div>

        {/* Members Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {filteredMembers.map((member) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={member.id}
              className="bg-[#1a0b2e]/60 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 flex flex-col items-center text-center group hover:border-purple-500/50 hover:bg-[#1a0b2e]/80 transition-all duration-300 hover:-translate-y-2 shadow-lg"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-purple-500/30 group-hover:border-purple-400 transition-colors bg-black/20 flex items-center justify-center">
                {member.photo ? (
                  <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                ) : (
                  <User className="w-10 h-10 text-purple-300/50" />
                )}
              </div>
              <h3 className="font-bold text-xl text-white mb-1">{member.name}</h3>
              <p className="text-purple-300 text-sm mb-2">{member.role}</p>
              
              {member.period && (
                <span className="text-xs font-mono text-gray-400 bg-white/5 px-2 py-1 rounded-md mb-4">
                  {member.period}
                </span>
              )}
              
              <div className="mt-auto pt-4 flex gap-3">
                <a href={member.linkedin || "#"} className="p-2 bg-white/5 rounded-full text-gray-400 hover:text-[#0a66c2] hover:bg-white/10 transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="p-2 bg-white/5 rounded-full text-gray-400 hover:text-red-400 hover:bg-white/10 transition-colors">
                  <Mail size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
