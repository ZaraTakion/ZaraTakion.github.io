import { motion } from 'framer-motion';
import './Portfolio.css';
import projeto1 from '../../assets/projeto1.png';
import projeto2 from '../../assets/projeto2.png';
import projeto3 from '../../assets/projeto3.png';

const Portfolio = () => {
  const projetos = [
    { titulo: "Projeto 1", descricao: "Descrição do projeto 1", img: projeto1 },
    { titulo: "Projeto 2", descricao: "Descrição do projeto 2", img: projeto2 },
    { titulo: "Projeto 3", descricao: "Descrição do projeto 3", img: projeto3 },
  ];

  return (
    <section className="portfolio" id="portfolio">
      <h2>Portfólio</h2>
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
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
