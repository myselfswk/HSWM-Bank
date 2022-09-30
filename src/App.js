import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/pages/HomePage/Home';
import Services from './components/pages/Services/Services';
import Products from './components/pages/Products/Products';
import SignIn from './components/pages/SignUp/SignIn';
import SignUp from './components/pages/SignUp/SignUp';
import AdminPanel from './components/pages/Admin/Admin';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer.js/Footer';
import Chatbot from './components/Chatbot';
import Testimonial from './components/pages/Testimonial/Testimonial';
import BankSlider from './components/BankSlider';
import FaqPage from './components/pages/FAQ/Faq';
import ContactUs from './components/pages/ContactUs/ContactUs';
import Career from './components/pages/Career/Career';
import TermOfServices from './components/pages/TermOfServices/TermOfServices';
import DataAnalytics from './components/pages/DataAnalytics/DataAnalytics';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <BankSlider />
        <Chatbot />
        <Routes >
          <Route path='/' exact element={< Home />} />
          <Route path='/services' element={< Services />} />
          <Route path='/products' element={< Products />} />
          <Route path='/sign-up' element={< SignIn />} />
          <Route path='/signup-form' element={< SignUp />} />
          <Route path='/admin' element={< AdminPanel />} />
          <Route path='/testimonial' element={< Testimonial />} />
          <Route path='/faq' element={<FaqPage />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/career' element={<Career />} />
          <Route path='/termofservices' element={<TermOfServices />} />
          <Route path='/dataanalytics' element={<DataAnalytics />} />
        </Routes >
        <Footer />
      </Router>
    </>
  );
}

export default App;