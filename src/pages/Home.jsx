import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Home.css'
import profile from '../assets/profile.png'

const Home = () => (
  <section className="home container">
    <motion.div
      className="home-text"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1>
        Rodrigo A. Maciel Pinheiro 
        <span className="gradient">/ Zara Takion</span>
      </h1>

      <p className="intro">
        Cientista de Dados e Desenvolvedor Frontend.<br />
        Especializado em Python, React e visualização de dados interativa. 
        Transformo informação em decisões claras e design inteligente.
      </p>

      <div className="actions">
        <Link to="/projetos" className="btn btn-primary">Ver Projetos</Link>
        <a
          href="https://github.com/ZaraTakion/Zara/blob/main/README.md"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
        >
          Ver Currículo
        </a>
      </div>

      <div className="links">
        <a href="mailto:rodzmaciel21@gmail.com">Gmail</a>
        <a href="https://github.com/ZaraTakion" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/rodrigo-pinheiro-94aa74358/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </motion.div>

    <motion.div
      className="home-visual"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.8 }}
    >
      <img src={profile} alt="Rodrigo A. Maciel Pinheiro" className="profile-img" />
      <div className="data-glow"></div>
    </motion.div>
  </section>
)

export default Home
