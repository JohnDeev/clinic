import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import 'react-chat-widget/lib/styles.css';
import HomeContainer from './components/containers/HomeContainer';
import AboutContainer from './components/containers/AboutContainer';
import PortfolioContainer from './components/containers/PortfolioContainer';
import ContactContainer from './components/containers/ContactContainer';
import {AnimatedSwitch} from 'react-router-transition';

class App extends Component {

  renderHome =()=> <HomeContainer/>;

  renderAbout =()=><AboutContainer/>;

  renderPortfolio =()=><PortfolioContainer />;

  renderContact =()=><ContactContainer/>;




  render() {
    console.log("render");
    return (
      <Router>
        <AnimatedSwitch 
        atEnter={{opacity:0}}
        atLeave={{opacity:0}}
        atActive={{opacity:1}}
        className="App">
        <Route exact path="/" component={this.renderHome}></Route>
        <Route exact path="/quienessomos" component={this.renderAbout}></Route>
        <Route exact path="/portafolio" component={this.renderPortfolio}></Route>
        <Route exact path="/contacto" component={this.renderContact}></Route>
        </AnimatedSwitch>
      </Router>
    )
  };
}
export default App;
