// src/components/Sobre/Sobre.jsx
import React from 'react';
import './Sobre.css';

const Sobre = () => (
  <section className="sobre" id="sobre">
    <h2>Sobre Mim</h2>
    <div className="sobre-grid">
      <div className="sobre-card">
        <p>
          Olá! Meu nome é <strong>Rodrigo Maciel</strong>, tenho 23 anos e estudo 
          <strong> Sistemas para Internet</strong>. Sou apaixonado por tecnologia e 
          sempre busco aprender coisas novas para aplicar em projetos reais.
        </p>
      </div>
      <div className="sobre-card">
        <p>
          Tenho experiência em <strong>HTML, CSS, JavaScript e React</strong> e estou 
          ampliando meus conhecimentos em <strong>Python, SQL e Ciência de Dados</strong>. 
          Meu objetivo é criar projetos modernos, funcionais e que tragam resultados reais.
        </p>
      </div>
      <div className="sobre-card">
        <p>
          Gosto de criar interfaces limpas e interativas, sempre pensando na experiência 
          do usuário. Também busco explorar dados para gerar insights que façam diferença 
          em projetos reais.
        </p>
      </div>
    </div>
  </section>
);

export default Sobre;
