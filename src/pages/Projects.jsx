import React from 'react';
import { ProjectCard } from '../components';
import { projects } from '../constants';

function Projects() {
    return (
        <>
            <main>
                <section className="container px-16 py-10 mx-auto max-w-7xl">
                    <header className="text-center">
                        <h1 className="text-2xl font-semibold text-accent1-light capitalize lg:text-3xl dark:text-accent1-dark transition-colors duration-300">
                            Our Projects
                        </h1>
                        <p className="max-w-2xl mt-4 mx-auto text-accent2-light dark:text-accent2-dark transition-colors duration-300">
                            This page showcases our organization's key projects, including university initiatives and more. It serves as a record of our efforts and is shared to inspire and inform others. Explore to learn about our work and impact!
                        </p>
                    </header>
                    <div className="grid gap-8 gap-x-8 mt-8 lg:grid-cols-3 lg:px-4">
                        {projects.map(({ title, description, source, date, logo, live }, index) => (
                            <ProjectCard
                                key={index}
                                title={title}
                                description={description}
                                source={source}
                                date={date}
                                logo={logo}
                                live={live}
                            />
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}

export default Projects;