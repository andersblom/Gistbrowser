import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';

import GistFileTabSingle from './GistFileTabSingle';

export default class GistFileTabs extends Component {
    render() {
        let gistFileArray = [];
        _.forEach(this.props.files, (file) => {
            gistFileArray.unshift(file);
        });
        const gistFileTabs = gistFileArray.map((file,index) => {
            console.log(index, file);
            return(<GistFileTabSingle key={index} index={index} file={file} {...this.props} />);
        })
        return(
            <div>
                {gistFileTabs}
            </div>
        )
    }
}
          
