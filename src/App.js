import React from 'react';
//import logo from './logo.svg';


import FooterPage from './components/MaterialComponents/FooterPage';
import ButtonAppBar from './components/MaterialComponents/ButtonAppBar';

import './App.css';

function App() {

  return (
    <div className="App">
          <ButtonAppBar></ButtonAppBar>
          
          <FooterPage></FooterPage>
    </div>
  );
}

export default App;
