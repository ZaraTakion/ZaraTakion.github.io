import { motion } from 'framer-motion';
import './Contato.css';

const Contato = () => {
  const contatos = [
    { nome: "Email", link: "mailto:seuemail@exemplo.com" },
    { nome: "LinkedIn", link: "https://www.linkedin.com/in/seu-perfil", target: "_blank", rel: "noopener noreferrer" },
    { nome: "GitHub", link: "https://github.com/seu-usuario", target: "_blank", rel: "noopener noreferrer" }
  ];

  return (
    <section className="contato" id="contato">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Contato
      </motion.h2>

      <div className="contato-links">
        {contatos.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target={item.target || "_self"}
            rel={item.rel || undefined}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {item.nome}
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Contato;
