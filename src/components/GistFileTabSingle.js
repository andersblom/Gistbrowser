import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
            <Link to={`${this.props.match.url}/${this.props.index}`} onClick={() => {this.props.updateTheCurrentFileToDisplay(this.props.index)}}><div style={(this.state.hover ? {...styles.gistFileTabSingle, ...styles.gistFileTabSingleHover} : styles.gistFileTabSingle)} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>{this.props.file.filename}</div></Link>
        )
    }
}

const styles = {
    gistFileTabSingle: {
        backgroundColor: "#f9f9f9",
        borderBottom: "4px solid #BDBDD7",
        display: "inline-block",
        padding: "10px 15px 10px 15px",
        cursor: "pointer",
        marginRight: "4px",
        color: "#46466E",
        fontFamily: "Montserrat, sans-serif",
        textTransform: "uppercase",
        fontSize: "11px",
    },
    gistFileTabSingleHover: {
        borderBottom: "4px solid #46466E",
    }
}