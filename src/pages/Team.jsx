import React from 'react';
import { teamMembers } from '../constants';
import { ProfileCard } from '../components';
import "@theme-toggles/react/css/Classic.css";

function Team() {
    return (
        <>
            <main>
                <section className="container px-16 py-10 mx-auto">
                    <header className="text-center">
                        <h1 className="text-2xl font-semibold text-accent1-light capitalize lg:text-3xl dark:text-accent1-dark transition-colors duration-300">
                            Our Team
                        </h1>
                        <p className="max-w-2xl mt-4 mx-auto text-accent2-light dark:text-accent2-dark transition-colors duration-300">
                            Meet our team of dedicated professionals. Connect with us through the profiles below.
                        </p>
                    </header>
                    <div className="grid gap-8 mt-8 lg:grid-cols-3">
                        {teamMembers.map(({ name, role, image, github, linkedin, portfolio }, index) => (
                            <ProfileCard
                                key={index}
                                name={name}
                                role={role}
                                image={image}
                                github={github}
                                linkedin={linkedin}
                                portfolio={portfolio}
                            />
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
};

export default Team;