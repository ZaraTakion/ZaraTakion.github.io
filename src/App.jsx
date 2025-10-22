<<<<<<< HEAD
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Projetos from './pages/Projetos'
import Contato from './pages/Contato'

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sobre' element={<Sobre />} />
      <Route path='/projetos' element={<Projetos />} />
      <Route path='/contato' element={<Contato />} />
    </Routes>
    <Footer />
  </>
)

export default App
=======
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

