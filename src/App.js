import './App.css';
import Footer from './components/js/Footer';
import Header from './components/js/Header';
import Navbar from './components/js/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/jsx/Home';
import About from './pages/jsx/About';
import Contact from './pages/jsx/Contact';
import Products from './pages/jsx/Products';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='products' element={<Products/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
