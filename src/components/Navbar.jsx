import React from "react";

function Navbar() {
  return (
    <nav>
      <button className="menu-toggle">
        <span></span>
        <span></span>
        <span></span>
      </button>
        <ul className="menu">
          <li><a href="#" className="ativo">Início</a></li>
          <li><a href="#">Experiência</a></li>
          <li><a href="#">Qualificações</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
    </nav>
  );
}

export default Navbar;
