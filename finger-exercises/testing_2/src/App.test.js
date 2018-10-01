import React from 'react';
import ReactDOM from 'react-dom';
import { configure, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';

configure({ adapter: new Adapter() });
describe('App', () => {
  it('renders without crashing', () => {
  });

  it('matches the snapshot', () => {
    const tree = mount(<App />);
  });
});
