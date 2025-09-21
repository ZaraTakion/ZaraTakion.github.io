import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import './Contato.css';

const Contato = () => {
  const contatos = [
    { nome: "Email", link: "mailto:zara.maciel@email.com", icon: <FaEnvelope /> },
    { nome: "LinkedIn", link: "https://www.linkedin.com/in/zara-maciel", icon: <FaLinkedin /> },
    { nome: "GitHub", link: "https://github.com/zara-maciel", icon: <FaGithub /> }
  ];

  return (
    <section className="contato" id="contato">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Entre em Contato
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Quer trabalhar comigo ou tem alguma dúvida? Conecte-se pelas plataformas abaixo.
      </motion.p>

      <div className="contato-links">
        {contatos.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {item.icon} {item.nome}
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Contato;
