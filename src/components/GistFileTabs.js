import React, { Component } from 'react';
import _ from 'lodash';

import GistFileTabSingle from './GistFileTabSingle';

export default class GistFileTabs extends Component {
    render() {
        let gistFileArray = [];
        _.forEach(this.props.files, (file) => {
            gistFileArray.unshift(file);
        });
        const gistFileTabs = gistFileArray.map((file, index) => {
            return(<GistFileTabSingle updateTheCurrentFileToDisplay={this.props.updateTheCurrentFileToDisplay} key={index} index={index} file={file} {...this.props} />);
        })
        return(
            <div>
                {gistFileTabs}
            </div>
        )
    }
}
          
