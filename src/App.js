import React, { Component } from 'react';
// eslint-disable-next-line
import FooterPage from './components/MaterialComponents/FooterPage';
import ButtonAppBar from './components/MaterialComponents/ButtonAppBar';
import './App.css';
import ContComponent from './components/PageComponent/ContComponent'
import AppFooter from './components/MaterialComponents/AppFooter';

class App extends Component {

  initialInfo = 1;

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
          <ButtonAppBar></ButtonAppBar>
          <ContComponent></ContComponent>
          <AppFooter></AppFooter>
    </div>
  )
  };

  
}

export default App;
