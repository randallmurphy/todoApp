import React from 'react';
import { Container, Paper, Typography } from '@mui/material';
import Header from './components/Header';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 5, mb: 5 }}>
      <Paper 
        elevation={12} 
        sx={{ p: 3, borderRadius: 3, background: 'linear-gradient(145deg, #1e1e2f, #2c2c54)' }}
      >
        <Header />
        <TodoList />
      </Paper>
    </Container>
  );
};

export default App;
