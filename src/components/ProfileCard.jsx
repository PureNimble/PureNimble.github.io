import React from 'react';

const ProfileCard = ({ name, role, image }) => {
    return (
        <div>
            <img className="object-cover rounded-xl aspect-square" src={image} alt="" />
            <h1 className="mt-4 text-2xl font-semibold text-accent-1">{name}</h1>
            <p className="mt-2 text-accent-2 capitalize">{role}</p>
        </div>
    );
}

export default ProfileCard;