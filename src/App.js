import React, { Component } from 'react';
import FooterPage from './components/MaterialComponents/FooterPage';
import ButtonAppBar from './components/MaterialComponents/ButtonAppBar';
//import MainPage from './components/MaterialComponents/MainPage';
//import Home from './components/PageComponent/Home';
//import AboutUs from './components/PageComponent/AboutUs';
//import Portfolio from './components/PageComponent/Portfolio';
import Information from './components/PageComponent/Information';
import './App.css';

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

  handleUpdateClick =()=>{
    console.log("click");

  }
  
  render(){
    console.log("render");
    return (
    <div className="App">
          <ButtonAppBar></ButtonAppBar>
          <Information codeInfo={this.initialInfo}></Information>
          <FooterPage description={"abc"} title={"SISM"}></FooterPage>
          <button onClick={this.handleUpdateClick}>Inicio</button>
    </div>
  )
  };

  
}

export default App;
