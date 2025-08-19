// src/components/LandingPage.jsx
import React, { useState } from 'react';
import { Container, Paper, Typography, TextField, Button, Box, Tabs, Tab } from '@mui/material';
import axios from 'axios';

const LandingPage = ({ onAuthSuccess }) => {
  const [tab, setTab] = useState(0); // 0 = login, 1 = signup
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
    setFormData({
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      password: ''
    });
    setError('');
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = tab === 0 ? '/api/user/login' : '/api/user/signup';
      const payload = tab === 0 ? { email: formData.email, password: formData.password } : formData;

      const response = await axios.post(`http://localhost:3000${endpoint}`, payload);

      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
      }

      console.log('User Authenticated:', response.data);
      onAuthSuccess(response.data);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || 'Something went wrong!');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5, mb: 5 }}>
      <Paper
        elevation={12}
        sx={{
          p: 3,
          borderRadius: 3,
          background: 'linear-gradient(145deg, #1e1e2f, #2c2c54)',
          boxShadow: '0 8px 30px rgba(106,17,203,0.5), 0 0 50px rgba(37,117,252,0.4)',
        }}
      >
        <Typography
          variant="h3"
          align="center"
          sx={{
            mb: 3,
            color: '#fff',
            textShadow: '2px 2px 12px #6a11cb, 0 0 25px #fff, 0 0 50px #6a11cb',
          }}
        >
          My Todo App
        </Typography>

        <Tabs
          value={tab}
          onChange={handleTabChange}
          centered
          textColor="secondary"
          indicatorColor="secondary"
          sx={{ mb: 3 }}
        >
          <Tab label="Login" />
          <Tab label="Sign Up" />
        </Tabs>

        <form onSubmit={handleSubmit}>
          <Box display="flex" flexDirection="column" gap={2}>
            {tab === 1 && (
              <>
                <TextField
                  label="First Name"
                  name="firstName"
                  variant="filled"
                  value={formData.firstName}
                  onChange={handleChange}
                  fullWidth
                  InputProps={{ style: { backgroundColor: '#000', borderRadius: 8 } }}
                />
                <TextField
                  label="Last Name"
                  name="lastName"
                  variant="filled"
                  value={formData.lastName}
                  onChange={handleChange}
                  fullWidth
                  InputProps={{ style: { backgroundColor: '#000', borderRadius: 8 } }}
                />
                <TextField
                  label="Username"
                  name="userName"
                  variant="filled"
                  value={formData.userName}
                  onChange={handleChange}
                  fullWidth
                  InputProps={{ style: { backgroundColor: '#000', borderRadius: 8 } }}
                />
              </>
            )}
            <TextField
              label="Email"
              name="email"
              variant="filled"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              InputProps={{ style: { backgroundColor: '#000', borderRadius: 8 } }}
            />
            <TextField
              label="Password"
              type="password"
              name="password"
              variant="filled"
              value={formData.password}
              onChange={handleChange}
              fullWidth
              InputProps={{ style: { backgroundColor: '#000', borderRadius: 8 } }}
            />

            {error && (
              <Typography variant="body2" color="error" sx={{ textAlign: 'center' }}>
                {error}
              </Typography>
            )}

            <Button type="submit" variant="contained" color="primary" sx={{ py: 1.5 }}>
              {tab === 0 ? 'Login' : 'Sign Up'}
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default LandingPage;
