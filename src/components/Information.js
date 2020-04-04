import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { holaMundo } from '../const/constInfo';

class Information extends Component {
    render() {
        return (
            <div>
               {holaMundo} 
            </div>
        );
    }
}

Information.propTypes = {

};

export default Information;