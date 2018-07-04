import React from 'react';
import PropTypes from 'prop-types';

import '../styles/GridItem.css';

const GridItem = (props) => {
    return (
        <div className={`grid-item priority-${props.priority}`}>
            <h2 className="name">{props.name}</h2>
            <p className="age">{props.age}</p>
            <p className="cat">{props.category}</p>
        </div>
    );
} 

GridItem.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    category: PropTypes.string,
    priority: PropTypes.number
};

export default GridItem;