import React from 'react';
import './Contact.css'; // Import the CSS file

import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const Contact = () => {
  return (
    <div className="contact-container">
      <Paper elevation={3} className="contact-paper">
        <Typography variant="h4" className="contact-title">
          Contact Us
        </Typography>
        <Typography variant="body1" className="contact-content">
          If you have any questions or feedback, please feel free to contact us at
          contact@example.com.
        </Typography>
      </Paper>
    </div>
  );
};

export default Contact;
