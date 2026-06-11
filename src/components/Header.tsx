import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location.pathname === "/";

  const navLinkClass = "text-gray-300 hover:text-white font-sans text-sm font-medium tracking-wide transition-colors";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#120024]/80 backdrop-blur-md border-b border-purple-500/20 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          : "bg-[#120024]/30 backdrop-blur-sm py-5 border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Branding */}
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-3 group">
            {logoFailed ? (
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center border-2 border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:scale-105 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            ) : (
              <img
                src="/logo_site.png"
                alt="Logo da Liga"
                referrerPolicy="no-referrer"
                onError={() => setLogoFailed(true)}
                className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            )}
            <div className="flex flex-col">
              <h1 className="font-display font-bold text-2xl text-white tracking-wide leading-none">
                LEPoli
              </h1>
              <span className="text-[10px] text-purple-300 font-mono tracking-widest mt-1 uppercase">
                Liga de Empreendedorismo
              </span>
            </div>
          </Link>
        </div>

        {/* Navigation Menu for Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/projetos" className={navLinkClass}>
            Projetos
          </Link>
          <Link to="/alumni" className={navLinkClass}>
            Alumni
          </Link>
          <a
            href={isHome ? "#contatos" : "/#contatos"}
            className="px-4 py-2 rounded-full bg-purple-600/20 text-purple-200 border border-purple-500/30 hover:bg-purple-600 hover:text-white hover:border-purple-500 text-sm font-medium transition-all shadow-[0_0_15px_rgba(168,85,247,0.1)] hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
          >
            Contatos
          </a>
        </nav>

        {/* Simple Touch Hint for responsiveness */}
        <div className="md:hidden flex items-center">
          <a
            href={isHome ? "#contatos" : "/#contatos"}
            className="text-xs px-3 py-1.5 rounded-full bg-purple-600/30 text-purple-200 border border-purple-500/30"
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </header>
  );
}