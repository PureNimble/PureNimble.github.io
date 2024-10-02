import React from 'react';

const OrganizationCard = ({ name, logo }) => {
    return (
        <div className="bg-content-light dark:bg-gray-400 p-8 rounded-xl inline-block shadow-md transition-colors duration-300 mx-auto">
            <div className="flex flex-col items-center">
                <div className="w-60 h-60 relative group perspective-3d">
                    <div className="absolute w-full h-full bg-gray-200 rounded-full shadow-lg transition-transform duration-500 transform group-hover:rotate-y-180 group-hover:rotate-x-12 hover:animate-spin3D">
                        <img className="object-cover w-full h-full rounded-full shadow-xl" src={logo} alt={`Logo of ${name}`} />
                    </div>
                </div>
                <h1 className="mt-4 text-2xl font-semibold capitalize text-center text-accent1-light">{name}</h1>
            </div>
        </div>
    );
}

export default OrganizationCard;
