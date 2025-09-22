// src/components/Portfolio/Portfolio.jsx
import React from 'react';
import projeto1 from '../../assets/image1.jpg';
import projeto2 from '../../assets/image2.jpg';
import projeto3 from '../../assets/image3.jpg';
import './Portfolio.css';

const Portfolio = () => {
  const projetos = [
    { titulo: "Projeto 1", descricao: "Resumo do projeto 1", img: projeto1, link:"https://github.com/seu-usuario/projeto1" },
    { titulo: "Projeto 2", descricao: "Resumo do projeto 2", img: projeto2, link:"https://github.com/seu-usuario/projeto2" },
    { titulo: "Projeto 3", descricao: "Resumo do projeto 3", img: projeto3, link:"https://github.com/seu-usuario/projeto3" },
  ];

  return (
    <section className="portfolio" id="portfolio">
      <h2>Portfólio</h2>
      <div className="portfolio-grid">
        {projetos.map((p, i) => (
          <div className="portfolio-card" key={i}>
            <div className="card-img-container">
              <img src={p.img} alt={p.titulo} />
            </div>
            <div className="card-content">
              <h3>{p.titulo}</h3>
              <p>{p.descricao}</p>
              <div className="card-links">
                <a href={p.link} target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
