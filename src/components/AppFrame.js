import React from 'react';
import PropTypes from 'prop-types';
import AppFooter from './MaterialComponents/AppFooter';
import 'react-chat-widget/lib/styles.css';




const AppFrame = ({ header, bar, body }) => {
    return (
        <div>
            <div>
                {bar}
            </div>
            <div>
                {header}
            </div>
            <div>
                {body}
            </div>
            <div >
            <AppFooter />
            </div>
            
        </div>
    );
};

AppFrame.propTypes = {
    header: PropTypes.element.isRequired,
    bar: PropTypes.element.isRequired,
    body: PropTypes.element.isRequired,
};

export default AppFrame;