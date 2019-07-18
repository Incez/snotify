// Packages
import React, { Component } from 'react';

// Views
import Window from './View/Window';
import Footer from './View/Footer';

// Style
import 'bootstrap/dist/css/bootstrap.css';
import '../style/main.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showWindow: true
        };
    }

    /* Toggle modal window (onClick event).
    */
    toggleWindow = event => {
        event.preventDefault();

        this.setState(prevState => ({
            showWindow: !prevState.showWindow
        }));
    }

    render = () => {
        const { showWindow } = this.state;

        return (
            <div>
                <button className="btn btn-primary" onClick={ event => this.toggleWindow(event) } id="open-modal-btn">Open modal window</button>
                { showWindow
                    ? <Window toggleWindow={ this.toggleWindow } />
                    : null
                }
                <Footer />
            </div>
        )
    };
}

export default App;