import { hairdropLight, hairdropDark, pureNimble, jobs4uDark, jobs4uLight } from '../assets';

export const teamMembers = [
    {
        name: 'Vasco Sousa',
        role: 'CEO',
        image: 'https://github.com/vscosousa.png',
        github: 'https://github.com/vscosousa',
        linkedin: 'https://linkedin.com/in/vscosousa/',
        portfolio: 'https://vscosousa.github.io/'
    },
    {
        name: 'Rafael Araújo',
        role: 'CEO',
        image: 'https://github.com/ReyFow.png',
        github: 'https://github.com/ReyFow',
        linkedin: 'https://linkedin.com/in/rafaraujo589/',
        portfolio: 'https://ReyFow.github.io/'

    },
    {
        name: 'João Pinto',
        role: 'CEO',
        image: 'https://github.com/joaopinto15.png',
        github: 'https://github.com/joaopinto15',
        linkedin: 'https://linkedin.com/in/joaopinto15/',
        portfolio: 'https://joaopinto15.github.io/'
    },
];

export const projects = [
    {
        title: 'Lapr 1',
        description: 'This repository contains relevant didactic artifacts for the integrative project to be developed in the first semester of the 2022-2023 academic year in the Bachelor\'s Degree in Engineering (LEI) at the Instituto Superior de Engenharia do Porto (ISEP).',
        source: 'https://github.com/PureNimble/ISEP-LAPR1',
        date: '2022-2023'
    },
    {
        title: 'Lapr 2',
        description: 'This repository contains relevant didactic artifacts for the integrative project to be developed in the second semester of the 2022-2023 academic year in the Bachelor\'s Degree in Computer Engineering (LEI) at the Instituto Superior de Engenharia do Porto (ISEP).',
        source: 'https://github.com/PureNimble/ISEP-LAPR2',
        date: '2022-2023'
    },
    {
        title: 'Lapr 3',
        description: 'This repository contains relevant didactic artifacts for the integrative project to be developed in the first semester of the 2023-2024 academic year in the Bachelor\'s Degree in Computer Engineering (LEI) at the Instituto Superior de Engenharia do Porto (ISEP).',
        source: 'https://github.com/PureNimble/ISEP-LAPR3',
        date: '2023-2024'
    },
    {
        title: 'Jobs4u (Lapr 4)',
        description: 'As part of the LEI (Licenciatura Engenharia Informática) degree\'s integrative project at ISEP (Instituto Superior de Engenharia do Porto) for the 2023/2024 academic year, we are embarking on a project to develop a Minimum Viable Product (MVP) for Jobs4U aimed at automating their talent acquisition process.',
        source: 'https://github.com/PureNimble/ISEP-LAPR4',
        date: '2023-2024',
        logo: {
            dark: jobs4uLight,
            light: jobs4uDark,
        }
    },
    {
        title: 'HairDrop',
        description: 'This project is a service designed to seamlessly connect users with hair salons, barbershops, and independent hairstylists, offering a modern, on-demand solution for hair care.',
        source: 'https://github.com/PureNimble/HairDrop',
        live: 'https://hairdrop.me/',
        date: '2024',
        logo: {
            dark: hairdropDark,
            light: hairdropLight
        }

    }
];

export const organization = {
    name: 'PureNimble',
    logo: pureNimble,
    description: 'PureNimble is a space where we share university projects and personal work that could be useful to others. Our team consists of students, and we aim to provide simple, practical resources based on what we’ve learned. We’re not trying to stand out, just offering what we’ve created in case it helps someone else.'
};