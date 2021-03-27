import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Szolgaltatasok from './components/pages/Szolgaltatasok';
import Termekek from './components/pages/Termekek';
import Kapcsolat from './components/pages/Kapcsolat';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/szolgaltatasok' component={Szolgaltatasok} />
          <Route path='/termekek' component={Termekek} />
          <Route path='/kapcsolat' component={Kapcsolat} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
