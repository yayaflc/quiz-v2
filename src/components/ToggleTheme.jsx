import React, { useState, useEffect } from 'react';
import "@theme-toggles/react/css/Around.css"
import { Around } from "@theme-toggles/react"

const ToggleTheme = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ||
      (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  );

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div>
      {/* <label>
        <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
        Toggle Theme
      </label> */}
      <Around duration={750} toggled={theme === 'dark'} toggle={toggleTheme} />
    </div>
  );
};

export default ToggleTheme;