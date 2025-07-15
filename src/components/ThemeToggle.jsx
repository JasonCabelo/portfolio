import { useEffect, useState } from 'react';

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const theme = darkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [darkMode]);

  const toggleTheme = (e) => {
    e.stopPropagation();
    setDarkMode((prev) => !prev);
  };

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: '0.4rem 1rem',
        borderRadius: '9999px',
        border: '2px solid var(--accent)',
        backgroundColor: 'transparent',
        color: 'var(--accent)',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: `0 0 5px var(--accent)`
      }}
    >
      {darkMode ? '☀ Light' : '🌙 Dark'}
    </button>
  );
}

export default ThemeToggle;
