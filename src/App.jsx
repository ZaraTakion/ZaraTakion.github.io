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
