import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';

export default class GistFileTabSingle extends Component {

    render() {
        return(
            <div>{this.props.file.filename}</div>
        )
    }
}
          
