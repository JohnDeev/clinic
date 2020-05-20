import React, { Component } from 'react';
/* import ButtonAppBar from './components/MaterialComponents/ButtonAppBar';
import ContComponent from './components/PageComponent/ContComponent'
import AppFooter from './components/MaterialComponents/AppFooter'; */
//import Principal from './components/PageComponent/Principal';
import './App.css';
//import { Widget } from 'react-chat-widget';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import 'react-chat-widget/lib/styles.css';
import HomeContainer from './components/containers/HomeContainer';
import AboutContainer from './components/containers/AboutContainer';
//import HomeContainer from './components/containers/HomeContainer';
import Contact from './components/PageComponent/Contact'

class App extends Component {

  renderHome =()=> <HomeContainer/>;

  renderAbout =()=><AboutContainer/>;

  renderPortfolio =()=><h1>Aca va el portafolio</h1>;

  renderContact =()=><Contact></Contact>;


  render() {
    console.log("render");
    return (
      <Router>
        <div className="App">
        <Route exact path="/" component={this.renderHome}></Route>
        <Route exact path="/quienessomos" component={this.renderAbout}></Route>
        <Route exact path="/portafolio" component={this.renderPortfolio}></Route>
        <Route exact path="/contacto" component={this.renderContact}></Route>
        </div>
      </Router>
    )
  };
}
export default App;
