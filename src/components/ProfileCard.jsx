import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { CgWebsite } from "react-icons/cg";

const ProfileCard = ({ name, role, image, github, linkedin, portfolio }) => {
    return (
        <div className="bg-content-light dark:bg-content-dark text-accent1-light dark:text-accent1-dark p-8 rounded-xl shadow-md transition-colors duration-300">
            <div className="flex justify-center items-center">
                <img className="w-40 h-40 object-cover rounded-full" src={image} alt={`Profile picture of ${name}`} />
            </div>
            <div className="text-center">
                <h1 className="mt-4 text-2xl font-semibold capitalize">{name}</h1>
                <p className="mt-2 capitalize">{role}</p>
            </div>
            <div className="flex mt-4 space-x-4 justify-center items-center">
                <a href={github} aria-label={`GitHub Profile of ${name}`} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-4xl text-accent1-light dark:text-accent1-dark" />
                </a>
                <a href={linkedin} aria-label={`LinkedIn Profile of ${name}`} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-4xl text-accent1-light dark:text-accent1-dark" />
                </a>
                <a href={portfolio} aria-label={`Portfolio of ${name}`} target="_blank" rel="noopener noreferrer">
                    <CgWebsite className="text-4xl text-accent1-light dark:text-accent1-dark" />
                </a>
            </div>
        </div>
    );
}

export default ProfileCard;