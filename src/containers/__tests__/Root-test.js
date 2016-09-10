/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';

import configureMockStore from 'redux-mock-store';

jest.unmock('../Root');
import Root from '../Root';

const mockStore = configureMockStore([]);
const storeStateMock = {
  currentTime: {},
  currentUser: {}
};

let store, wrapper;
describe('Interaction', function() {
  beforeEach(() => {
    store = mockStore(storeStateMock);
    wrapper = shallow(<Root store={store} />)
  })

  it('renders the App', () => {
    expect(wrapper.find('App').length).toEqual(1);
  });
});
