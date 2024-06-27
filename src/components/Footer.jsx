// src/components/Footer.jsx
import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white', py: 3, textAlign: 'center' }}>
      <Typography variant="body2">&copy; 2024 My Portfolio. All rights reserved.</Typography>
    </Box>
  );
};

export default Footer;
