import React, { Component } from 'react';

import './SingleGistNavigationEntry.css';

export default class SingleGistNavigationEntry extends Component {
    constructor() {
        super();

        this.state = {
            isActive: false
        }
    }

    componentDidMount() {
        console.log(this.props, this)
    }

    render() {
        return (
            <div className="gistNavigationItem">
                {this.props.gistInformation.description}
            </div>
        );
    }
}
