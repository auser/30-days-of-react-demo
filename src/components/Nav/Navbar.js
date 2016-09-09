import React from 'react';
import { Link } from 'react-router';

export const Navbar = ({currentUser}) => {
  return (
    <div className="navbar">
      <Link
        className="link"
        to="/home"
        activeClassName="active">
          Home
      </Link>
      <Link
        className="link"
        to="/about"
        activeClassName="active">
          About
      </Link>

      {currentUser && currentUser.loggedIn ?
        <Link
          to="/logout"
          className="link"
          activeClassName="active">Logout</Link> :
        <Link
          to="/login"
          className="link"
          activeClassName="active">Login</Link>}
    </div>
  );
}

export default Navbar;
