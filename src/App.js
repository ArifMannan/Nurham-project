import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/AboutPage/About';
import BlogDetails from './component/BlogPage/BlogDetails/BlogDetails';
import BlogPage from './component/BlogPage/BlogPage';
import Contact from './component/Contact/Contact';
import Header from './component/Header/Header';
import Home from './component/homePage/Home';
import { useEffect } from 'react';
import mainMenu from './mainMenu';

function App() {
  useEffect(() => {
    mainMenu();
  }, [])
  return (
    <>
      <Header />
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blogdetails" element={<BlogDetails />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
