import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="nav-brand" onClick={closeMenu}>Advanced Earthworks</Link>
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`nav-links${menuOpen ? ' nav-open' : ''}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/services" onClick={closeMenu}>Services</Link>
          <Link to="/gallery" onClick={closeMenu}>Gallery</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '0.75rem 1.25rem', borderRadius: '4px' }} onClick={closeMenu}>Contact Us</Link>
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
