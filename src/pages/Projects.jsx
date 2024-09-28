import React from 'react';
import { Card } from '../components';
import { projects } from '../constants';

function Projects() {
    return (
        <div className="grid gap-8 gap-x-4 mt-8 lg:grid-cols-3 px-4 lg:px-8">

            {projects.map(({ title, description, url }, index) => (
                <Card title={title} description={description} url={url} />

            ))}
        </div>
    );
}

export default Projects;