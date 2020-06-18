import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {Button, List, ListItem} from '@material-ui/core';
import AppFrame from '../AppFrame';
//import WebActions from '../WebActions';
import FrontPage from './../MaterialComponents/FrontPage';
import WebBar from '../MaterialComponents/WebBar';

import fachada from './../../img/fachadasism2.jpg'
import BodyIndex from '../views/BodyIndex';

import EnterpriseValue from './../views/EnterpriseValue';
import Home from './../views/Home';

import ListItemText from '@material-ui/core/ListItemText';


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
                                <List>
                                    <ListItem button>
                                    <ListItemText primary="Inicio" />
                                    </ListItem>
                                </List>
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
                                <EnterpriseValue/>
                                <Home/>
                            </div>
                        }/>
                    </div>
                } />
            </div>
        );
    }

}

export default withRouter(HomeContainer);