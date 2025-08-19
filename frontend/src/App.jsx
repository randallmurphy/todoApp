import React from 'react';
import { Container, Paper } from '@mui/material';
import Header from './components/Header';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <Container 
      maxWidth="sm" 
      sx={{ 
        mt: 5, 
        mb: 5, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center' 
      }}
    >
      <Paper 
        elevation={12} 
        sx={{ 
          p: 3, 
          borderRadius: 3, 
          background: 'linear-gradient(145deg, #1e1e2f, #2c2c54)',
          width: '100%',
          boxShadow: '0 8px 30px rgba(106,17,203,0.5), 0 0 50px rgba(37,117,252,0.4)'
        }}
      >
        <Header />
        <TodoList />
      </Paper>
    </Container>
  );
};

export default App;
