import React, { Component } from 'react';

export default class GistFileViewer extends Component {
    constructor() {
        super();
        this.state = {
            showCode: true
        }
        this.toggleCodeOnOff = this.toggleCodeOnOff.bind(this);
    }
    toggleCodeOnOff() {
        if (this.state.showCode === true) {
            this.setState({
                showCode: false
            });
        } else {
            this.setState({
                showCode: true
            });
        }
    }

    getMarkup() {
        return {__html: this.props.allFileContents}
    }
    render() {
        return(
            <div style={styles.gistFileContentsContainer}>
                <div>{this.props.fileThatIsBeingRendered.filename}, {this.props.fileThatIsBeingRendered.language}</div>
                <div style={styles.toggleCodeOnOffBtn} onClick={this.toggleCodeOnOff}>{(this.state.showCode ? "markup" : "code")}</div>
                {(this.state.showCode ? 
                    <pre style={styles.preForHtml}>{this.props.allFileContents}</pre> 
                    : 
                    <div style={styles.markUpDisplay} dangerouslySetInnerHTML={this.getMarkup()}></div>
                )}    
            </div>
        );
    }
}

const styles = {
    gistFileContentsContainer: {
        maxWidth: "100%",
        backgroundColor: "#f9f9f9",
        color: "#46466E",
        padding: "2em",
        position: "relative",
    },

    preForHtml: {
        whiteSpace: "pre-wrap",
        wordBreak: "break-word",
        fontFamily: "Source Code Pro, Monospace",
        fontSize: "12px"
    },
    toggleCodeOnOffBtn: {
        backgroundColor: "#46466E",
        color: "#ffffff",
        width: "60px",
        position: "absolute",
        right: "0px",
        top: "0px",
        cursor: "pointer",
        textAlign: "center",
        textTransform: "uppercase",
        fontSize: "11px",
        paddingTop: "6px",
        paddingBottom: "6px",
    },
    markUpDisplay: {
        overflowX: "scroll",
    }
}
