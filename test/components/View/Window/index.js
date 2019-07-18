// Packages
import React from 'react';

// Views
import Draggable from '../../../../src/index';
import WindowTitle from './WindowTitle';
import WindowContent from './WindowContent';

// Styles
import '../../../style/window.css';

const Window = (props) => {
    return (
        <Draggable id="draggable-window" overlay={ <WindowTitle toggleWindow={ props.toggleWindow } /> }>   
            <WindowContent />
        </Draggable>
    )
}

export default Window;