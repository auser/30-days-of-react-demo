/* eslint-disable */
import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

jest.unmock('../Root');

jest.unmock('../../redux/configureStore');
jest.unmock('../../redux/modules/currentTime');
jest.unmock('../../redux/modules/currentUser');

import { Router } from 'react-router';
import Root from '../Root';
import configureStore from '../../redux/configureStore';

describe('Interaction', function() {
  let store, wrapper;
  let router;
  let actions = {};

  beforeEach(() => {
    const configured = configureStore({});
    router = { push: sinon.stub() };
    store = configured.store;
  })
  beforeEach(() => {
    wrapper = mount(
      <Root store={store} actions={actions} />,
      { context: { router }});
  })

  it('renders the App', () => {
    expect(wrapper.find('App').length).toEqual(1);
  });
});
