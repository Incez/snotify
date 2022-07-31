// Packages
import React from 'react';

const CloseButton = (props) => {
    return (
        <button type="button" className="btn btn-primary draggable-window-close-btn"
            onClick={ event => props.toggleWindow(event) }>
            <i className="fas fa-times"></i>
        </button>
    );
}

export default CloseButton;
