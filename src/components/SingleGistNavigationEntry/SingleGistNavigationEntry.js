import React, { Component } from 'react';

import './SingleGistNavigationEntry.css';

export default class SingleGistNavigationEntry extends Component {
    render() {
        return (
            <div className="gistNavigationItem">
                {this.props.gistInformation.description}
            </div>
        );
    }
}
