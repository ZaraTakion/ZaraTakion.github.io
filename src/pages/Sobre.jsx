import { motion } from 'framer-motion'
import './Sobre.css'

const skills = [
  { nome: 'Python & Data Science', nivel: 90 },
  { nome: 'React & Frontend', nivel: 85 },
  { nome: 'Machine Learning', nivel: 75 },
  { nome: 'UI/UX Design', nivel: 80 },
  { nome: 'SQL & ETL Pipelines', nivel: 70 },
]

const Sobre = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay },
    }),
  }

  return (
    <section className='sobre section container'>
      {/* ===== Título ===== */}
      <motion.h2
        className='section-title'
        initial='hidden'
        whileInView='show'
        variants={fadeUp}
        viewport={{ once: true }}
      >
        Sobre Mim
      </motion.h2>

      {/* ===== Descrição ===== */}
      <motion.p
        className='descricao'
        initial='hidden'
        whileInView='show'
        variants={fadeUp}
        custom={0.1}
        viewport={{ once: true }}
      >
        Sou <strong>Rodrigo A. Maciel Pinheiro</strong>, conhecido online como <strong>Zara Takion</strong>.  
        Desenvolvedor frontend e cientista de dados com foco em visualização de informações e design funcional.  
        Meu objetivo é unir análise de dados e experiência visual para criar produtos que comuniquem conhecimento de forma clara, precisa e elegante.
      </motion.p>

      {/* ===== Habilidades ===== */}
      <div className='skills-grid'>
        {skills.map((s, i) => (
          <motion.div
            key={s.nome}
            className='skill-card surface'
            initial='hidden'
            whileInView='show'
            variants={fadeUp}
            custom={0.15 + i * 0.1}
            viewport={{ once: true }}
          >
            <span className='skill-name'>{s.nome}</span>
            <div className='bar'>
              <motion.div
                className='fill'
                style={{ '--target-width': `${s.nivel}%` }}
                initial={{ width: 0 }}
                whileInView={{ width: `${s.nivel}%` }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              />
            </div>
            <span className='percent'>{s.nivel}%</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Sobre
