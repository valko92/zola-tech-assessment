import React, { Component } from 'react';
import Header from './Header';
import Grid from './Grid';

import users from '../data/users.json';
import '../styles/App.css';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Header/>

        {/*get user list, pass to Grid component */}
        <Grid users={users.data}/>
      </div>
    );
  }
}