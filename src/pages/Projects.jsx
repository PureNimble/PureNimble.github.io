import React from 'react';
import { ProjectCard } from '../components';
import { projects } from '../constants';

function Projects() {
    return (
        <>
            <main>
                <section className="container px-4 py-10 mx-auto max-w-7xl">
                    <header className="text-center">
                        <h1 className="text-2xl font-semibold text-accent1-light capitalize lg:text-3xl dark:text-accent1-dark transition-colors duration-300">
                            Our Projects
                        </h1>
                        <p className="max-w-2xl mt-4 mx-auto text-accent2-light dark:text-accent2-dark transition-colors duration-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.
                        </p>
                    </header>
                    <div className="grid gap-8 gap-x-8 mt-8 lg:grid-cols-3 lg:px-4">
                        {projects.map(({ title, description, url, date, logo }, index) => (
                            <ProjectCard
                                key={index}
                                title={title}
                                description={description}
                                url={url}
                                date={date}
                                logo={logo}
                            />
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}

export default Projects;