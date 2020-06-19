import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';
import { Button, ListItem, ListItemText } from '@material-ui/core';
import AppFrame from '../AppFrame';
import WebBar from '../MaterialComponents/WebBar';
import AboutUs from '../views/AboutUs';
import ImageBanner from '../MaterialComponents/ImageBanner';

import medicinageneral from './../../img/portfolioImg/medicinageneral.jpg';




class AboutContainer extends Component {

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
                
                header = {<ImageBanner titulo="Nuestra empresa" imagen={medicinageneral} />}
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

                                        {[{ name: 'Inicio', accion: this.handleOnClickHome },
                                        { name: '¿Quienes somos?', accion: this.handleOnClickAbout },
                                        { name: 'Portafolio', accion: this.handleOnClickPortFolio },
                                        { name: 'Contacto', accion: this.handleOnClickContact }].map((item, key) => (
                                            <ListItem button key={item.name}>

                                                <ListItemText primary={item.name} onClick={item.accion} />
                                            </ListItem>
                                        ))}

                                    </div>
                        }

                        >
                        
                        </WebBar>
                    </div>
                }
                body={
                    <div>
                        <AboutUs/>
                    </div>
                } />
            </div>
        );
    }
}

export default withRouter(AboutContainer);