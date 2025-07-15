import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        backgroundColor: 'var(--nav-bg)',
        color: 'var(--text-color)',
        padding: '1rem',
        borderBottom: '1px solid var(--border-color)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo or title */}
        <div style={{ fontWeight: 'bold' }}>MyPortfolio</div>

        {/* Desktop links */}
        {!isMobile && (
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            {links.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <div key={link.path} style={{ position: 'relative' }}>
                  <NavLink
                    to={link.path}
                    style={{
                      color: 'var(--text-color)',
                      textDecoration: 'none',
                      fontWeight: isActive ? 'bold' : '500',
                      paddingBottom: '4px',
                    }}
                  >
                    {link.name}
                  </NavLink>
                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      style={{
                        position: 'absolute',
                        height: '3px',
                        background: 'var(--text-color)',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        borderRadius: '2px',
                      }}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </div>
              );
            })}
            <ThemeToggle />
          </div>
        )}

        {/* Hamburger Icon */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(true)}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '1.8rem',
              color: 'var(--text-color)',
              cursor: 'pointer',
            }}
          >
            ☰
          </button>
        )}
      </div>

      {/* Slide-in Menu for Mobile */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              onClick={closeMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: '#000',
                zIndex: 99,
              }}
            />

            {/* Sidebar Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                height: '100%',
                width: '75vw',
                backgroundColor: 'var(--nav-bg)',
                padding: '2rem 1rem',
                zIndex: 100,
                boxShadow: '-2px 0 5px rgba(0,0,0,0.2)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }}
            >
              {/* Close Button */}
              <button
                onClick={closeMenu}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'none',
                  border: 'none',
                  fontSize: '1.5rem',
                  color: 'var(--text-color)',
                  cursor: 'pointer',
                }}
              >
                ✕
              </button>

              {/* Theme Toggle Top Left */}
              <div style={{ position: 'absolute', top: '1rem', left: '1rem' }}>
                <ThemeToggle />
              </div>

              {/* Spacer */}
              <div style={{ height: '4rem' }}></div>

              {/* Nav Links */}
              {links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  style={{
                    fontSize: '1.2rem',
                    color: 'var(--text-color)',
                    textDecoration: 'none',
                    fontWeight: location.pathname === link.path ? 'bold' : 'normal',
                  }}
                >
                  {link.name}
                </NavLink>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
