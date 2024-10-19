// import React from 'react'
import { Outlet } from "react-router-dom"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import { ThemeProvider, useTheme } from "./context/ThemeContext";


const Layout = () => {
  return (
      <ThemeProvider>
        <LayoutContent/>
      </ThemeProvider>
  );
}

  const LayoutContent = () => {
    const { currentTheme } = useTheme();
    return (
      <div className={`theme-${currentTheme} text-primary theme-font`}>
        <Navigation />
        <Outlet />
        <Footer />
      </div>
    );
  };

export default Layout