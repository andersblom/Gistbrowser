import React, { Component } from 'react';

export default class GistFileViewer extends Component {
    render() {
        return(
            <div style={styles.gistFileContentsContainer}>
                <div>{this.props.fileThatIsBeingRendered.filename}, {this.props.fileThatIsBeingRendered.language}</div>
                <pre style={styles.preForHtml}>{this.props.allFileContents}</pre>    
            </div>
        );
    }
}

const styles = {
    gistFileContentsContainer: {
        maxWidth: "100%",
        backgroundColor: "#BDBDD7",
        color: "#46466E",
        padding: "2em",
    },

    preForHtml: {
        whiteSpace: "pre-wrap",
        wordBreak: "break-word",
        fontFamily: "Source Code Pro, Monospace",
        fontSize: "12px"
    }
}
