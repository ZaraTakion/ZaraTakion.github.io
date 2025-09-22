import React from 'react';
import profile_img from '../../assets/profile_img.png';
import './Hero.css';

const Hero = () => (
  <section className="hero" id="home">
    <img src={profile_img} alt="Zara Maciel" className="hero-img"/>
    <h1>Olá, eu sou Rodrigo Maciel</h1>
    <p>Desenvolvedor Frontend e Backend | Cientista de Dados</p>
    <div className="hero-actions">
      <a href="/curriculo.pdf" target="_blank" rel="noopener noreferrer">Currículo</a>
      <a href="#contato">Entre em Contato</a>
      <a href="#portfolio">Projetos</a>
    </div>
  </section>
);

export default Hero;
