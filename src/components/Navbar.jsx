import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import DarkModeToggleButton from './DarkModeToggleButton';
import { RiGitRepositoryFill } from "react-icons/ri";

const Navbar = ({ darkMode, toggleDarkMode }) => {
    return (
        <header className='header bg-transparent flex justify-between items-center p-4 transition-colors duration-300'>
            <DarkModeToggleButton darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <NavLink to='/'>
                <FaHome className='text-4xl text-content-dark dark:text-content-light' />
            </NavLink>
            <NavLink to='/projects'>
                <RiGitRepositoryFill className='text-3xl font-semibold text-content-dark dark:text-content-light' />
            </NavLink>
        </header>
    );
};

export default Navbar;