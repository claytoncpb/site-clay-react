import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  // ⬇️ Estado que controla se o menu está aberto ou fechado
  const [menuAberto, setMenuAberto] = useState(false);

  // ⬇️ Alterna o estado do menu ao clicar no botão
  const alternarMenu = () => {
    setMenuAberto(!menuAberto);
  };

  // ⬇️ Fecha o menu ao clicar em um item do menu
  const fecharMenu = () => {
    setMenuAberto(false);
  };

  // ⬇️ Referências para o menu e para o botão
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  // ⬇️ Fecha o menu quando clicamos fora dele ou do botão
  useEffect(() => {
    const handleClickFora = (event) => {
      if (
        menuAberto &&
        !menuRef.current.contains(event.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target)
      ) {
        setMenuAberto(false);
      }
    };

    document.addEventListener("mousedown", handleClickFora);

    // Remove o ouvinte quando o componente desmontar ou o estado mudar
    return () => {
      document.removeEventListener("mousedown", handleClickFora);
    };
  }, [menuAberto]);

  return (
    <nav className="fixed">
      <button
        ref={toggleRef}
        className={`menu-toggle ${menuAberto ? "active" : ""}`}
        onClick={alternarMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul ref={menuRef} className={`menu ${menuAberto ? "show" : ""}`}>
        <li>
          <NavLink
            to="/"
            onClick={fecharMenu}
            className={({ isActive }) => (isActive ? "ativo" : "")}
          >
            Inicío
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/experiencia"
            onClick={fecharMenu}
            className={({ isActive }) => (isActive ? "ativo" : "")}
          >
            Experência
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/qualificacoes"
            onClick={fecharMenu}
            className={({ isActive }) => (isActive ? "ativo" : "")}
          >
            Qualificações
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contato"
            onClick={fecharMenu}
            className={({ isActive }) => (isActive ? "ativo" : "")}
          >
            Contato
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
