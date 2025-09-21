import React from 'react';
import projeto1 from '../../assets/projeto1.png';
import projeto2 from '../../assets/projeto2.png';
import projeto3 from '../../assets/projeto3.png';
import './Portfolio.css';

const Portfolio = () => {
  const projetos = [
    { titulo: "Projeto 1", descricao: "Resumo do projeto 1", tecnologias: ["React","CSS"], img: projeto1, link:"https://github.com/seu-usuario/projeto1", deploy:"https://projeto1.netlify.app" },
    { titulo: "Projeto 2", descricao: "Resumo do projeto 2", tecnologias: ["JS","API"], img: projeto2, link:"https://github.com/seu-usuario/projeto2", deploy:"https://projeto2.netlify.app" },
    { titulo: "Projeto 3", descricao: "Resumo do projeto 3", tecnologias: ["Python","DataViz"], img: projeto3, link:"https://github.com/seu-usuario/projeto3", deploy:"https://projeto3.netlify.app" },
  ];

  return (
    <section className="portfolio" id="portfolio">
      <h2>Portfólio</h2>
      <div className="portfolio-grid">
        {projetos.map((p, i) => (
          <div className="card" key={i}>
            <img src={p.img} alt={p.titulo} />
            <h3>{p.titulo}</h3>
            <p>{p.descricao}</p>
            <div className="card-links">
              <a href={p.link} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={p.deploy} target="_blank" rel="noopener noreferrer">Deploy</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
