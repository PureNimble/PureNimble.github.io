import React from 'react';

const ProfileCard = ({ name, role, image }) => {
    return (
        <div>
            <img className="object-cover rounded-xl aspect-square" src={image} alt="" />
            <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">{name}</h1>
            <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">{role}</p>
        </div>
    );
}

export default ProfileCard;