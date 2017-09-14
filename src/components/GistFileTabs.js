import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';

import GistFileTabSingle from './GistFileTabSingle';

export default class GistFileTabs extends Component {
    render() {
        const gistFileTabs = _.map(this.props.files, file => {
            return (<GistFileTabSingle file={file} />);
        });
        return(
            <div>
                {gistFileTabs}
            </div>
        )
    }
}
          
