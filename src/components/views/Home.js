import React, { Component } from 'react';
//import LoremIpsum from 'react-lorem-ipsum';
//import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
//import FrontPage from './../MaterialComponents/FrontPage';
import { 
    quees} from './../../const/infos';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
            <CssBaseline />
            <Container>
              <Typography component="div" style={{ textAlign:'justify', paddingTop: 30 }}>
                  {quees}
              </Typography>
            </Container>
            </React.Fragment>            
        );
    }
}

/*Home.propTypes = {

};*/

export default Home;