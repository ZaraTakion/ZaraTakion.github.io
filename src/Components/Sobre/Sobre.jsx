import { motion } from 'framer-motion';
import './Sobre.css';

const Sobre = () => {
  return (
    <motion.section
      className="sobre"
      id="sobre"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <h2>Sobre Mim</h2>
      <p>
        Meu nome é Zara Maciel, tenho 23 anos e estudo Sistemas para Internet. 
        Tenho interesse em ciência de dados e web design, e estou sempre buscando 
        melhorar minhas habilidades e criar projetos que unem criatividade e funcionalidade.
      </p>
    </motion.section>
  );
};

export default Sobre;
