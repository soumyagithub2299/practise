import React from 'react';
import Typography from '@mui/material/Typography';
import './Home.css'; 

const Home = () => {
  return (
    <div className="root custom-home-class">
      <Typography variant="h2" className="title">
        Welcome to Our Website
      </Typography>
      <Typography variant="body1" className="content">
        This is the Home page content. You can customize it as needed.
      </Typography>
    </div>
  );
};

export default Home;
