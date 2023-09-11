import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <Typography variant="body2" color="textSecondary">
          &copy; {new Date().getFullYear()} Practise
        </Typography>
        <Link color="inherit" href="/about">
          Privacy Policy
        </Link>
        <Link color="inherit" href="/about">
          Terms of Service
        </Link>
      </div>
    </footer>
  );
};

export default Footer;