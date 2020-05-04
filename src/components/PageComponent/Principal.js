import React, { Component } from 'react';
import ButtonAppBar from './../MaterialComponents/ButtonAppBar';
import ContComponent from './../PageComponent/ContComponent'
import AppFooter from './../MaterialComponents/AppFooter';

class Principal extends Component {
    render() {
        return (
            <div>
                <ButtonAppBar ></ButtonAppBar>
          <ContComponent></ContComponent>
          <AppFooter></AppFooter>
            </div>
        );
    }
}

export default Principal;