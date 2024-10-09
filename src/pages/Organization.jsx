import React from 'react';
import { organization } from '../constants';
import { OrganizationCard } from '../components';

function Organization() {
    return (
        <>
            <main>
                <section className="container px-16 py-10 mx-auto">
                    <header className="text-center">
                        <h1 className="text-2xl font-semibold text-accent1-light capitalize lg:text-3xl dark:text-accent1-dark transition-colors duration-300">
                            Our Organization
                        </h1>
                        <p className="max-w-2xl mt-4 mx-auto text-accent2-light dark:text-accent2-dark transition-colors duration-300">
                            {organization.description}
                        </p>
                    </header>
                    <div className="flex justify-center mt-8 lg:px-4 w-full">
                        <OrganizationCard
                            name={organization.name}
                            logo={organization.logo}
                        />
                    </div>
                </section>
            </main >
        </>
    );
}

export default Organization;