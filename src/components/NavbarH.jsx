import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useLocation, useNavigate } from 'react-router-dom';

export default function AccessibleTabs2() {
  const location = useLocation();
  const navigate = useNavigate();

  const pathToIndex = {
    '/': 0,
    '/imageupload': 1,
    '/login': 2
  };

  const indexToPath = {
    0: '/',
    1: '/imageupload',
    2: '/login'
  };

  const currentPath = location.pathname;
  const [value, setValue] = React.useState(pathToIndex[currentPath] || 0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(indexToPath[newValue]);
  };

  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: '#e0f7fa', // Light blue background
        borderBottom: '1px solid #ccc',
        height: '56px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Instagram-like tabs"
        centered
        textColor="inherit"
        TabIndicatorProps={{
          style: {
            background:
              'linear-gradient(to right, #f58529, #dd2a7b, #8134af, #515bd4)',
            height: '3px'
          }
        }}
        sx={{
          minHeight: 'auto',
          height: '48px'
        }}
      >
        <Tab
          label="HOME"
          sx={{ color: 'black', fontWeight: 600, minHeight: 'auto', height: '48px' }}
        />
        <Tab
          label="Image UPLOAD"
          sx={{ color: 'black', fontWeight: 600, minHeight: 'auto', height: '48px' }}
        />
        <Tab
          label="Login"
          sx={{ color: 'black', fontWeight: 600, minHeight: 'auto', height: '48px' }}
        />
      </Tabs>
    </Box>
  );
}
