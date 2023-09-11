import React from 'react';
import './Help.css'; // Import the CSS file

import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const Help = () => {
  return (
    <div className="help-container">
      <Paper elevation={3} className="help-paper">
        <Typography variant="h4" className="help-title">
          Help Center
        </Typography>
        <Typography variant="body1" className="help-content">
          If you need assistance or have any questions, please feel free to contact our
          support team at support@example.com.
        </Typography>
      </Paper>
    </div>
  );
};

export default Help;
