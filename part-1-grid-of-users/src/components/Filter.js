import React from 'react';
import '../styles/Filter.css';

const Filter = (props) => {
    return (
        <fieldset className="filter-fieldset">
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

export default Filter;