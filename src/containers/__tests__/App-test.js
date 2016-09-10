/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

jest.unmock('react-router');
import { Router } from 'react-router';

jest.unmock('../App');
jest.unmock('../Index');
jest.unmock('../../views/Home/Home');

import App from '../App';

let wrapper, actions;
describe('Interaction', function() {
  beforeEach(() => {
    actions = {};
    wrapper = shallow(<App actions={actions} />)
  })

  it('renders the Router', () => {
    expect(wrapper.find('Router').length).toEqual(1);
  });

  it('renders Home by default', () => {
    expect(wrapper.find('Route')).toBeDefined();
  });

});
