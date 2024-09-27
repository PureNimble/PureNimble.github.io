import "@theme-toggles/react/css/Around.css";
import { Around } from "@theme-toggles/react";
import React from "react";

const DarkModeToggleButton = ({ darkMode, toggleDarkMode }) => {

    return (
        <Around
            className='text-4xl text-amber-400 dark:text-content-light'
            toggled={darkMode}
            onToggle={toggleDarkMode}
        />
    );
}

export default DarkModeToggleButton;