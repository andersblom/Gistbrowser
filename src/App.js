import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

import SingleGistNavigationEntry from './components/SingleGistNavigationEntry/SingleGistNavigationEntry';
import NoGistsToShow from './components/NoGistsToShow/NoGistsToShow';
import SingleGistShow from './components/SingleGistShow/SingleGistShow';

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
      })
    })
    .catch(err => {
      console.error(err);
    });
  }

  render() {
    const gistNavigationEntries = this.state.allGists.map((gist, index) => {
      return (<Link to={gist.id} key={gist.id}><SingleGistNavigationEntry gistInformation={gist} /></Link>);
    });
    return (
      <Router>
        <div className="appContainer">
          <nav>
            { gistNavigationEntries }
          </nav>

          <section className="mainContainer">
            <Route exact path="/" component={NoGistsToShow} />
            <Route path="/:id" component={SingleGistShow} />
          </section>
        </div>
      </Router>
    );
  }
}