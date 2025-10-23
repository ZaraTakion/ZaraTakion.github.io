import { motion } from 'framer-motion'
import './Footer.css'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className='footer'>
      <div className='container footer-wrapper'>
        <motion.div
          className='footer-main'
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3>
            Zara <span>Takion</span>
          </h3>
          <p>
            Portfólio de <strong>Rodrigo A. Maciel Pinheiro</strong> — explorando a interseção entre
            <em> Data Science</em> e <em>Frontend Design</em>.
          </p>
        </motion.div>

        <motion.div
          className='footer-links'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <a href='mailto:rodzmaciel21@gmail.com'>Gmail</a>
          <a
            href='https://github.com/ZaraTakion'
            target='_blank'
            rel='noopener noreferrer'
          >
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

        <motion.div
          className='footer-copy'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p>© {year} Zara Takion • Todos os direitos reservados.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
