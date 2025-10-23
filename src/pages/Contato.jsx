import { motion } from 'framer-motion'
import './Contato.css'

const Contato = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay },
    }),
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui você pode integrar EmailJS ou outro serviço de envio
    alert('Mensagem enviada com sucesso!')
  }

  return (
    <section className='contato section container'>
      {/* ===== Título ===== */}
      <motion.h2
        className='section-title'
        initial='hidden'
        whileInView='show'
        variants={fadeUp}
        viewport={{ once: true }}
      >
        Entre em Contato
      </motion.h2>

      {/* ===== Introdução ===== */}
      <motion.p
        className='contato-intro'
        initial='hidden'
        whileInView='show'
        variants={fadeUp}
        custom={0.1}
        viewport={{ once: true }}
      >
        Aberto a colaborações, freelas ou oportunidades profissionais.  
        Mande uma mensagem — ou fale direto pelos canais abaixo.
      </motion.p>

      {/* ===== Formulário ===== */}
      <motion.form
        className='contato-form surface'
        onSubmit={handleSubmit}
        initial='hidden'
        whileInView='show'
        variants={fadeUp}
        custom={0.2}
        viewport={{ once: true }}
      >
        <input
          type='text'
          placeholder='Seu Nome'
          required
          className='input'
          name='name'
          autoComplete='off'
        />
        <input
          type='email'
          placeholder='Seu Email'
          required
          className='input'
          name='email'
          autoComplete='off'
        />
        <textarea
          rows='5'
          placeholder='Sua Mensagem'
          required
          name='message'
        />
        <button type='submit' className='btn btn-primary'>
          Enviar
        </button>
      </motion.form>

      {/* ===== Links ===== */}
      <motion.div
        className='contato-links'
        initial='hidden'
        whileInView='show'
        variants={fadeUp}
        custom={0.3}
        viewport={{ once: true }}
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
    </section>
  )
}

export default Contato
