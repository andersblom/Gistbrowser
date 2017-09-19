import React, { Component } from 'react';
import _ from 'lodash';
import axios from 'axios';

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
        width: "100%"
    },

    preForHtml: {
        whiteSpace: "pre-wrap",
        backgroundColor: "#dedede",
        padding: "20px 10px 20px 10px"
    }
}
