import React from 'react';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import DestinationSearch from './Components/DestinationSearch';
import DestinationPage from './Components/DestinationPage';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';

const App = () => {

  return (
    <Router>
      <Header/>
    <Routes>
  
      <Route path="/" element={<HeroSection />} />
      <Route path="DestinationSearch" element={<DestinationSearch />} />
      <Route path="DestinationPage" element={<DestinationPage />} />
    </Routes>
    <Footer/>
  </Router>
  );
};

export default App;
