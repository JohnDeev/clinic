import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { withRouter} from 'react-router-dom';
//import WebBar from './../MaterialElements/WebBar';
import {Button} from '@material-ui/core';
import AppFrame from '../AppFrame';
import Portfolio from '../views/Portfolio';
//import Typography from '@material-ui/core/Typography';
//import LoremIpsum from 'react-lorem-ipsum';
import WebBar from '../MaterialComponents/WebBar';
import ImageBanner from '../MaterialComponents/ImageBanner';

import enfermeria from './../../img/portfolioImg/enfermeria.jpg';

class PortfolioContainer extends Component {

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
                
                header = {<ImageBanner titulo="Nuestros servicios" imagen={enfermeria} />}
                bar={
                    <div>
                        <WebBar botones={
                            <div>
                                <Button color="inherit" onClick={this.handleOnClickHome}>Inicio</Button>
                        <Button color="inherit" onClick={this.handleOnClickAbout}>¿Quienes somos?</Button>
                        <Button color="inherit" onClick={this.handleOnClickPortFolio}>Portafolio</Button>
                        <Button color="inherit" onClick={this.handleOnClickContact}>Contacto</Button>
                            </div>
                        }
                        
                        enlaces={
                            <div>
                                
                            </div>
                        }

                        >
                        
                        </WebBar>
                    </div>
                }
                body={
                    <div>
                        <Portfolio />
                    </div>
                } />
            </div>
        );
    }
}

export default withRouter(PortfolioContainer);