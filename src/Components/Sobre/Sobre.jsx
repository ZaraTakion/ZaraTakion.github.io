import { motion } from 'framer-motion';
import './Sobre.css';

const Sobre = () => {
  return (
    <motion.section
      className="sobre"
      id="sobre"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2>Sobre Mim</h2>

      {/* Bloco pessoal */}
      <motion.div
        className="sobre-pessoal"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p>
          Olá! Meu nome é <strong>Zara Maciel</strong>, tenho 23 anos e estudo Sistemas para Internet. 
          Sou apaixonado por tecnologia, criação de soluções digitais e sempre busco aprender coisas novas.
        </p>
      </motion.div>

      {/* Bloco técnico */}
      <motion.div
        className="sobre-tecnico"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <p>
          Tenho experiência em <strong>HTML, CSS, JavaScript, React</strong> e estou aprofundando meus conhecimentos em 
          <strong> Python, SQL e Ciência de Dados</strong>. Minha meta é desenvolver projetos modernos e responsivos.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default Sobre;
