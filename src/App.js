import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Magasins from './pages/Magasins';
import Contact from './pages/Contact';
import Boutique from './pages/Boutique';
import './styles/index.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
      <Routes>
      <Route path='/shoelala' element={<Home />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/Magasins' element={<Magasins />} />
      <Route path='/Boutique' element={<Boutique />} />
      </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;
