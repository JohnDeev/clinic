import React, { Component } from 'react';
import ButtonAppBar from './components/MaterialComponents/ButtonAppBar';
import ContComponent from './components/PageComponent/ContComponent'
import AppFooter from './components/MaterialComponents/AppFooter';
import './App.css';

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
          <ButtonAppBar ></ButtonAppBar>
          <ContComponent></ContComponent>
          <AppFooter></AppFooter>
    </div>
  )
  };  
}
export default App;
