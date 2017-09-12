import React, { Component } from 'react';

export default class SingleGistShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            singleGistToShow: {}
        }

        console.log(this.props);
    }
    render() {
        return (
            <div>
                Single Gist: {this.props.match.params.id}
            </div>
        );
    }
}
