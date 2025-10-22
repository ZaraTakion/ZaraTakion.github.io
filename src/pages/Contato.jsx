import { motion } from 'framer-motion'
import './Contato.css'

const Contato = () => (
  <section className="contato section container">
    <motion.h2
      className="section-title"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      Entre em Contato
    </motion.h2>

    <motion.p
      className="contato-intro"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      Está aberto a colaborações, freelas ou propostas profissionais?  
      Mande uma mensagem — ou fale direto pelos canais abaixo.
    </motion.p>

    <motion.form
      className="contato-form surface"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
      onSubmit={(e) => e.preventDefault()}
    >
      <input type="text" placeholder="Seu Nome" required className="input" />
      <input type="email" placeholder="Seu Email" required className="input" />
      <textarea rows="5" placeholder="Sua Mensagem" required></textarea>
      <button type="submit" className="btn btn-primary">Enviar</button>
    </motion.form>

    <div className="contato-links">
      <a href="mailto:rodzmaciel21@gmail.com">Gmail</a>
      <a href="https://github.com/ZaraTakion" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://www.linkedin.com/in/rodrigo-pinheiro-94aa74358/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </div>
  </section>
)

export default Contato
