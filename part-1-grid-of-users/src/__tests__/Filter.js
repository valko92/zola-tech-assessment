import React from 'react';
import { shallow } from 'enzyme';
import Filter from '../components/Filter';
import usersJson from '../data/users.json';

let categoryArray = usersJson.data.map((val, key) => val.category);
// making new array with unique values using Set
let uniqueCatArray = [...new Set(categoryArray)];
// sorting by ascending
let orderedUniqueCatArray = uniqueCatArray.sort();

it('renders without crashing', () => {
  shallow(<Filter cateogires={orderedUniqueCatArray} />);
});