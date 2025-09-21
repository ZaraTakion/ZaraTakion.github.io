import { motion } from 'framer-motion';
import './Portfolio.css';
import projeto1 from '../../assets/projeto1.png';
import projeto2 from '../../assets/projeto2.png';
import projeto3 from '../../assets/projeto3.png';

const Portfolio = () => {
  const projetos = [
    { 
      titulo: "Projeto 1", 
      descricao: "Descrição resumida do projeto 1.",
      tecnologias: ["React", "CSS"],
      img: projeto1,
      link: "https://github.com/seu-usuario/projeto1",
      deploy: "https://projeto1.netlify.app"
    },
    { 
      titulo: "Projeto 2", 
      descricao: "Descrição resumida do projeto 2.",
      tecnologias: ["JavaScript", "API"],
      img: projeto2,
      link: "https://github.com/seu-usuario/projeto2",
      deploy: "https://projeto2.netlify.app"
    },
    { 
      titulo: "Projeto 3", 
      descricao: "Descrição resumida do projeto 3.",
      tecnologias: ["Python", "DataViz"],
      img: projeto3,
      link: "https://github.com/seu-usuario/projeto3",
      deploy: "https://projeto3.netlify.app"
    },
  ];

  return (
    <section className="portfolio" id="portfolio">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Portfólio
      </motion.h2>

      <div className="portfolio-grid">
        {projetos.map((projeto, index) => (
          <motion.div
            className="card"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img src={projeto.img} alt={projeto.titulo} />
            <h3>{projeto.titulo}</h3>
            <p>{projeto.descricao}</p>
            <div className="card-tags">
              {projeto.tecnologias.map((tec, i) => <span key={i}>{tec}</span>)}
            </div>
            <div className="card-links">
              <a href={projeto.link} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={projeto.deploy} target="_blank" rel="noopener noreferrer">Deploy</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
