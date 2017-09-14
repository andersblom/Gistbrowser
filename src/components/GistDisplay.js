import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';

import GistFileTabs from './GistFileTabs';

export default class GistDisplay extends Component {
    componentDidMount() {
        if (!this.props.selectedGist) {
            this.props.setSelectedGistFromId(this.props.match.params.id);
        }
    }

    render() {
        if (!this.props.selectedGist) {
            return <div>please wait</div>
        } else {
            return (
                <div>
                    <div className="gistDesc">{this.props.selectedGist.description}</div>
                    <div className="gistFiles">
                        <GistFileTabs files={this.props.selectedGist.files} />
                    </div>
                </div>
            );
        }
    }
}
          
