// src/Components/MainLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar stays fixed at the top */}
      <Navbar />

      {/* Main content area that grows to fill space */}
      <main className="flex-grow">
        {/* The Outlet is the "placeholder" for your pages */}
        <Outlet />
      </main>

      {/* Footer stays fixed at the bottom */}
      <Footer />
    </div>
  );
};

export default MainLayout;