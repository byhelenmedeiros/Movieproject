import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SignUpPage from '../components/SignUp/SignUpPage';


const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container custom-navbar">
        <div className="d-flex align-items-center">
          <a className="navbar-brand logo" href="#">
            <img src="/logo.png" alt="Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">
                Login
              </a>
            </li>
          </ul>
          <Link to="/create-account">
            <button className="btn btn-primary">CRIAR CONTA</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
