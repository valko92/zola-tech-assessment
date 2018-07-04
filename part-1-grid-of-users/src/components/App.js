import React, { Component } from 'react';
import Header from './Header';
import Sort from './Sort';
import Filter from './Filter';
import Grid from './Grid';

import usersJson from '../data/users.json';
import '../styles/App.css';

export default class App extends Component {
  constructor() {
    super();

    // making new array of only cateogires
    let categoryArray = usersJson.data.map((val, key) => val.category);
    // making new array with unique values using Set
    let uniqueCatArray = [...new Set(categoryArray)];
    // sorting by ascending
    let orderedUniqueCatArray = uniqueCatArray.sort();

    this.state = {
      users: usersJson.data,
      uniqueCats: orderedUniqueCatArray
    }
    
    this.onPickSort = this.onPickSort.bind(this);
    this.onPickFilter = this.onPickFilter.bind(this);
  }

  onPickSort(sort) {
    let newUsers = [];

    switch(sort) {
      case 'featured':
        newUsers = usersJson.data;
        break;
      case 'a-z':
        // to prevet .sort() from mutating original array, concatinating it first
        newUsers = [].concat(this.state.users).sort(
          function(a, b){
            //make name strings equal
            var nameA = a.name.toUpperCase();
            var nameB = b.name.toUpperCase();

            //Lexicographical ordering of strings
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
          
            // else they are equal, don't sort them, leave them be in respect to each other 
            return 0;
          }
        ); 

        break;
      case 'priority':
      // to prevet .sort() from mutating original array, concatinating it first
        newUsers = [].concat(this.state.users).sort(
          function(a, b){
            //make name strings equal
            var priorityA = a.priority;
            var priorityB = b.priority;

            //Lexicographical ordering of strings
            if (priorityA < priorityB) {
              return -1;
            }
            if (priorityA > priorityB) {
              return 1;
            }
          
            // else they are equal, don't sort them, leave them in respect to each other 
            return 0;
          }
        ); 
        break;
      default:
        console.log('unknown or empty sort type');

        newUsers = usersJson.data;
    }

    this.setState({
      users: newUsers
    });
  }

  onPickFilter(filter) {
    console.log(filter, usersJson.data, this.state.users)

    let newUsers = [];

    newUsers = [].concat(usersJson.data).filter((user) => {
      if (user.category === filter) {
        return true;
      } else {
        return false
      }
    });

    this.setState({
      users: newUsers
    });
  }
  render() {
    return (
      <div className="app">
        <Header/>
        <Sort onPickSort={this.onPickSort}/>
        {/*passing users array to filter to get the categories*/}
        <Filter onPickFilter={this.onPickFilter} cateogires={this.state.uniqueCats} />
        {/*get user list, pass to Grid component */}
        <Grid users={this.state.users}/>
      </div>
    );
  }
}