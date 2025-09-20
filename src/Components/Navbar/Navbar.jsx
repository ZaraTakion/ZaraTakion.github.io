import { useState } from "react";
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => setMenuAberto(!menuAberto);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Logo Zara" className="nav-img" />
      </div>

      {/* Menu */}
      <ul className={`nav-menu ${menuAberto ? 'active' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#portfolio">Portfólio</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>

      {/* Botão mobile */}
      <div className="nav-connect" onClick={toggleMenu}>
        {menuAberto ? "Fechar" : "Menu"}
      </div>
    </nav>
  );
};

export default Navbar;
