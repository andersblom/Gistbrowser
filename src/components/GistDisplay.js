import React, { Component } from 'react';
import axios from 'axios';

export default class GistDisplay extends Component {
    constructor() {
        super();
        this.state = {
            gistToShow: {}
        }
    }

    componentDidUpdate() {
        axios.get(`https://api.github.com/gists/${this.props.match.params.id}`)
        .then(res => {
            let gistId = this.props.match.params.id;
            if (gistId !== this.state.gistToShow.id) {
                this.setState({
                    gistToShow: res.data
                });
            }
        })
        .catch(err => {console.error(err)});
    }
    
    render() {
    return (
        <div>Displaying gist: {this.state.gistToShow.description}</div>
    );
  }
}
          
