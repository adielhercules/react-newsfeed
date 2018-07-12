import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import Navbar from './Navbar.styled';

export default () => (
  <Navbar>
    <div className="container grid-lg">
      <header className="navbar">
        <section className="navbar-section">
          <NavLink to="/" className="btn btn-link" exact>
            <i className="icon icon-message" /> Newsfeed
          </NavLink>
          <NavLink to="/cases" className="btn btn-link">
            Cases
          </NavLink>
        </section>
        <section className="navbar-center">
          <Link to="/" className="navbar-brand mr-2">
            Logo
          </Link>
        </section>
        <section className="navbar-section">
          <div className="dropdown">
            <a
              href="/#"
              onClick={e => e.preventDefault()}
              className="btn btn-link dropdown-toggle"
              tabIndex="0">
              <figure
                className="avatar avatar-sm"
                data-initial="JD"
                style={{ backgroundColor: '#5755d9' }}
              />{' '}
              <i className="icon icon-arrow-down" />
            </a>
            <ul className="menu">
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/signout">Signout</Link>
              </li>
            </ul>
          </div>
        </section>
      </header>
    </div>
  </Navbar>
);
