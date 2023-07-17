import Header from './components/Header'
import About from './pages/About';
import Home from './pages/Home';
import { HashRouter as Router, Routes, Route, } from "react-router-dom";
import Work from './pages/Work';
import Services from './pages/Services';
import Footer from './components/Footer';
import Hire from './pages/Hire';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/work' element={<Work />} />
        <Route path='/services' element={<Services />} />
        <Route path='/hire' element={<Hire />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
