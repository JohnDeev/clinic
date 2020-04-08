import React, { Component } from 'react';
import LoremIpsum from 'react-lorem-ipsum';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class AboutUs extends Component {
    render() {
        return (
            <React.Fragment>
            <CssBaseline />
            <Container >
              <Typography component="div" style={{ textAlign:'justify'  }}>
              <div>
                <h2>Misión</h2>
                <LoremIpsum p={1}/>
                <h2>Visión</h2>
                <LoremIpsum p={1}/>
                <h2>Políticas</h2>
                <LoremIpsum p={2}/>
                <h2>Valores Corporativos</h2>
                <LoremIpsum p={2}/>
                <h2>Principios Corporativos</h2>
                <LoremIpsum p={2}/>
            </div>
              </Typography>
            </Container>
            </React.Fragment> 

            
            
        );
    }
}

export default AboutUs;