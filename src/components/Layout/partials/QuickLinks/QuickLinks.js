import React from 'react';
import { Link } from 'react-router-dom';

const Grid = () => (
  <ul className="menu">
    <li className="divider" data-content="Quick Links" />
    <li className="menu-item">
      <Link to="/cases">
        <i className="icon icon-plus" /> Open a case
      </Link>
    </li>
    <li className="menu-item">
      <Link to="/cases">
        <i className="icon icon-link" /> Open Cases
      </Link>
    </li>
    <li className="menu-item">
      <Link to="/cases">
        <i className="icon icon-check" /> Closed Cases
      </Link>
    </li>
    <li className="divider" />
    <li className="menu-item">
      <div className="menu-badge">
        <label className="label label-primary">2</label>
      </div>
      <Link to="/documents">
        <i className="icon icon-bookmark" /> Documents
      </Link>
    </li>
  </ul>
);

export default Grid;
