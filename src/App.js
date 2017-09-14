import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import _ from 'lodash';

import Sidebar from './components/Sidebar';
import Welcome from './components/Welcome';
import GistDisplay from './components/GistDisplay';

import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      allGists: [],
      selectedGist: undefined
    }
  
    this.setSelectedGistFromId = this.setSelectedGistFromId.bind(this);
  }

  /*
   * Function used for getting a fresh list of gists from the API and setting it as state
   * @param -
   */
  getGistList() {
    axios.get("https://api.github.com/gists/public?per_page=30")
    .then(res => {
      this.setState({
        allGists: res.data
      });
    })
    .catch(err => {console.error(err)});
  }

  /*
   * Updates the current gist in the main section. Is called from child components
   * @param {string} gistId
   */
  setSelectedGistFromId(gistId) {
    const gistArrayItem = _.find(this.state.allGists, function(o) {
      return o.id === gistId;
    });
    this.setState({
      selectedGist: gistArrayItem
    })
  }

  componentDidMount() {
    this.getGistList();
  }

  render() {
    return (
      <div className="appContainer">
        <Sidebar gists={this.state.allGists} setSelectedGistFromId={this.setSelectedGistFromId}/>
        <div className="mainContainer">
          <Route exact path="/" component={Welcome} />
          <Route path="/gist/:id" render={(props) => (<GistDisplay {...props} selectedGist={this.state.selectedGist} setSelectedGistFromId={this.setSelectedGistFromId} />)} />
        </div>
      </div>
    );
  }
}