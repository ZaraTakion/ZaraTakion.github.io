// src/components/Hero/Hero.jsx
import React from 'react';
import profile_img from '../../assets/profile_img.png';
import './Hero.css';

const Hero = () => (
  <section className="hero" id="home">
    <div className="hero-container">
      <img src={profile_img} alt="Rodrigo Maciel" className="hero-img" />
      <h1>Olá, eu sou <span className="highlight">Rodrigo Maciel</span></h1>
      <p>Desenvolvedor Frontend & Backend | Cientista de Dados</p>

      <div className="hero-actions">
        <a href="/curriculo.pdf" target="_blank" rel="noopener noreferrer"> Currículo</a>
        <a href="#contato"> Contato</a>
        <a href="#portfolio"> Projetos</a>
      </div>
    </div>
  </section>
);

export default Hero;
