import React from 'react';
import { teamMembers } from '../constants';
import { ProfileCard } from '../components';

const Team = () => {
    return (
        <section class="bg-white dark:bg-gray-900">
            <div class="container px-6 py-10 mx-auto">
                <div class="xl:flex xl:items-center xL:-mx-4">
                    <div class="xl:w-1/2 xl:mx-4">
                        <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Our Team</h1>

                        <p class="max-w-2xl mt-4 text-gray-500 dark:text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.
                        </p>
                    </div>

                    <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-0 xl:mx-4 xl:w-1/2 md:grid-cols-2">
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
    );
};

export default Team;