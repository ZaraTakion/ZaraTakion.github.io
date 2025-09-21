import React from 'react';
import Navbar from './Components/Navbar/Navbar.jsx';
import Hero from './Components/Hero/Hero.jsx';
import Contato from './Components/Contato/Contato.jsx';
import Portfolio from './Components/Portfolio/Portfolio.jsx';
import Sobre from './Components/Sobre/Sobre.jsx';
import './index.css';

const App = () => (
  <div>
    <Navbar />
    <Hero />
    <Sobre />
    <Portfolio />
    <Contato />
  </div>
);

export default App;
