import { NavLink } from "react-router-dom";
import { DarkModeToggleButton } from ".";
import "@theme-toggles/react/css/Classic.css";
import { FaHome } from "react-icons/fa";

const Navbar = ({ toggleDarkMode }) => {
    return (
        <header className='header bg-gray-400 dark:bg-gray-700'>
            <NavLink to='/'>
                <FaHome className='text-4xl text-black dark:text-white' />
            </NavLink>
            <nav className='flex text-lg gap-7 font-medium'>
                <NavLink to='/error' className={({ isActive }) => isActive ? "text-blue-600 dark:text-blue-500 no-select" : "text-black dark:text-white no-select"}>
                    Error
                </NavLink>
            </nav>
            <DarkModeToggleButton toggleDarkMode={toggleDarkMode} />

        </header>
    );
};

export default Navbar;