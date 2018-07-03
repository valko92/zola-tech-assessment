import React, { Component } from 'react';
import PropTypes from 'prop-types';

import GridItem from './GridItem';

import '../styles/Grid.css';

export default class Grid extends Component {
  render() {
    return (
      <div className="grid">
        {this.props.users.map((user, key) => {
            return(
                <GridItem key={key} name={user.name} age={user.age} category={user.category} priority={user.priority} />
            );
        })}
      </div>
    );
  }
}

Grid.propTypes = {
    users: PropTypes.array
};