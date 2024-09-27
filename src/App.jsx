import React from 'react';
import { BrowserRouter, Routes, Route, useLocation, matchPath } from 'react-router-dom';
import Navbar from './components/Navbar';
import Team from './pages/Team';
import PageNotFound from './pages/PageNotFound';
import "@theme-toggles/react/css/Classic.css";

function App() {
  const [darkMode, setDarkMode] = React.useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  const toggleDarkMode = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', JSON.stringify(newMode));
      return newMode;
    });
  };

  return (
    <BrowserRouter>
      <AppContent darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </BrowserRouter>
  );
}

function AppContent({ darkMode, toggleDarkMode }) {
  const location = useLocation();

  const routesWithNavbar = [
    { path: '/' },
  ];

  const shouldShowNavbar = routesWithNavbar.some(route =>
    matchPath(route.path, location.pathname)
  );

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className='bg-bkg-light dark:bg-bkg-dark min-h-screen flex flex-col'>
        {shouldShowNavbar && <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />}
        <main className='flex-grow'>
          <Routes>
            <Route path="/" element={<Team />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;