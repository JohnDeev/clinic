import React from 'react';
import PropTypes from 'prop-types';

const WebActions = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};

WebActions.propTypes = {
    children: PropTypes.node.isRequired,
};

export default WebActions;