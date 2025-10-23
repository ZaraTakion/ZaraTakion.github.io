import { motion } from 'framer-motion'
import './Projetos.css'
import airQuality from '../assets/air-quality.png'
import trafficInsight from '../assets/traffic-insight.png'

const projetos = [
  {
    titulo: 'Air Quality Analysis',
    descricao:
      'Análise da qualidade do ar com Python, Pandas e visualizações avançadas. Inclui insights temporais e correlação entre poluentes.',
    img: airQuality,
    link: 'https://github.com/ZaraTakion/air-quality-analysis',
    tags: ['Python', 'Pandas', 'Matplotlib', 'EDA'],
  },
  {
    titulo: 'Brazil Traffic Insight',
    descricao:
      'Estudo de acidentes de trânsito no Brasil usando dados públicos. Dashboards interativos, geolocalização e análise estatística.',
    img: trafficInsight,
    link: 'https://github.com/ZaraTakion/brazil-traffic-insight',
    tags: ['Data Science', 'Seaborn', 'GeoPandas', 'Dashboard'],
  },
]

const Projetos = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay },
    }),
  }

  return (
    <section className='projetos section container'>
      {/* ===== Título ===== */}
      <motion.h2
        className='section-title'
        initial='hidden'
        whileInView='show'
        variants={fadeUp}
        viewport={{ once: true }}
      >
        Projetos em Destaque
      </motion.h2>

      {/* ===== Grid de Projetos ===== */}
      <div className='projetos-grid'>
        {projetos.map((p, i) => (
          <motion.a
            key={p.titulo}
            href={p.link}
            target='_blank'
            rel='noopener noreferrer'
            className='projeto-card surface'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <div className='thumb'>
              <img
                src={p.img}
                alt={`Preview do projeto ${p.titulo}`}
                loading='lazy'
              />
            </div>

            <div className='info'>
              <h3>{p.titulo}</h3>
              <p>{p.descricao}</p>
              <div className='tags'>
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}

export default Projetos
