import React from 'react';
import { shallow } from 'enzyme';
import Griditem from '../components/Griditem';

it('renders without crashing', () => {
  shallow(<Griditem name='Test' age={14} category='cat1' priority={1} />);
});