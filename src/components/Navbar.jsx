import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <button className="menu-toggle">
        <span></span>
        <span></span>
        <span></span>
      </button>
        <ul className="menu">
          <li><NavLink to="/" className={({isActive }) => (isActive ? "ativo" : "")}>Inicío</NavLink></li>
          <li><NavLink to="/experiencia" className={({isActive}) => (isActive ? "ativo" : "")}>Experência</NavLink></li>
          <li><NavLink to="/qualificacoes" className={({isActive}) => (isActive ? "ativo" : "")}>Qualificações</NavLink></li>
          <li><NavLink to="/contato" className={({isActive}) => (isActive ? "ativo" : "")}>Contato</NavLink></li>
          
        </ul>
    </nav>
  );
}

export default Navbar;
