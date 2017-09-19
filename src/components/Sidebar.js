import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import GistNavItem from './GistNavItem';

export default class Sidebar extends Component {
    render() {
        const gistsToBeRendered = this.props.gists.map((gist, index) => {
            return (<Link style={styles.sidebarLink} to={`/gist/${gist.id}`} key={gist.id} onClick={() => this.props.setSelectedGistFromId(gist.id)}><GistNavItem gistData={gist} currentGistId={this.props.currentGistId} /></Link>)
        });
        return (
            <nav>
                { gistsToBeRendered }
            </nav>
        );
    }
}

const styles = {
    sidebarLink: {
        color: "#8787A3",
        textDecoration: "none",
        fontFamily: "Monserrat, sans-serif",
        fontSize: "14px",
    }
}
          
