import { link } from "fs";

export interface IProjectData{
    id: number;
    title: string;
    description: string;
    year: string;
    image: string;
    link: string;
}

const projectsData:IProjectData[] = [
    {
        id:1,
        title: 'FlavR',
        description: 'A Point of Sale food ordering app',
        year:'2023',
        image: '/flavr.png',
        link: 'https://github.com/sanyam12/FlavR',
    },
    {
        id:2,
        title: 'Veza',
        description: "A community for school/college students",
        year:'2021',
        image: '/veza.jpeg',
        link: 'https://github.com/sanyam12/Veza',
    },
    {
        id:3,
        title: 'DSC Connect',
        description: 'An announcement portal for DSC Club',
        year:'2022',
        image:'/connect.png',
        link: 'https://github.com/sanyam12/DSC-Connect',
    }
]

export default projectsData;