import React from "react";
import DarkModeToggleButton from './DarkModeToggleButton';

const Footer = ({ darkMode, toggleDarkMode }) => {
    return (
        <footer className="fixed bottom-0 left-0 w-full p-4 bg-transparent">
            <div className="flex justify-end">
                <DarkModeToggleButton darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </div>
        </footer>
    );
}

export default Footer;