import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/homePage/Home';

function App() {
  return (
    <>
      <BrowserRouter basename="/app">
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/home" element={<Home />} /> 
          {/* <Route path="/about" element={<Home />} />  */}
        </Routes>
      </BrowserRouter>
      <Home></Home>
    </>
  );
}

export default App;
