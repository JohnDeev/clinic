import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import 'react-chat-widget/lib/styles.css';
import HomeContainer from './components/containers/HomeContainer';
import AboutContainer from './components/containers/AboutContainer';
import PortfolioContainer from './components/containers/PortfolioContainer';
import ContactContainer from './components/containers/ContactContainer';
import {AnimatedSwitch, spring} from 'react-router-transition';



class App extends Component {

  renderHome =()=> <HomeContainer/>;

  renderAbout =()=><AboutContainer/>;

  renderPortfolio =()=><PortfolioContainer />;

  renderContact =()=><ContactContainer/>;
  
  glide(val) {
    return spring(val, {
      stiffness: 174,
      damping: 24,
    });
  }
  

  render() {
    console.log("render");
    return (
      <Router>
        <AnimatedSwitch 
        atEnter={{offset:100}}
        atLeave={{offset: this.glide(-100)}}
        atActive={{offset:this.glide(0)}}
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
