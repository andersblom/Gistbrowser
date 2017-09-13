import React, { Component } from 'react';
import axios from 'axios';

export default class SingleGistShow extends Component {
    render() {
        return (
            <div className="singleGistContainer">
                <div className="gistDesc">{this.props.activeGist.description}</div>
                <div className="gistCreatedAt">{this.props.activeGist.created_at}</div>
                <div className="gistUrl">{this.props.activeGist.html_url}</div>
            </div>
        );
    }
}
