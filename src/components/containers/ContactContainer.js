import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';
import {Button} from '@material-ui/core';
import AppFrame from '../AppFrame';
import Contact from '../views/Contact';
import WebBar from '../MaterialComponents/WebBar';
import ImageBanner from '../MaterialComponents/ImageBanner';

import laboratorioclinico from './../../img/portfolioImg/laboratorioclinico.jpg';

class ContactContainer extends Component {

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
                
                header = {<ImageBanner titulo="Contáctenos" imagen={laboratorioclinico}/>}
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
                        <Contact />
                    </div>
                } />
            </div>
        );
    }
}

export default withRouter(ContactContainer);