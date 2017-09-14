import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import _ from 'lodash';

export default class GistFileTabSingle extends Component {
    constructor() {
        super();
        this.state = {
            hover: false
        }

        this.toggleHover = this.toggleHover.bind(this);
    }

    toggleHover() {
        this.setState({
            hover: !this.state.hover
        })
    }
    
    render() {
        return(
            <Link to={`${this.props.match.url}/${this.props.index}`}><div style={(this.state.hover ? {...styles.gistFileTabSingle, ...styles.gistFileTabSingleHover} : styles.gistFileTabSingle)} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>{this.props.file.filename}</div></Link>
        )
    }
}

const styles = {
    gistFileTabSingle: {
        backgroundColor: "#ffffff",
        borderBottom: "2px solid #dedede",
        display: "inline-block",
        padding: "10px 15px 10px 15px",
        cursor: "pointer",
        marginRight: "4px"
    },
    gistFileTabSingleHover: {
        borderBottom: "2px solid red",
    }
}