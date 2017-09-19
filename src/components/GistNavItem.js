import React, { Component } from 'react';

import './GistNavItem.css';

export default class GistNavItem extends Component {
    constructor() {
        super();
        this.state = {
            selected: false,
            hover: false
        }
        this.handleHover = this.handleHover.bind(this);
    }

    handleHover() {
        if (this.state.hover == false) {
            this.setState({
                hover: true
            });
        } else {
            this.setState({
                hover: false  
            });
        }
    }

    render() {        
        return (
            <div className={"GistNavItemInstance " + (this.state.hover ? "hover" : "")} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>{this.props.gistData.description}</div>
        );
    }
}
          
