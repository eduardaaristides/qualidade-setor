// src/components/Header.tsx
import "../app.css";
import { useState } from "react";
import { Home, Phone, BarChart3, Link as LinkIcon, Book } from "lucide-react";

function Header() {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const toggleSubmenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setSubmenuOpen(!submenuOpen);
  };

  return (
    <header>
      {/* === TOPO COM TEXTO ROLANTE === */}
      <nav className="top-nav" aria-label="notícias">
        <div className="marquee">
          <span className="marquee-text">
            Seja bem-vindo(a) ao Portal da Qualidade, agradecemos a sua visita! 
          </span>
        </div>
      </nav>

      {/* === NAV PRINCIPAL === */}
      <nav className="bottom-nav" aria-label="principal">
        <div className="logo">
          <img src="public/logo-rede-primavera.webp" alt="Logo Rede Primavera" />
        </div>

        <ul className="nav-links">
          <li>
            <a href="/home">
              <Home size={18} className="icon" /> Home
            </a>
          </li>
          <li>
            <a href="#">
              <Phone size={18} className="icon" /> Contatos
            </a>
          </li>

          {/* === POWER BI COM SUBMENU === */}
          <li className="has-submenu">
            <a href="#" onClick={toggleSubmenu}>
              <BarChart3 size={18} className="icon" /> Power BI
            </a>
            <ul className={`submenu ${submenuOpen ? "show" : ""}`}>
              <li><a href="/menubi">Dashboard 1</a></li>
              <li><a href="#">Dashboard 2</a></li>
              <li><a href="#">Dashboard 3</a></li>
          </ul>
          
          </li>

          <li>
            <a href="/cronogramaanual">
              <Book size={18} className="icon" /> Cronograma anual
            </a>
          </li>
          <li>
            <a href="#">
              <LinkIcon size={18} className="icon" /> Links Rápidos
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
