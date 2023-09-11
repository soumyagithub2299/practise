import React from 'react';
import './Header.css';

import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import logo from '../../assets/images/practiseLogo.jpg';

const Header = () => {
  return (
    <>
      <AppBar position="static" className="header">
        <Toolbar>
          <img src={logo} alt="Logo" className="logo" /> 
          
         
          <Button color="inherit">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </Button>

          <Button color="inherit">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </Button>

          <Button color="inherit">
            <Link to="/help" className="nav-link">
              Help
            </Link>
          </Button>

          <Button color="inherit">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </Button>

          <Button color="inherit">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
