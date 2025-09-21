import { motion } from 'framer-motion';
import './Hero.css';
import profile_img from '/src/assets/profile_img.png';

const Hero = () => {
  return (
    <section className="hero" id="home">
      {/* Foto do perfil */}
      <motion.img
        src={profile_img}
        alt="Zara Maciel"
        className="hero-img"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      />

      {/* Tagline */}
      <motion.p
        className="hero-tagline"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Desenvolvedor Frontend | Apaixonado por Ciência de Dados
      </motion.p>

      {/* Título principal */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <span className="gradient-text">Olá, eu sou Zara Maciel</span><br />
        Criando experiências digitais modernas.
      </motion.h1>

      {/* Descrição */}
      <motion.p
        className="hero-desc"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        Estudante de Sistemas para Internet, combino minhas habilidades em Frontend e Ciência de Dados para construir projetos responsivos e funcionais.
      </motion.p>

      {/* Ações */}
      <motion.div
        className="hero-action"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
      >
        <a href="#contato" className="hero-connect">Entre em Contato</a>
        <a href="/curriculo.pdf" className="hero-resume" target="_blank" rel="noopener noreferrer">Meu Currículo</a>
        <a href="#portfolio" className="hero-portfolio">Meus Projetos</a>
      </motion.div>
    </section>
  );
};

export default Hero;
