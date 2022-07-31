// Packages
import React, { Component } from 'react';

// Styles
let DraggableStyles = {
    header: {
        cursor: "grab"
    }
}

class Draggable extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            pos: { // Window position.
                x: 0,
                y: 0
            },
            dragging: false, // Is window currently dragging?
            rel: null // Relative position (when onMouseDown event is triggered).
        }

        this.state = this.initialState;
        this.ref = React.createRef();
    }

    componentDidMount = () => {
        // Get initial window position.
        this.initialPos();
    }

    componentDidUpdate = (props, state) => {
        // Add / Remove mouse event listeners.
        if (this.state.dragging && !state.dragging) {
          document.addEventListener('mousemove', this.onMouseMove)
          document.addEventListener('mouseup', this.onMouseUp)
        } else if (!this.state.dragging && state.dragging) {
          document.removeEventListener('mousemove', this.onMouseMove)
          document.removeEventListener('mouseup', this.onMouseUp)
        }
    }

    componentWillUnmount = () => {
        this.setState(this.initialState);
    }

    /* Set initial window position.
     */
    initialPos = () => {
        let x = 0, y = 0;

        let element = document.getElementById(this.props.id);

        // Check if initPos was defined.
        if(!this.props.initPos) {
            if($(window).width() > 768) {
                // Get window width, height (center).
                x = ($(window).width() / 2) - (element.clientWidth / 2)
                y = ($(window).height() / 2) - (element.clientHeight / 2)
            }
        } else {
            x = this.props.initPos.x;
            y = this.props.initPos.y;
        }

        // Set start position.
        this.setState({
            pos: { x, y }
        });
    }

    /* onMouseDown event listener.
     */
    onMouseDown = event => {
        event.stopPropagation();
        event.preventDefault();

        // If mouse click.
        if (event.button !== 0)
            return;

        // Get the size and position of the lement relative to the viewport.
        let pos = this.ref.current.getBoundingClientRect();

        // Update relative postion.
        this.setState({
            dragging: true,
            rel: {
                x: event.pageX - pos.left,
                y: event.pageY - pos.top
            }
        });
    }

    /* onMouseUp event listener.
     */
    onMouseUp = event => {
        event.stopPropagation();
        event.preventDefault();

        // Window is not currently dragging.
        this.setState({ dragging: false });
    }

    /* onMouseMove event listener.
     */
    onMouseMove = event => {
        event.stopPropagation();
        event.preventDefault();

        // If window is not dragging => return
        if (!this.state.dragging)
            return;

        // Update window position.
        this.setState({
            pos: {
                x: event.pageX - this.state.rel.x,
                y: event.pageY - this.state.rel.y
            }
        });
    }

    render = () => {
        // Position styles.
        let posStyle = {
            top: this.state.pos.y + "px",
            left: this.state.pos.x + "px"
        }

        // Props styles.
        if(this.props.style)
            DraggableStyles = {...DraggableStyles, ...posStyle, ...this.props.style}
        else
            DraggableStyles = {...DraggableStyles, ...posStyle};

        // Get child components.
        const children = React.Children.only(this.props.children);
        const className = children.props.className || '';

        // Render Draggable children and given overlay.
        return(
            <div style={ DraggableStyles } id={ this.props.id } className={ this.props.className }
              ref={ this.ref } onMouseDown={ this.props.overlay ? null : this.onMouseDown }>
                { this.props.overlay
                    ? <div style={ DraggableStyles.header } onMouseDown={ this.onMouseDown }>{ this.props.overlay }</div>
                    : null
                }
                { React.cloneElement(children, {
                    className: className
                  })
                }
            </div>
        );
    }
}

export default Draggable;
