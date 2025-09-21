import './Navbar.css'
import zara from '../../assets/logo.png'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section')
      let current = 'home'

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120
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
  }

  return (
    <header className="navbar">
      <img className="nav-img" src={zara} alt="Logo Zara" />

      <ul className="nav-menu">
        {['home', 'sobre', 'portfolio', 'contato'].map((sec) => (
          <li
            key={sec}
            className={activeSection === sec ? 'active' : ''}
            onClick={() => scrollToSection(sec)}
          >
            {sec.charAt(0).toUpperCase() + sec.slice(1)}
          </li>
        ))}
      </ul>

      <button className="nav-connect" onClick={() => scrollToSection('contato')}>
        Conectar
      </button>
    </header>
  )
}

export default Navbar
