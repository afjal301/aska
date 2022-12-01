import './App.css';
import Footer from './pages/footer';
import Header from './pages/header';
import Home from './pages/Home';
import Section from './pages/section';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Formation from './pages/formation';
//import Logo from './pages/logo';

function App() {
  return <>
      
      <BrowserRouter>
      
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/formation' element={<Formation/>}/>
        </Routes>
      </BrowserRouter>
      
       
  </>
    
}

export default App;
