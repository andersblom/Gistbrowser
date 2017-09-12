import React, { Component } from 'react';
import axios from 'axios';

export default class SingleGistShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            singleGistToShow: {}
        }
    }

    componentWillMount() {
        this.getStateData();
    }

    componentWillUpdate() {
        this.getStateData();
    }
    
    getStateData() {
        axios.get(`https://api.github.com/gists/${this.props.match.params.id}`)
        .then(res => {
            this.setState({
                singleGistToShow: res.data
            });

            console.log("single gist: ", res.data)
        })
        .catch(err => {
            console.error(err);
        });
    }

    render() {
        return (
            <div className="singleGistContainer">
                <div className="gistDesc">{this.state.singleGistToShow.description}</div>
                <div className="gistCreatedAt">Created at {this.state.singleGistToShow.created_at}</div>
                <div className="gistUrl">{this.state.singleGistToShow.html_url}</div>
            </div>
        );
    }
}
