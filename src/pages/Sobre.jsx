import { motion } from 'framer-motion'
import './Sobre.css'

const skills = [
  { nome: 'Python & Data Science', nivel: 90 },
  { nome: 'React & Frontend', nivel: 85 },
  { nome: 'Machine Learning', nivel: 75 },
  { nome: 'UI/UX Design', nivel: 80 },
  { nome: 'SQL & ETL Pipelines', nivel: 70 },
]

const Sobre = () => (
  <section className="sobre section container">
    <motion.h2
      className="section-title"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      Sobre Mim
    </motion.h2>

    <motion.p
      className="descricao"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      Sou <strong>Rodrigo A. Maciel Pinheiro</strong>, conhecido online como <strong>Zara Takion</strong>. 
      Desenvolvedor frontend e cientista de dados com foco em visualização de informações e design funcional.
      Meu objetivo é unir análise de dados e experiência visual para criar produtos que comuniquem conhecimento de forma clara, precisa e elegante.
    </motion.p>

    <div className="skills-grid">
      {skills.map((s, i) => (
        <motion.div
          key={i}
          className="skill-card surface"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.15 }}
        >
          <span className="skill-name">{s.nome}</span>
          <div className="bar">
            <div className="fill" style={{ width: `${s.nivel}%` }}></div>
          </div>
          <span className="percent">{s.nivel}%</span>
        </motion.div>
      ))}
    </div>
  </section>
)

export default Sobre
