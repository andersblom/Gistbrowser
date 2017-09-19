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
                {(this.state.showCode ? 
                    <div>
                        <div style={styles.languageShower}>Language: {this.props.fileThatIsBeingRendered.language}</div>
                        <div style={styles.sizeShower}>Size: {this.props.fileThatIsBeingRendered.size}</div>
                        <div style={styles.infoSeperator}></div>
                    </div>
                    :
                    ""
                )}
                {(this.state.showCode ? 
                    <pre style={styles.preForHtml}>{this.props.allFileContents}</pre> 
                    : 
                    <div style={styles.markUpDisplay} dangerouslySetInnerHTML={this.getMarkup()}></div>
                )}
                <div style={styles.toggleCodeOnOffBtn} onClick={this.toggleCodeOnOff}>{(this.state.showCode ? "markup" : "code")}</div>    
            </div>
        );
    }
}

const styles = {
    gistFileContentsContainer: {
        maxWidth: "100%",
        // backgroundColor: "#f9f9f9",
        border: "1px solid #f9f9f9",
        color: "#46466E",
        padding: "2em",
    },

    preForHtml: {
        whiteSpace: "pre-wrap",
        wordBreak: "break-word",
        fontFamily: "Source Code Pro, Monospace",
        fontSize: "12px",
        backgroundColor: "#f5f5f5",
        padding: "2em",
        position: "relative",
    },
    toggleCodeOnOffBtn: {
        backgroundColor: "#46466E",
        color: "#ffffff",
        width: "80px",
        position: "absolute",
        right: "0px",
        top: "0px",
        cursor: "pointer",
        textAlign: "center",
        textTransform: "uppercase",
        fontSize: "12px",
        paddingTop: "8px",
        paddingBottom: "8px",
    },
    markUpDisplay: {
        overflowX: "scroll",
    },
    languageShower: {
        color: "#8787A3",
        textTransform: "uppercase",
        fontSize: "13px",
        fontWeight: "600",
        marginBottom: "0.6em",
    },
    sizeShower: {
        color: "#8787A3",
        textTransform: "uppercase",
        fontSize: "12px",
        fontWeight: "400",
        marginBottom: "1.6em",
    },
    infoSeperator: {
        height: "1px", 
        width: "100%",
        backgroundColor: "#BDBDD7",
        marginBottom: "1em",
    }
}
