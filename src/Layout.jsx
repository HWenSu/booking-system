// import React from 'react'
import { Outlet } from "react-router-dom"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import { ThemeProvider } from "./context/ThemeContext"

const Layout = () => {
  return (
    <ThemeProvider>
      <Navigation />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
}

export default Layout