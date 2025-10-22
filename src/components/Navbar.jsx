import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'
import logo from '../../public/logo.PNG'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => setOpen(false), [location.pathname])

  return (
    <header className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src={logo} alt="Logo Zara Takion" />
          <span>Zara<span className="accent">Takion</span></span>
        </Link>

        <nav className={`nav-links ${open ? 'active' : ''}`}>
          <Link to="/">Início</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/projetos">Projetos</Link>
          <Link to="/contato">Contato</Link>
        </nav>

        <button
          className="nav-toggle"
          aria-label="Abrir menu"
          onClick={() => setOpen(!open)}
        >
          {open ? '✖' : '☰'}
        </button>
      </div>
    </header>
  )
}

export default Navbar
