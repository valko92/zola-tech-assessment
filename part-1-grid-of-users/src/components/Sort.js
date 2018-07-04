import React from 'react';
import PropTypes from 'prop-types';

import '../styles/Sort.css';

const Sort = (props) => {
    return (
        <select className="sort" onChange={(e) => {props.onPickSort(e.target.value);}} defaultValue={0}>
            <option disabled value="0">Sort by...</option>
            <option value="featured">Featured</option>
            <option value="a-z">A-Z</option>
            <option value="priority">Priority</option>
        </select>
    );
} 

Sort.propTypes = {
    onPickSort: PropTypes.func
};

export default Sort;