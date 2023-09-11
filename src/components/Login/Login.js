import React from 'react';
import './Login.css'; // Import the CSS file

import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Login = () => {
  return (
    <div className="login-container">
      <Paper elevation={3} className="login-paper">
        <Typography variant="h4" className="login-title">
          Login
        </Typography>
        <form className="login-form">
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            className="login-button"
          >
            Login
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default Login;
