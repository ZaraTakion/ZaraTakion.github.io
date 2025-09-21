import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = 'home';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 70;
        if (window.scrollY >= sectionTop) current = section.getAttribute('id');
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <img className="nav-img" src={logo} alt="Logo" />
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
        {['home','sobre','portfolio','contato'].map((sec) => (
          <li
            key={sec}
            className={activeSection === sec ? 'active' : ''}
            onClick={() => scrollToSection(sec)}
          >
            {sec.charAt(0).toUpperCase() + sec.slice(1)}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
