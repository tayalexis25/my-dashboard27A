import React, { useState } from 'react';
import { Box, AppBar, Toolbar, Typography, IconButton, Paper
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import TransactionTable from './components/TransactionTable';
import RevenueChart from './components/RevenueChart';

function App() {
  const [openSidebar, setOpenSidebar] = useState(true);

  const handleSidebarToggle = () => {
    setOpenSidebar(!openSidebar);
  };

  const revenueData = [
    { name: 'Jan', revenue: 4000 },
    { name: 'Feb', revenue: 3000 },
    { name: 'Mar', revenue: 2000 },
    { name: 'Apr', revenue: 2780 },
    { name: 'May', revenue: 1890 },
    { name: 'Jun', revenue: 2390 },
    { name: 'Jul', revenue: 3490 },
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleSidebarToggle}
            sx={{ mr: 2 }}
          >
            {openSidebar ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: 'flex', flexGrow: 1, pt: '64px' }}>
        <Box
          sx={{
            width: openSidebar ? '200px' : '0px',
            transition: 'width 0.3s ease-in-out',
            overflow: 'hidden',
            p: 2,
            backgroundColor: openSidebar ? 'darkgreen' : 'transparent',
            color: openSidebar ? 'white' : 'inherit',
          }}
        >
          {openSidebar && (
            <>
              <Typography variant="subtitle1" color="white">Revenue</Typography>
              <RevenueChart data={revenueData} />
            </>
          )}
        </Box>
        <Paper
          sx={{
            flexGrow: 1,
            ml: openSidebar ? '10px' : '0px',
            transition: 'margin-left 0.3s ease-in-out',
            p: 2,
          }}
        >
          <Typography variant="h5" gutterBottom>
            Transactions w/ Scrollbar
          </Typography>
          <TransactionTable />
        </Paper>
      </Box>
    </Box>
  );
}

export default App;