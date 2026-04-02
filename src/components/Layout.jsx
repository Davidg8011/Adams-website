import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="nav-brand">Advanced Earthworks</Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/about">About</Link>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '0.75rem 1.25rem', borderRadius: '4px' }}>Contact Us</Link>
        </div>
      </nav>

      <main style={{ minHeight: '80vh' }}>
        <Outlet />
      </main>

      <footer className="footer-bottom">
        <div>
          <p style={{ color: '#a0a0a0', margin: 0 }}>© 2026 by Advanced Earthworks. All rights reserved.</p>
        </div>
        <div style={{ textAlign: 'right', color: '#a0a0a0' }}>
          <p style={{ margin: 0 }}>Email: info@advanced-earthworks.com</p>
          <p style={{ margin: 0 }}>Phone: 707-304-5870</p>
        </div>
      </footer>
    </>
  );
}

export default Layout;
