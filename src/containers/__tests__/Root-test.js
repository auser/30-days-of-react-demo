/* eslint-disable */

import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

jest.unmock('../Root');
jest.unmock('redux');

jest.unmock('../../redux/configureStore');
jest.unmock('../../redux/modules/currentTime');
jest.unmock('../../redux/modules/currentUser');

import Root from '../Root';
import configureStore from '../../redux/configureStore';

describe('Interaction', function() {
  let store, wrapper;

  beforeEach(() => {
    const middlewares = []
    const configured = configureStore({});
    store = configured.store;
  })
  beforeEach(() => {
    wrapper = shallow(<Root store={store} />);
  })

  it('renders the App', () => {
    expect(wrapper.find('App').length).toEqual(1);
  });

});
