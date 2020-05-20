import React from 'react';
import PropTypes from 'prop-types';
import ImageBanner from './MaterialComponents/ImageBanner';
import AppFooter from './MaterialComponents/AppFooter';
//import WebBar from './MaterialElements/WebBar';
//import AppHeader from './AppHeader';
import 'react-chat-widget/lib/styles.css';

const AppFrame = ({header, bar, body}) => {
    return (
        <div>
            
            <div>
            <div>{bar}</div>
            
            <ImageBanner titulo={header} />
            <div>{body}</div>
            </div>
            <AppFooter />          
        </div>
    );
};

AppFrame.propTypes = {
    header: PropTypes.string.isRequired,
    bar: PropTypes.element.isRequired,
    body: PropTypes.element.isRequired,
};

export default AppFrame;