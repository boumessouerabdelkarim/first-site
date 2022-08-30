
import './App.css';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Accuiel from './pages/Accuiel';
import Contact from './pages/Contact';
import Peinture_exterieur from './pages/Peinture_exterieur';
import Peinture_interieur from './pages/Peinture_interieur';
import Referances from './pages/Referances';
import Revetements_sol from './pages/Revetements_sol';
import Services from './pages/Services';
import Etancheite from './pages/Etancheite';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <div className="container">
      <Routes>
        <Route path="/" element={ <Accuiel/>} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Referances" element={<Referances />} />
        <Route path="/services/Peinture_interieur" element={<Peinture_interieur />} />
        <Route path="/services/Peinture_exterieur" element={<Peinture_exterieur />} />
        <Route path="/services/Revetements_sol" element={<Revetements_sol />} />
        <Route path="/services/Etancheite" element={<Etancheite />} />

      
      </Routes>
      </div>
    
    </div>
  );
}

export default App;
