import React from 'react';
import { BrowserRouter, Routes, Route, useLocation, matchPath } from 'react-router-dom';
import { Navbar, Footer } from './components';
import { Projects, Team, PageNotFound, Organization } from './pages';
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
    { path: '/team' },
    { path: '/projects' }
  ];

  const shouldShow = routesWithNavbar.some(route =>
    matchPath(route.path, location.pathname)
  );

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className='bg-bkg-light dark:bg-bkg-dark min-h-screen flex flex-col transition-colors duration-300'>
        {shouldShow && <Navbar />}
        <main className='flex-grow'>
          <Routes>
            <Route path="/projects" element={<Projects />} />
            <Route path="/team" element={<Team />} />
            <Route path="/" element={<Organization />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
        {shouldShow && <Footer darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
      </div>
    </div>
  );
}

export default App;