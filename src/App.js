
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importing BrowserRouter, Routes, and Route 
// write Router if not used
import './static/scss/app.scss';

import Header from './Components/header';
import Footer from './Components/footer';
import LandingPage from './Components/landingPage';
import GettingStarted from './Components/gettingStarted';
import Login from './Components/login';
import Register from './Components/register';
import AboutUs from './Components/aboutUs';
import Contacts from './Components/contact';
import Education from './Components/education';
import Finalize from  './Components/pageFinalize';

function App() {
  return (
   
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/getting-started" element={<GettingStarted />} />
          <Route path="/resume-templates" element={<GettingStarted />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/finalize" element={<Finalize />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
