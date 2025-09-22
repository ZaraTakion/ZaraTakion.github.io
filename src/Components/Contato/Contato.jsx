// src/components/Contato/Contato.jsx
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import './Contato.css';

const Contato = () => {
  const contatos = [
    { nome: "LinkedIn", link:"https://www.linkedin.com/in/rodrigo-pinheiro-94aa74358/", icon:<FaLinkedin /> },
    { nome: "GitHub", link:"https://github.com/ZaraTakion", icon:<FaGithub /> },
    { nome: "Email", link:"mailto:rodrigo@example.com", icon:<FaEnvelope /> },
  ];

  return (
    <section className="contato" id="contato">
      <h2>Contato</h2>
      <p>Entre em contato comigo! Vamos construir algo incrível juntos.</p>
      <div className="contato-links">
        {contatos.map((c, i) => (
          <a key={i} href={c.link} target="_blank" rel="noopener noreferrer" className="contato-btn">
            {c.icon} <span>{c.nome}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contato;
