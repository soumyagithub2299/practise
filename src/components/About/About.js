import React from 'react';
import './About.css'; // Import the CSS file

import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const About = () => {
  return (
    <div className="about-container">
      <Paper elevation={3} className="about-paper">
        <Typography variant="h4" className="about-title">
          About Us
        </Typography>
        <Typography variant="body1" className="about-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec quam at metus
          suscipit dapibus. Sed tincidunt dapibus ipsum, a hendrerit odio sagittis eget.
        </Typography>
      </Paper>
    </div>
  );
};

export default About;
