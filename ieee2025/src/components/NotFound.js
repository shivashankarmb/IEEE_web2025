import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-container">
        <div className="error-code">404</div>
        <h1 className="error-title">Page Not Found</h1>
        <p className="error-message">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="error-actions">
          <Link to="/" className="home-button">
            Go Back Home
          </Link>
          <Link to="/themes" className="committees-button">
            View Themes
          </Link>
        </div>
        <div className="error-illustration">
          <div className="ieee-logo-small">
            <span>IEEE</span>
            <span>Electrothon 2025</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;