import React from 'react';
import { shallow } from 'enzyme';
import Grid from '../components/Grid';
import usersJson from '../data/users.json';

it('renders without crashing', () => {
  shallow(<Grid users={usersJson.data} />);
});