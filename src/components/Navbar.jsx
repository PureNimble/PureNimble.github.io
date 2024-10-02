import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaPeopleGroup } from "react-icons/fa6";
import { FaHome } from 'react-icons/fa';
import { RiGitRepositoryFill } from "react-icons/ri";

const Navbar = () => {
    return (
        <header className='header bg-transparent flex justify-between items-center p-4 transition-colors duration-300'>
            <NavLink to='/team'>
                <FaPeopleGroup className='text-4xl text-content-dark dark:text-content-light' />
            </NavLink>
            <NavLink to='/'>
                <FaHome className='text-4xl text-content-dark dark:text-content-light' />
            </NavLink>
            <NavLink to='/projects'>
                <RiGitRepositoryFill className='text-4xl text-content-dark dark:text-content-light' />
            </NavLink>
        </header>
    );
};

export default Navbar;