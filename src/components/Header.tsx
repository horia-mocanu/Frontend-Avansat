import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav>
        <ul className="header-links">
          <li className="header-link">
            <Link to="/">Home</Link>
          </li>
          <li className="header-link">
            <Link to="/login">Login</Link>
          </li>
          <li className="header-link">
            <Link to="/players">Players</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;