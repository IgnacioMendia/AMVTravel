import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './Login/Login.jsx'
import Home from './Home/Home.jsx'
import Booking from './Booking/Booking.jsx'
import theme from './Styles/Theme.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';

//LOCALHOST
window.conexion = "https://localhost:44399/api";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/Home",
    element: <Home />
  },
  {
    path: "/Booking",
    element: <Booking />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ThemeProvider theme={theme}>
        <RouterProvider router={router}/>
     </ThemeProvider>
  </React.StrictMode>,
)