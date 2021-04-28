import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Szoftverek from './components/pages/Szoftverek';
import Szolgaltatasok from './components/pages/Szolgaltatasok';
import Kapcsolat from './components/pages/Kapcsolat';
import Rolunk from './components/pages/Rolunk';
import Footer from './components/Footer';
//import CookieConsent, { Cookies, getCookieConsentValue } from "react-cookie-consent";
import NotFound from './components/pages/NotFound';
import Cookies from './components/Cookies';
import AdatkezelesiTajekoztato from './components/pages/AdatkezelesiTajekoztato';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Szoftverek' component={Szoftverek} />
          <Route path='/Szolgaltatasok' component={Szolgaltatasok} />
          <Route path='/Rolunk' component={Rolunk} />
          <Route path='/Kapcsolat' component={Kapcsolat} />
          <Route path='/Adatkezelesi_tajekoztato' component={AdatkezelesiTajekoztato} />
          <Route component={ NotFound } />

        </Switch>
        <Footer />
         <Cookies />
      </Router>
       
    </>
  );
}


export default App;
