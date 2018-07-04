import React from 'react';
import { shallow } from 'enzyme';
import Sort from '../components/Sort';

it('renders without crashing', () => {
  shallow(<Sort />);
});