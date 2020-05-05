import React from 'react';

import {BrowserRouter as Router, Route}  from 'react-router-dom';

import Home from './Home';
import AboutUs from './AboutUs';
import Portfolio from './Portfolio';
import Contact from './Contact/index';



const ContComponent = () => {

    const renderHome =() =><Home></Home>;
    const renderAboutUs =()=><AboutUs></AboutUs>;
    const renderPortfolio =() =><Portfolio></Portfolio>;
    const renderContact = () => <Contact></Contact>;
    
    return (
        <div>
            <Router>
            <div>
                <Route exact path="/" component={renderHome}></Route>
                <Route exact path="/quienessomos" component={renderAboutUs}></Route>
                <Route exact path="/portafolio" component={renderPortfolio}></Route>
                <Route exact path="/contacto" component={renderContact}></Route>
            </div>
            </Router>
        </div>
    );
};


export default ContComponent;