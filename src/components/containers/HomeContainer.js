import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
//import WebBar from './../MaterialElements/WebBar';
import {Button} from '@material-ui/core';
import AppFrame from '../AppFrame';
//import Portfolio from '../PageComponent/Portfolio';
//import Typography from '@material-ui/core/Typography';
//import LoremIpsum from 'react-lorem-ipsum';
import Home from '../views/Home';
import EnterpriseValue from '../views/EnterpriseValue';
//import WebActions from '../WebActions';
import FrontPage from './../MaterialComponents/FrontPage';
import WebBar from '../MaterialComponents/WebBar';

import fachada from './../../img/fachadasism2.jpg'

class HomeContainer extends Component {

    handleOnClickHome = () =>{
        console.log(`/home`)
        this.props.history.push('/')
    };

    handleOnClickAbout = () =>{
        console.log(`/quienessomos`);
        this.props.history.push('/quienessomos')
};

    handleOnClickPortFolio = () =>{
        console.log(`/portafolio`)
        this.props.history.push('/portafolio')
    };

    handleOnClickContact = () =>{
        console.log(`/contacto`)
        this.props.history.push('/contacto')
    };

    
    render() {
        return (
            <div>
                <AppFrame 
                
                header ={<FrontPage imagen={fachada}/>}
                bar={
                    <div>
                        <WebBar>
                        <Button color="inherit" onClick={this.handleOnClickHome}>Inicio</Button>
                        <Button color="inherit" onClick={this.handleOnClickAbout}>¿Quienes somos?</Button>
                        <Button color="inherit" onClick={this.handleOnClickPortFolio}>Portafolio</Button>
                        <Button color="inherit" onClick={this.handleOnClickContact}>Contacto</Button>
                        </WebBar>
                    </div>
                }
                body={
                    <div>
                        <EnterpriseValue/>
                        <Home/>
                    </div>
                } />
            </div>
        );
    }
}

export default withRouter(HomeContainer);