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
  { id: "6", name: "Gabriel Lopes", role: "Comunicação", status: "current", photo: "/equipe/Gabriel_Lopes.png" },
  { id: "7", name: "Gustavo", role: "Comunicação", status: "current", photo: "/equipe/Gustavo.png" },
  { id: "8", name: "Matheus", role: "Aceleração", status: "current", photo: "/equipe/Matheus.png" },
  { id: "9", name: "Danilo", role: "Comunicação", status: "current", photo: "/equipe/Danilo.png" },
  { id: "10", name: "João Gabriel", role: "Eventos", status: "current", photo: "/equipe/JP.png" },
  { id: "11", name: "Jeová", role: "Eventos", status: "current", photo: "/equipe/Jeova.png" },
  { id: "12", name: "Jõao Vitor", role: "Aceleração", status: "current", photo: "/equipe/Joao_vitor.png" },

  
  // Dummy Alumni Data (can be replaced with real data)
  { id: "a1", name: "Ana Silva", role: "Ex-Presidente", period: "2022 - 2023", status: "alumni" },
  { id: "a2", name: "Carlos Souza", role: "Ex-Diretor de Eventos", period: "2021 - 2022", status: "alumni" },
  { id: "a3", name: "Beatriz Lima", role: "Ex-Diretora de Comunicação", period: "2022 - 2024", status: "alumni" },
  { id: "a4", name: "Pedro Mendes", role: "Ex-Membro Aceleração", period: "2023 - 2024", status: "alumni" },
  { id: "a5", name: "Julia Rocha", role: "Ex-Vice-Presidente", period: "2020 - 2021", status: "alumni" },
];

export default function Alumni() {
  const [filter, setFilter] = useState<"current" | "alumni" | "all">("current");

  const renderMemberCard = (member: Member) => (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      key={member.id}
      className="bg-[#1a0b2e]/60 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-5 flex flex-col items-center text-center group hover:border-purple-500/50 hover:bg-[#1a0b2e]/80 transition-all duration-300 hover:-translate-y-2 shadow-lg"
    >
      <div className="w-20 h-20 rounded-full overflow-hidden mb-3 border-2 border-purple-500/30 group-hover:border-purple-400 transition-colors bg-black/20 flex items-center justify-center">
        {member.photo ? (
          <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
        ) : (
          <User className="w-8 h-8 text-purple-300/50" />
        )}
      </div>
      <h3 className="font-bold text-lg text-white mb-1">{member.name}</h3>
      <p className="text-purple-300 text-xs mb-2">{member.role}</p>
      
      {member.period && (
        <span className="text-[10px] font-mono text-gray-400 bg-white/5 px-2 py-1 rounded-md mb-3">
          {member.period}
        </span>
      )}
      
      <div className="mt-auto pt-3 flex gap-2">
        <a href={member.linkedin || "#"} className="p-2 bg-white/5 rounded-full text-gray-400 hover:text-[#0a66c2] hover:bg-white/10 transition-colors">
          <Linkedin size={16} />
        </a>
        <a href="#" className="p-2 bg-white/5 rounded-full text-gray-400 hover:text-red-400 hover:bg-white/10 transition-colors">
          <Mail size={16} />
        </a>
      </div>
    </motion.div>
  );

  const currentMembers = membersData.filter(m => m.status === "current");
  const alumniMembers = membersData.filter(m => m.status === "alumni");

  const teams = [
    { name: "Presidência", roles: ["Presidente", "Vice-Presidente"] },
    { name: "Comunicação", roles: ["Diretoria - Comunicação", "Comunicação"] },
    { name: "Eventos", roles: ["Diretoria - Eventos", "Eventos"] },
    { name: "Aceleração", roles: ["Diretoria - Aceleração", "Aceleração"] },
  ];

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
            Conheça as mentes que constroem e já construíram a Liga de Empreendedorismo da Poli. 
            Nossa comunidade se estende além da universidade.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-indigo-500 rounded-full mt-8" />
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          {["current", "alumni", "all"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f as any)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === f
                  ? "bg-purple-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {f === "current" ? "Membros Atuais" : f === "alumni" ? "Alumni" : "Todos"}
            </button>
          ))}
        </div>

        {/* Members Grid */}
        <div className="w-full">
          {(filter === "current" || filter === "all") && (
            <div className="flex flex-col gap-12 w-full mb-16">
              {filter === "all" && (
                <div className="flex items-center gap-4 mb-2">
                  <h2 className="text-3xl font-display font-bold text-white">Membros Atuais</h2>
                  <div className="h-px bg-white/10 flex-1"></div>
                </div>
              )}
              {teams.map(team => {
                const teamMembers = currentMembers.filter(m => team.roles.includes(m.role));
                if (teamMembers.length === 0) return null;
                return (
                  <div key={team.name} className="w-full">
                    <h3 className="text-xl font-display text-purple-300 mb-6 border-b border-white/10 pb-2 flex items-center justify-between">
                      {team.name}
                      <span className="text-xs font-mono text-white/30">{teamMembers.length} {teamMembers.length === 1 ? 'membro' : 'membros'}</span>
                    </h3>
                    <motion.div 
                      layout
                      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6"
                    >
                      {teamMembers.map(renderMemberCard)}
                    </motion.div>
                  </div>
                );
              })}
            </div>
          )}

          {(filter === "alumni" || filter === "all") && (
            <div className="w-full">
              {filter === "all" && (
                <div className="flex items-center gap-4 mb-8 mt-8">
                  <h2 className="text-3xl font-display font-bold text-white">Alumni</h2>
                  <div className="h-px bg-white/10 flex-1"></div>
                </div>
              )}
              <motion.div 
                layout
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6"
              >
                {alumniMembers.map(renderMemberCard)}
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
