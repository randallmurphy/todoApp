import React from 'react';
import { Typography, Box } from '@mui/material';

const Header = () => {
  return (
    <Box textAlign="center" mb={3}>
      <Typography 
        variant="h3" 
        sx={{ 
          fontWeight: 'bold', 
          color: '#fff', 
          textShadow: '2px 2px 12px #6a11cb, 0 0 25px #fff, 0 0 50px #6a11cb' 
        }}
      >
        ✨ Todo App ✨
      </Typography>
    </Box>
  )
}

export default Header;
