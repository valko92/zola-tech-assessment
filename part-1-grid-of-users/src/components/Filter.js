import React from 'react';
import PropTypes from 'prop-types';

import '../styles/Filter.css';

const Filter = (props) => {
    return (
        <fieldset className="filter-fieldset">
            <div>Filter by...</div>
            {props.cateogires.map((cat, key) => {
                return (
                    <label key={key}>
                        <input type="radio" name="filter" value={cat} onChange={(e) => {props.onPickFilter(e.target.value);}}/>
                        {cat}
                    </label>
                );
            })}
        </fieldset>
    );
} 


Filter.propTypes = {
    cateogires: PropTypes.array,
    onPickFilter: PropTypes.func
};

export default Filter;