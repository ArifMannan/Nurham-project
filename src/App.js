import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/AboutPage/About';
import BlogDetails from './component/BlogPage/BlogDetails/BlogDetails';
import BlogPage from './component/BlogPage/BlogPage';
import Contact from './component/Contact/Contact';
import FaqPage from './component/FaqPage/FaqPage';
import FooterPage from './component/FooterPage/FooterPage';
import Header from './component/Header/Header';
import PrivacyPolicyPage from './component/PrivacyPolicyPage/PrivacyPolicyPage';
import ServiceDetails from './component/ServicePage/ServiceDetails/ServiceDetails';
import ServicePage from './component/ServicePage/ServicePage';
import TeamDetails from './component/TeamPage/TeamDetails/TeamDetails';
import TeamPage from './component/TeamPage/TeamPage';
import Home from './component/homePage/Home';
import mainMenu from './mainMenu';


function App() {
  useEffect(() => {
    mainMenu();
  
  }, []);
  return (
    <>
      <Header />
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blogdetails" element={<BlogDetails />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/teamdetails" element={<TeamDetails />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/servicedetails" element={<ServiceDetails />} />
        </Routes>
    
      <FooterPage/>
    </>
  );
}

export default App;
