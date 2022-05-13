import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Magasins from './pages/Magasins';
import Contact from './pages/Contact';
import Boutique from './pages/Boutique';
import './styles/Footer.scss';

function Footer() {
  return (
    <div className="footer">
        <h2>SHOE LA LA </h2>
        <div class="trait_dessus"><hr></hr></div> 
        <button>Mentions legales</button>
        <button>Contact</button>
        <div className="footint" >
           <p> suivez nous:</p>
           <ul>
           <li><i class="fa-brands fa-twitter fa-2x"></i></li>
           <li><i class="fa-brands fa-instagram fa-2x"></i></li>
           <li><i class="fa-brands fa-facebook fa-2x"></i></li>
           </ul>
        </div>
    </div>
  );
}

export default Footer;
