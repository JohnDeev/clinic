import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, ListItem, ListItemText } from '@material-ui/core';
import AppFrame from '../AppFrame';
//import WebActions from '../WebActions';
import FrontPage from './../MaterialComponents/FrontPage';
import WebBar from '../MaterialComponents/WebBar';

import fachada from './../../img/fachadasism2.jpg'
import BodyIndex from '../views/BodyIndex';

import EnterpriseValue from './../views/EnterpriseValue';
import Home from './../views/Home';




class HomeContainer extends Component {

    handleOnClickHome = () => {
        console.log(`/home`)
        this.props.history.push('/')
    };

    handleOnClickAbout = () => {
        console.log(`/quienessomos`);
        this.props.history.push('/quienessomos')
    };

    handleOnClickPortFolio = () => {
        console.log(`/portafolio`)
        this.props.history.push('/portafolio')
    };

    handleOnClickContact = () => {
        console.log(`/contacto`)
        this.props.history.push('/contacto')
    };
    handleOnClickCitas =() =>{
        const win = window.open('https://api.whatsapp.com/send?phone=+573105438731&text= Buenas,%20deseo%20apartar%20una%20cita%20médica.', '_blank');
        win.focus();
    };


    render() {
        return (
            <div>
                <AppFrame

                    header={<FrontPage imagen={fachada} />}
                    bar={
                        <div>
                            <WebBar botones={
                                <div>
                                    <Button color="inherit" onClick={this.handleOnClickHome}>Inicio</Button>
                                    <Button color="inherit" onClick={this.handleOnClickAbout}>¿Quienes somos?</Button>
                                    <Button color="inherit" onClick={this.handleOnClickPortFolio}>Nuestros servicios</Button>
                                    <Button color="inherit" onClick={this.handleOnClickContact}>Contacto</Button>
                                    <Button variant="outlined" style={{
                                        borderColor: "#FFF", color: "#FFF"
                                    }} onClick={this.handleOnClickCitas}>Apartar cita</Button>
                                </div>
                            }

                                enlaces={
                                    <div>

                                        {[{ name: 'Inicio', accion: this.handleOnClickHome },
                                        { name: '¿Quienes somos?', accion: this.handleOnClickAbout },
                                        { name: 'Nuestros servicios', accion: this.handleOnClickPortFolio },
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
                            <BodyIndex contenido={
                                <div>
                                    <Home />
                                    <EnterpriseValue />
                                </div>
                            } />
                        </div>
                    } />
            </div>
        );
    }

}

export default withRouter(HomeContainer);