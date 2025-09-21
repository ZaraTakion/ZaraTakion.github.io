import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import './Contato.css';

const Contato = () => {
  const contatos = [
    { nome:"Email", link:"mailto:zara.maciel@email.com", icon:<FaEnvelope /> },
    { nome:"LinkedIn", link:"https://www.linkedin.com/in/zara-maciel", icon:<FaLinkedin /> },
    { nome:"GitHub", link:"https://github.com/zara-maciel", icon:<FaGithub /> },
  ];

  return (
    <section className="contato" id="contato">
      <h2>Contato</h2>
      <p>Quer trabalhar comigo ou tem alguma dúvida? Conecte-se abaixo:</p>
      <div className="contato-links">
        {contatos.map((c, i) => (
          <a key={i} href={c.link} target="_blank" rel="noopener noreferrer">
            {c.icon} {c.nome}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contato;
