import React from 'react';
import PropTypes from 'prop-types';

import GridItem from './GridItem';

import '../styles/Grid.css';

const Grid = (props) => {
  return (
    <div className="grid">
      {props.users.map((user, key) => {
          return(
              <GridItem key={key} name={user.name} age={user.age} category={user.category} priority={user.priority} />
          );
      })}
    </div>
  );
}

Grid.propTypes = {
    users: PropTypes.array
};

export default Grid;