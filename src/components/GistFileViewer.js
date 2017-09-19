import React, { Component } from 'react';
import _ from 'lodash';

export default class GistFileViewer extends Component {
    render() {

        // Need this variable for pushing objects into an array
        let gistFileArray = [];

        //Takes each file object and places it in the array
        _.forEach(this.props.files, (file) => {
            gistFileArray.unshift(file);
        });

        
        let renderThis = gistFileArray.map((file, index) => {
            console.log(index);
            console.log(this.props.match.params.gistFileNumber);
            if (index == this.props.match.params.gistFileNumber) {
                return file;
            }
        });

        renderThis = renderThis[0];

        return(
            <div>{renderThis.filename}, {renderThis.language}</div>
        );
    }
}
          
