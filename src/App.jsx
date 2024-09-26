import React, { useState, useEffect } from 'react';
import { Team, PageNotFound } from './pages';;
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleDarkMode = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Team toggleDarkMode={toggleDarkMode} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;