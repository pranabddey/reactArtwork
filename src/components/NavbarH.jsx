import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useLocation, useNavigate } from 'react-router-dom';
export default function AccessibleTabs2() {
    const location = useLocation();
    const navigate = useNavigate();
    const handleChange = (event, newValue) => {
        setValue(newValue);
        navigate(indexToPath[newValue]);
      };
  const pathToIndex = {
    '/': 0,
    '/imageupload': 1
  };

  const indexToPath = {
    0: '/',
    1: '/imageupload'
  };

  const currentPath = location.pathname;
  const [value, setValue] = React.useState(pathToIndex[currentPath] || 0);
  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        onChange={handleChange}
        value={value}
        aria-label="Tabs where each tab needs to be selected manually"
      >
        <Tab label="HOME" />
        <Tab label="Image UPLOAD" />
        <Tab label="Login" />
      </Tabs>
    </Box>
  );
}