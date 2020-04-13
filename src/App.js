import React, { Component } from 'react';
import FooterPage from './components/MaterialComponents/FooterPage';
import ButtonAppBar from './components/MaterialComponents/ButtonAppBar';
import './App.css';
import ContComponent from './components/PageComponent/ContComponent'

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
          <FooterPage description={"abc"} title={"SISM"}></FooterPage>
    </div>
  )
  };

  
}

export default App;
