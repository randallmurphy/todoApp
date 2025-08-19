import React, { useState } from 'react';
import { Container, Paper, Box, Button } from '@mui/material';
import LandingPage from './components/LandingPage';
import Header from './components/Header';
import TodoList from './components/TodoList';
import  axios  from 'axios';

const App = () => {
  const [user, setUser] = useState(null);

  const handleAuthSuccess = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
  };

  return (
    <>
      {!user ? (
        <LandingPage onAuthSuccess={handleAuthSuccess} />
      ) : (
        <Container
          maxWidth="md"
          sx={{
            mt: 5,
            mb: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Paper
            elevation={12}
            sx={{
              p: 3,
              borderRadius: 3,
              background: 'linear-gradient(145deg, #1e1e2f, #2c2c54)',
              width: '100%',
              boxShadow: '0 8px 30px rgba(106,17,203,0.5), 0 0 50px rgba(37,117,252,0.4)',
            }}
          >
            {/* Header with Logout button */}
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
              <Header />
              <Button
                onClick={handleLogout}
                sx={{
                  background: 'linear-gradient(145deg, #6a11cb, #2575fc)',
                  color: '#fff',
                  textTransform: 'none',
                  borderRadius: 2,
                  px: 3,
                  py: 1,
                  fontWeight: 'bold',
                  boxShadow: '0 4px 12px rgba(106,17,203,0.4), 0 0 15px rgba(37,117,252,0.4)',
                  '&:hover': {
                    background: 'linear-gradient(145deg, #2575fc, #6a11cb)',
                  },
                }}
              >
                Logout
              </Button>
            </Box>

            {/* Todo List */}
            <TodoList />
          </Paper>
        </Container>
      )}
    </>
  );
};

export default App;
