import './Navbar.css'
import zara from '../../assets/logo.png'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section')
      let current = 'home'
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute('id')
        }
      })
      setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMenuOpen(false) // fecha o menu no mobile ao clicar
  }

  return (
    <div className="navbar">
      <img className="nav-img" src={zara} alt="Logo Zara" />

      {/* Botão Hamburguer (Mobile) */}
      <div
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menu */}
      <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
        <li
          className={activeSection === 'home' ? 'active' : ''}
          onClick={() => scrollToSection('home')}
        >
          Início
        </li>
        <li
          className={activeSection === 'sobre' ? 'active' : ''}
          onClick={() => scrollToSection('sobre')}
        >
          Sobre
        </li>
        <li
          className={activeSection === 'portfolio' ? 'active' : ''}
          onClick={() => scrollToSection('portfolio')}
        >
          Portfólio
        </li>
        <li
          className={activeSection === 'contato' ? 'active' : ''}
          onClick={() => scrollToSection('contato')}
        >
          Contato
        </li>
      </ul>

      <div className="nav-connect" onClick={() => scrollToSection('contato')}>
        Conectar
      </div>
    </div>
  )
}

export default Navbar
