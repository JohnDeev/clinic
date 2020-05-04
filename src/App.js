import React, { Component } from 'react';
/* import ButtonAppBar from './components/MaterialComponents/ButtonAppBar';
import ContComponent from './components/PageComponent/ContComponent'
import AppFooter from './components/MaterialComponents/AppFooter'; */
import Principal from './components/PageComponent/Principal';
import './App.css';
import { Widget } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';

class App extends Component {

  constructor(){
    super()
    console.log("Constructor");
  }
  componentDidMount() {
     console.log("Primera cargada")
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Actualizado");
  }
  render(){
    console.log("render");
    return (
    <div className="App">
          <Principal></Principal>
          <Widget></Widget>
    </div>
  )
  };  
}
export default App;
