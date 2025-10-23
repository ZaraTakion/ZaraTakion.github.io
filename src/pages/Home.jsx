import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Home.css'
import profile from '../assets/profile.png'

const Home = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay },
    }),
  }

  return (
    <section className='home container' id='conteudo'>
      {/* ===== Texto principal ===== */}
      <motion.div
        className='home-text'
        initial='hidden'
        animate='show'
        variants={fadeUp}
      >
        <motion.h1 variants={fadeUp} custom={0.1}>
          Rodrigo A. Maciel Pinheiro
          <span className='gradient'> / Zara Takion</span>
        </motion.h1>

        <motion.p className='intro' variants={fadeUp} custom={0.2}>
          Cientista de Dados e Desenvolvedor Frontend.<br />
          Especializado em Python, React e visualização interativa.
          Transformo dados em decisões e design inteligente.
        </motion.p>

        <motion.div className='actions' variants={fadeUp} custom={0.3}>
          <Link to='/projetos' className='btn btn-primary'>
            Ver Projetos
          </Link>
          <a
            href='https://github.com/ZaraTakion/Zara/blob/main/README.md'
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-outline'
          >
            Ver Currículo
          </a>
        </motion.div>

        <motion.div className='links' variants={fadeUp} custom={0.4}>
          <a href='mailto:rodzmaciel21@gmail.com'>Gmail</a>
          <a href='https://github.com/ZaraTakion' target='_blank' rel='noopener noreferrer'>
            GitHub
          </a>
          <a
            href='https://www.linkedin.com/in/rodrigo-pinheiro-94aa74358/'
            target='_blank'
            rel='noopener noreferrer'
          >
            LinkedIn
          </a>
        </motion.div>
      </motion.div>

      {/* ===== Visual ===== */}
      <motion.div
        className='home-visual'
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div className='data-glow' />
        <img
          src={profile}
          alt='Rodrigo A. Maciel Pinheiro — Cientista de Dados e Desenvolvedor Frontend'
          className='profile-img'
          loading='lazy'
        />
      </motion.div>
    </section>
  )
}

export default Home
