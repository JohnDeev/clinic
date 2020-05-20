import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
//import WebBar from './../MaterialElements/WebBar';
import {Button} from '@material-ui/core';
import AppFrame from '../AppFrame';
//import Portfolio from '../PageComponent/Portfolio';
//import Typography from '@material-ui/core/Typography';
//import LoremIpsum from 'react-lorem-ipsum';
import Home from '../PageComponent/Home';
//import WebActions from '../WebActions';
import WebBar from './../MaterialElements/WebBar';

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
                <AppFrame header = 'SISM'
                bar={
                    <div>
                        <WebBar>
                        <Button color="inherit" onClick={this.handleOnClickHome}>Inicio</Button>
                        <Button color="inherit" onClick={this.handleOnClickAbout}>Quienes somos</Button>
                        <Button color="inherit" onClick={this.handleOnClickPortFolio}>Portafolio</Button>
                        <Button color="inherit" onClick={this.handleOnClickContact}>Contacto</Button>
                        </WebBar>
                        {/* <WebActions>
                        <Button onClick={this.handleOnClick}>Inivio</Button>
                        <Button onClick={this.handleOnClick}>Quienes somos</Button>
                        <Button onClick={this.handleOnClick}>Portafolio</Button>
                        <Button onClick={this.handleOnClick}>Contacto</Button>
                        </WebActions> */}
                    </div>
                }
                body={
                    <div>
                        <Home></Home>
                    </div>
                } />
            </div>
        );
    }
}
/* 
HomeContainer.propTypes = {

}; */

export default withRouter(HomeContainer);