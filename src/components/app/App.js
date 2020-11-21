import React from 'react';
import './App.css';
import Header from '../header/Header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../../pages/home/Home';
import About from '../../pages/about/About';
import Contact from '../../pages/contact/Contact';
import Portfolio from '../../pages/portfolio/Portfolio';


function App() {
  return (
    <>
    <Router>
       <Header fixed='top' color='white'/>
              <Switch>
                    <Route exact path='/'
                        component={Home}/>
                    <Route exact path='/about'
                        component={About}/>
                    <Route exact path='/contact'
                        component={Contact}/>
                    <Route exact path='/portfolio'
                        component={Portfolio}/>
                </Switch>
    </Router>
    </>
  );
}

export default App;
