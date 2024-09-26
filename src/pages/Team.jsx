import React from 'react';
import { teamMembers } from '../constants';
import { ProfileCard, DarkModeToggleButton } from '../components';
import "@theme-toggles/react/css/Classic.css";

const Team = ({ toggleDarkMode }) => {
    return (
        <div>
            <section className="bg-bkg">
                <DarkModeToggleButton toggleDarkMode={toggleDarkMode} />
                <div className="container px-6 py-10 mx-auto">
                    <div className="xl:flex xl:items-center xl:-mx-4">
                        <div className="xl:w-1/2 xl:mx-4">
                            <h1 className="text-2xl font-semibold text-accent-1 capitalize lg:text-3xl">
                                Our Team
                            </h1>

                            <p className="max-w-2xl mt-4 text-accent-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-0 xl:mx-4 xl:w-1/2 md:grid-cols-2">
                            {teamMembers.map((member, index) => (
                                <ProfileCard
                                    key={index}
                                    name={member.name}
                                    role={member.role}
                                    image={member.image}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Team;