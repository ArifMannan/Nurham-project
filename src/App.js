import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/AboutPage/About';
import Contact from './component/Contact/Contact';
import Home from './component/homePage/Home';

function App() {
  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/home" element={<Home />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
      </BrowserRouter>
   
    </>
  );
}

export default App;
