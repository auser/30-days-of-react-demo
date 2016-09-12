/* eslint-disable */
import React from 'react';
import renderer from 'react-test-renderer';
import sinon from 'sinon';

jest.unmock('../Home');
import {Home} from '../Home';

const identity = () => {};
let actions = {
  currentTime: { updateTime: identity }
}
let currentTime = { currentTime: new Date() };

describe('Home', function() {
  beforeEach(() => {
    actions.currentTime.updateTime = sinon.spy();
  })

  it('renders a logout view', () => {
    const component = renderer.create(
      <Home actions={actions} currentTime={currentTime} />
    )
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(actions.currentTime.updateTime.called).toBeFalsy();

    // set the login input
    const button = tree.children[tree.children.length - 1];
    button.props.onClick();
    expect(actions.currentTime.updateTime.called).toBeTruthy();
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
