// Packages
import React from 'react';

// Views
import CloseButton from './CloseButton';

// Styles
import '../../assets/css/common.css';

const TopBar = (props) => {
    return(
        <div id="draggable-window-topbar">
            <div id="draggable-window-title">{ props.title }</div>
            { props.withButton
                ? <CloseButton toggleWindow={ props.toggleWindow } />
                : null
            }
            <div className="line-light"></div>
        </div>
    )
}

export default TopBar;
