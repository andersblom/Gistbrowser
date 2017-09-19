import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import _ from 'lodash';

import GistFileViewer from './GistFileViewer';
import GistFileTabs from './GistFileTabs';

export default class GistDisplay extends Component {
    constructor() {
        super();
        this.state = {
            allFileContents: "",
            fileThatIsBeingRendered: {}
        }

        this.updateTheCurrentFileToDisplay = this.updateTheCurrentFileToDisplay.bind(this);
    }
    componentDidMount() {
        if (!this.props.selectedGist) {
            this.props.setSelectedGistFromId(this.props.match.params.id);
        }
    }

    updateTheCurrentFileToDisplay(tabIndex) {
        // Need this variable for pushing objects into an array
        let gistFileArray = [];
        
        //Takes each file object and places it in the array
        _.forEach(this.props.selectedGist.files, (file) => {
            gistFileArray.unshift(file);
        });

        // Cycling through files to make sure that the index no of the  
        // files array + url prop matches.
        let renderThis = gistFileArray.map((file, index) => {
            if (index == tabIndex) {
                return file;
            }
        });

        renderThis = renderThis[0];

        //Setting state for the file info
        this.setState({
            fileThatIsBeingRendered: renderThis
        })

        console.log(renderThis);

        axios.get(renderThis.raw_url)
        .then(res => {
            this.setState({
                allFileContents: res.data
            })
        })
        .catch(err => console.error(err))
    }

    render() {
        if (!this.props.selectedGist) {
            return <div>please wait</div>
        } else {
            return (
                <div>
                    <div className="gistDesc">{this.props.selectedGist.description}</div>
                    <div className="gistFiles">
                        <GistFileTabs updateTheCurrentFileToDisplay={this.updateTheCurrentFileToDisplay} files={this.props.selectedGist.files} {...this.props} />
                    </div>

                    <Route path={`${this.props.match.url}/:gistFileNumber`} render={(props) => (<GistFileViewer {...props} fileThatIsBeingRendered={this.state.fileThatIsBeingRendered} allFileContents={this.state.allFileContents} />)} />
                </div>
            );
        }
    }
}
          
