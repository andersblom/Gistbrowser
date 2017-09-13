import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import GistNavItem from './GistNavItem';

export default class Sidebar extends Component {
    render() {
        const gistsToBeRendered = this.props.gists.map((gist, index) => {
            return (<Link to={`/gist/${gist.id}`} key={gist.id}><GistNavItem gistData={gist} currentGistId={this.props.currentGistId} /></Link>)
        });
        return (
            <nav>
                { gistsToBeRendered }
            </nav>
        );
    }
}
          
