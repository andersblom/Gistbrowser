import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

import Sidebar from './components/Sidebar';
import Welcome from './components/Welcome';
import GistDisplay from './components/GistDisplay';

import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      allGists: []
    }
    
  
  axios.get("https://api.github.com/gists/public?per_page=30")
  .then(res => {
    this.setState({
      allGists: res.data
    });
  })
  .catch(err => {console.error(err)});
  }

  render() {
    return (
      <div className="appContainer">
        <Sidebar gists={this.state.allGists} />
        <div className="mainContainer">
          <Route exact path="/" component={Welcome} />
          <Route path="/gist/:id" render={(props) => (<GistDisplay {...props} />)} />
        </div>
      </div>
    );
  }
}