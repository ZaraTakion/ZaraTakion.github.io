import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Sobre from './Components/Sobre';
import Portfolio from './Components/Portfolio';
import Contato from './Components/Contato';
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
