import React, { useState } from "react";
import { Linkedin, Instagram, Mail } from "lucide-react";

export default function Footer() {
  const [logoErrors, setLogoErrors] = useState<Record<string, boolean>>({});

  const handleLogoError = (id: string) => {
    setLogoErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <footer id="contatos" className="bg-[#121212] pt-20 pb-16 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Logos container */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-6">
            {/* Logo 1 - LEPoli */}
            <div className="h-24 flex items-center">
              {logoErrors.lepoli ? (
                <span className="font-display font-bold text-white text-xl tracking-wider border border-purple-500/30 px-4 py-2 rounded-xl bg-purple-500/10">
                  LEPoli
                </span>
              ) : (
                <img
                  src="/logo_site.png"
                  alt="Logo LEPoli"
                  referrerPolicy="no-referrer"
                  onError={() => handleLogoError("lepoli")}
                  className="h-24 w-auto object-contain brightness-100 grayscale-[20%] hover:grayscale-0 transition-all duration-300"
                />
              )}
            </div>

            {/* Logo 2 - POLI USP */}
            <div className="h-24 flex items-center">
              {logoErrors.poli ? (
                <span className="font-display font-medium text-slate-350 text-sm tracking-widest border border-white/10 px-4 py-2 rounded-xl bg-white/5">
                  Escola Politécnica
                </span>
              ) : (
                <img
                  src="/logo_poli.png"
                  alt="Logo Poli USP"
                  referrerPolicy="no-referrer"
                  onError={() => handleLogoError("poli")}
                  className="h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-all duration-300"
                />
              )}
            </div>

            {/* Logo 3 - USP */}
            <div className="h-24 flex items-center">
              {logoErrors.usp ? (
                <span className="font-display font-bold text-white text-lg tracking-widest bg-white/5 border border-white/10 px-4 py-2 rounded-xl">
                  USP
                </span>
              ) : (
                <img
                  src="/logo_usp.png"
                  alt="Logo USP"
                  referrerPolicy="no-referrer"
                  onError={() => handleLogoError("usp")}
                  className="h-16 w-auto object-contain opacity-75 hover:opacity-100 transition-all duration-300"
                />
              )}
            </div>
          </div>
          <p className="font-sans text-base text-gray-400 max-w-md leading-relaxed">
            Fomentando o protagonismo universitário e empreendedorismo de alto impacto na Escola Politécnica da Universidade de São Paulo.
          </p>
        </div>

        {/* Contacts column */}
        <div className="flex flex-col text-left">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight mb-6">
            Nossos Contatos
          </h2>
          
          <div className="flex flex-col gap-4 font-sans">
            {/* LinkedIn Link */}
            <a
              href="https://www.linkedin.com/company/lepoliusp/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-lg text-gray-400 hover:text-white transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#0077b5]/10 group-hover:border-[#0077b5]/30 group-hover:scale-105 transition-all text-gray-400 group-hover:text-[#0077b5]">
                <Linkedin className="w-5 h-5" />
              </div>
              <span className="text-sm sm:text-base font-medium">
                Linkedin: <span className="text-gray-500 group-hover:text-[#0077b5] transition-colors">lepoliusp</span>
              </span>
            </a>

            {/* Instagram Link */}
            <a
              href="https://www.instagram.com/lepoliusp/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-lg text-gray-400 hover:text-white transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#E1306C]/10 group-hover:border-[#E1306C]/30 group-hover:scale-105 transition-all text-gray-400 group-hover:text-[#E1306C]">
                <Instagram className="w-5 h-5" />
              </div>
              <span className="text-sm sm:text-base font-medium">
                Instagram: <span className="text-gray-500 group-hover:text-[#E1306C] transition-colors">@lepoliusp</span>
              </span>
            </a>

            {/* Email Link */}
            <a
              href="mailto:lepoliusp@gmail.com"
              className="group flex items-center gap-3 text-lg text-gray-450 hover:text-white transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#ea4335]/10 group-hover:border-[#ea4335]/30 group-hover:scale-105 transition-all text-gray-400 group-hover:text-[#ea4335]">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-sm sm:text-base font-medium">
                E-mail: <span className="text-gray-500 group-hover:text-[#ea4335] transition-colors">lepoliusp@gmail.com</span>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Legal Footer Bottom */}
      <div className="max-w-6xl mx-auto border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-gray-600">
        <span>© {new Date().getFullYear()} LEPoli USP. Todos os direitos reservados.</span>
        <div className="flex gap-4">
          <span className="hover:text-purple-400/85 transition-colors cursor-pointer">Termos de Uso</span>
          <span className="hover:text-purple-400/85 transition-colors cursor-pointer">Privacidade</span>
        </div>
      </div>
    </footer>
  );
}