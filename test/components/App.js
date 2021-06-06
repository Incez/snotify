// Packages
import React, { Component } from 'react';

// Views
import Footer from './Footer';
import {
    Draggable,
    WINDOW_CUSTOM,
    WINDOW_DEFAULT,
    WINDOW_DEFAULT_WITH_BUTTON,
    WINDOW_DRAGGABLE_TOPBAR,
    WINDOW_DRAGGABLE_TOPBAR_WITH_BUTTON
} from '../../src/Draggable';

// Style
import 'bootstrap/dist/css/bootstrap.css';
import '../style/main.css';

const styles = {
    position: {
        position: "realtive"
    },
    size: {
        width: "300px",
        height: "250px"
    },
    padding: {
        padding: "20px"
    }
}

class App extends Component {
    constructor(props) {
        super(props);
    }

    render = () => {
        /* If you don't specify initPos, the window will appear in the middle of the browser window. 
         */

        return (
            <div>
                <h1 style={styles.padding }>Click and start dragging the window to move it</h1>

                <Draggable type={ WINDOW_DEFAULT } title="Window with topbar"
                    initPos={ { x: 15, y: 100 } } style={ styles.size }>
                    <div className="window-content">Default window</div>
                </Draggable>
                <Draggable type={ WINDOW_DEFAULT_WITH_BUTTON } title="Window with topbar"
                    initPos={ { x: 350, y: 100 } } style={ styles.size }>
                    <div className="window-content">Default window with close button</div>
                </Draggable>
                <Draggable type={ WINDOW_DRAGGABLE_TOPBAR } title="Custom title"
                    initPos={ { x: 685, y: 100 } } style={ styles.size }>
                    <div className="window-content">Window with topbar</div>
                </Draggable>
                <Draggable type={ WINDOW_DRAGGABLE_TOPBAR_WITH_BUTTON } title="Custom title"
                    initPos={ { x: 1020, y: 100 } } style={ styles.size }>
                    <div className="window-content">Window with topbar and close button</div>
                </Draggable>
                <Draggable type={ WINDOW_CUSTOM } title="Custom title" initPos={ { x: 15, y: 380 } }
                    style={ styles.size } className="my-window">
                    <div className="window-content">Custom window</div>
                </Draggable>
                <Footer />
            </div>
        )
    };
}

export default App;