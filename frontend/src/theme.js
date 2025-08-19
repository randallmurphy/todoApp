// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark', // sleek dark vibe
    primary: {
      main: '#6a11cb', // purple
      contrastText: '#fff',
    },
    secondary: {
      main: '#2575fc', // blue
      contrastText: '#fff',
    },
    error: {
      main: '#ff2e63', // delete button
    },
    success: {
      main: '#00ff7f', // done checkbox
    },
    background: {
      default: '#1e1e2f',
      paper: '#2c2c54',
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    h3: {
      fontWeight: 900,
      letterSpacing: '2px',
      textTransform: 'uppercase',
      textShadow: '2px 2px 12px #6a11cb, 0 0 25px #fff, 0 0 50px #6a11cb',
    },
    button: {
      textTransform: 'none',
      fontWeight: 700,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 6px 18px rgba(0,0,0,0.25)',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0 0 25px #6a11cb',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 8px 25px rgba(0,0,0,0.4)',
        },
      },
    },
  },
});

export default theme;
