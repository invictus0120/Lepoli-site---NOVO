import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Se não houver um "#" (hash) na URL, significa que o usuário 
    // apenas mudou de página (ex: /projetos, /alumni), então rolamos para o topo.
    if (!hash) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    } else {
      // Se houver um hash (ex: /#mvv), procuramos o elemento na página
      // e rolamos até ele. O setTimeout garante que a página teve tempo de renderizar.
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [pathname, hash]);

  return null;
}
