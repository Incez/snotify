// Packages
import React from 'react';

const WindowTitle = (props) => {
    return (
        <div id="draggable-window-top">
            <div id="draggable-window-title">Draggable window</div>
            <button
                type="button"
                id="draggable-window-close-btn"
                className="btn btn default"
                onClick={ event => props.toggleWindow(event) }>
                <i className="fas fa-times"></i>
            </button>
            <div className="line-light"></div>
        </div>   
    )
}

export default WindowTitle;