import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
//import {createStore} from 'redux';
import 'react-chat-widget/lib/styles.css';
import HomeContainer from './components/containers/HomeContainer';
import AboutContainer from './components/containers/AboutContainer';
import PortfolioContainer from './components/containers/PortfolioContainer';
import ContactContainer from './components/containers/ContactContainer';
// eslint-disable-next-line
import {AnimatedSwitch} from 'react-router-transition';

import { Widget } from 'react-chat-widget';


class App extends Component {

  renderHome =()=> <HomeContainer/>;

  renderAbout =()=><AboutContainer/>;

  renderPortfolio =()=><PortfolioContainer />;

  renderContact =()=><ContactContainer/>;




  render() {
    console.log("render");
    return (
      <Router>
        <div className="App">
        {/* <AnimatedSwitch 
        atEnter={{opacity:0}}
        atLeave={{opacity:0}}
        atActive={{opacity:1}}
        className="App"> */}
        <Route exact path="/" component={this.renderHome}></Route>
        <Route exact path="/quienessomos" component={this.renderAbout}></Route>
        <Route exact path="/portafolio" component={this.renderPortfolio}></Route>
        <Route exact path="/contacto" component={this.renderContact}></Route>
        {/* </AnimatedSwitch> */}
        <Widget />
        </div>
      </Router>
    )
  };
}
export default App;
