import React, { Component } from 'react';
import axios from 'axios';

import './GistNavItem.css';

export default class GistNavItem extends Component {
    constructor() {
        super();
        this.state = {
            selected: false
        }
    }

    render() {
    return (
        <div className={"GistNavItemInstance " + (this.state.selected ? "selected" : "")}>{this.props.gistData.description}</div>
    );
  }
}
          
