// Packages
import React, { Component } from 'react';

// Views
import Draggable from '../../Draggable';
import TopBar from './TopBar';
import CloseButton from './CloseButton';

// Consts
import {
    WINDOW_CUSTOM,
    WINDOW_DEFAULT,
    WINDOW_DEFAULT_WITH_BUTTON,
    WINDOW_DRAGGABLE_TOPBAR,
    WINDOW_DRAGGABLE_TOPBAR_WITH_BUTTON
} from '../../index';

// Style
import '../../style/window.css';

class Window extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showWindow: true
        };
    }

    toggleWindow = event => {
        event.preventDefault();

        this.setState(prevState => ({
            showWindow: !prevState.showWindow
        }));
    }

    render = () => {
        const { type, title, id, style, className, initPos, overlay } = this.props;
        const { showWindow } = this.state;

        // Get child components.
        const children = React.Children.only(this.props.children);
        const childrenClassName = children.props.className || '';

        return (
            <div>
                {(() => {
                    switch(type) {
                        case WINDOW_CUSTOM:
                            return(
                                <Draggable id={ id } style = { style } className={ className ? className : "draggable-window" }
                                    initPos={ initPos } overlay={ overlay }>
                                    { React.cloneElement(children, {
                                        className: childrenClassName
                                    })}
                                </Draggable>
                            );
                        case WINDOW_DEFAULT:
                            return(
                                <Draggable id="default-window" style = { style } className="draggable-window" initPos={ initPos }>
                                    { React.cloneElement(children, {
                                        className: childrenClassName
                                    })}
                                </Draggable>
                            );
                        case WINDOW_DEFAULT_WITH_BUTTON:
                            return(
                                showWindow
                                    ? <Draggable id="default-window" style = { style } className="draggable-window" initPos={ initPos }>
                                        <div>
                                            <CloseButton toggleWindow={ this.toggleWindow } />
                                            { React.cloneElement(children, {
                                                className: childrenClassName
                                            })}
                                        </div>
                                      </Draggable>
                                    : null
                            );
                        case WINDOW_DRAGGABLE_TOPBAR:
                            return(
                                <Draggable id="default-window" style = { style } className="draggable-window" initPos={ initPos }
                                    overlay={ <TopBar title={ title ? title : "Title"} /> }>
                                    { React.cloneElement(children, {
                                        className: childrenClassName
                                    })}
                                </Draggable>
                            );
                        case WINDOW_DRAGGABLE_TOPBAR_WITH_BUTTON:
                            return(
                                showWindow
                                    ? <Draggable id="default-window" style = { style } className="draggable-window" initPos={ initPos }
                                        overlay={ <TopBar toggleWindow={ this.toggleWindow } title={ title ? title : "Title"} withButton /> }>
                                        { React.cloneElement(children, {
                                            className: childrenClassName
                                        })}
                                      </Draggable>
                                    : null
                            );
                    }
                })()}  
            </div>
        );
    }
}

export default Window;
