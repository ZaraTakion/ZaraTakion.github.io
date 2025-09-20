import { motion } from 'framer-motion';
import './Hero.css';
import profile_img from '../../assets/zara-eu-Zara.png';

const Hero = () => {
  return (
    <section className="hero" id="home">
      
      {/* Foto do perfil com entrada suave */}
      <motion.img
        src={profile_img}
        alt="Zara Maciel"
        className="hero-img"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      />

      {/* Título com gradient animado no nome */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <span className="gradient-text">Olá, eu sou Zara Maciel, </span>desenvolvedor frontend do Brasil.
      </motion.h1>

      {/* Descrição com fade-in sequencial */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        Estudante de Sistemas para Internet, apaixonado por ciência de dados e web design.
        Crio soluções digitais modernas, responsivas e funcionais, sempre buscando aprender
        novas tecnologias e aplicar em projetos reais.
      </motion.p>

      {/* Botões com hover e entrada */}
      <motion.div
        className="hero-action"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
      >
        <a href="#contato" className="hero-connect">Entre em Contato</a>
        <a href="/curriculo.pdf" className="hero-resume" target="_blank" rel="noopener noreferrer">Meu Currículo</a>
      </motion.div>
      
    </section>
  );
};

export default Hero;
