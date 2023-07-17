import Header from './components/Header'
import About from './pages/About';
import Home from './pages/Home';
import { HashRouter as Router, Routes, Route, } from "react-router-dom";
import Work from './pages/Work';
import Services from './pages/Services';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/work' element={<Work />} />
        <Route path='/services' element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;
