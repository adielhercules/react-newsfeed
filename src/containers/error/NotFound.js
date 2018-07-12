import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div className="empty" style={{ minHeight: '100vh' }}>
    <div className="empty-icon">
      <i className="icon icon-stop" />
    </div>
    <p className="empty-title h5">We sorry.</p>
    <p className="empty-subtitle">
      It seems the page you are looking for does not exist.
    </p>
    <div className="empty-action">
      <Link to="/" className="btn btn-primary">
        Back to Home
      </Link>
    </div>
  </div>
);
