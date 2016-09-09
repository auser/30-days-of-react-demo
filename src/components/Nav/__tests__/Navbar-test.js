/* eslint-disable */

import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';

jest.unmock('../Navbar');
import Navbar from '../Navbar';

describe('Navbar', function() {
  let wrapper;

  it('wraps content in a div with .navbar class', () => {
    wrapper = shallow(<Navbar />);
    expect(wrapper.find('.navbar')).toBeTruthy();
  });

  describe('constant links', function() {
    let Links;
    beforeEach(() => {
      wrapper = shallow(<Navbar />);
      Links = wrapper.find('Link');
    });

    it('renders a home link first', () => {
      const link = Links.first();
      expect(link).toBeDefined();
      expect(link.childAt(0).text()).toBe('Home');
      expect(link.props().to).toBe('/home');
    });

    it('renders an about link', () => {
      const link = wrapper
        .findWhere(n => n.props().to === '/about')
      expect(link).toBeDefined();
      expect(link.childAt(0).text())
        .toBe('About')
    });
  });

  describe('with a currentUser', () => {
    let currentUser;
    let link;
    describe('that is not logged in', () => {
      beforeEach(() => {
        wrapper = shallow(<Navbar currentUser={currentUser} />);
      });

      it('shows a link for Login', () => {
        link = wrapper
          .findWhere(n => n.props().to === '/login');
        expect(link.length).toEqual(1);
        expect(link.childAt(0).text()).toBe('Login')
      });
    });

    describe('that is logged in', function() {
      beforeEach(() => {
        currentUser = {
          loggedIn: true
        };
        wrapper =
          shallow(<Navbar currentUser={currentUser} />)
      });

      it('shows a link to logout', () => {
        const link = wrapper
          .findWhere(n => n.props().to === '/logout');
        expect(link.length).toEqual(1);
        expect(link.childAt(0).text()).toBe('Logout');
      });
    });
  })
});
