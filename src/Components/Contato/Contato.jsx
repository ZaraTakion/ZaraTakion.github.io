import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import './Contato.css';

const Contato = () => {
  const contatos = [
    { link:"https://www.linkedin.com/in/rodrigo-pinheiro-94aa74358/", icon:<FaLinkedin /> },
    { link:"https://github.com/ZaraTakion", icon:<FaGithub /> },
  ];

  return (
    <section className="contato" id="contato">
      <h2>Contato</h2>
      <p>Entre em contato comigo!</p>
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
