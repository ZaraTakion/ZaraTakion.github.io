import React from 'react';
import profile_img from '../../assets/profile_img.png';
import './Hero.css';

const Hero = () => (
  <section className="hero" id="home">
    <img src={profile_img} alt="Zara Maciel" className="hero-img"/>
    <h1>Olá, eu sou Zara Maciel</h1>
    <p>Desenvolvedor Frontend | Apaixonado por Ciência de Dados</p>
    <div className="hero-actions">
      <a href="#contato">Entre em Contato</a>
      <a href="/curriculo.pdf" target="_blank" rel="noopener noreferrer">Currículo</a>
      <a href="#portfolio">Projetos</a>
    </div>
  </section>
);

export default Hero;
