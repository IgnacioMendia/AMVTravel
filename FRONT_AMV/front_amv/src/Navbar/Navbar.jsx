import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function ResponsiveAppBar() {
    const navigate = useNavigate();


    const redirectHome = () =>{
        navigate('/Home');
    }

    const redirectBookings = () =>{
        navigate('/Booking');
    }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              height:100
            }}
          >
            <img src="../public/Logo.jpg" alt="" />
          </Typography>

          
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img src="../public/Logo.jpg" alt="" />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button className="button" sx={{color:'white'}} onClick={redirectHome}>Home</Button>
            <Button className="button" sx={{color:'white'}} onClick={redirectBookings}>Mis reservas</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}