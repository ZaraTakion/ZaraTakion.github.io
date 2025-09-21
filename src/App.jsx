import React from 'react';
import Navbar from './Components/Navbar.jsx';
import Hero from './Components/Hero.jsx';
import Sobre from './Components/Sobre.jsx';
import Portfolio from './Components/Portfolio.jsx';
import Contato from './Components/Contato.jsx';
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
