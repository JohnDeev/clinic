import React from 'react';
import PropTypes from 'prop-types';
//import { holaMundo } from '../const/constInfo';
import Home from './Home';
import AboutUs from './AboutUs';
import Portfolio from './Portfolio';

const Information = (props) =>{
    const codeInfo = props.codeInfo;
    switch (codeInfo) {
        case 1:
            return(
                <Home></Home>
            );
        case 2:
            return(
                <AboutUs></AboutUs>
            );
        case 3:
            return(
                <Portfolio></Portfolio>
            );    
        default:
            break;
    }
}

Information.protTypes ={
    codeInfo: PropTypes.number.isRequired,
}

export default Information;