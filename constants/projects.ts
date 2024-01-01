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
        image: 'https://github-production-user-asset-6210df.s3.amazonaws.com/94969636/252768457-98f80461-cf23-4e8b-b6d2-3a6a435c434e.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240101%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240101T070259Z&X-Amz-Expires=300&X-Amz-Signature=09252f2f99d8759ceaebca920c5fafc8c36645942fc34333afe9fd15c6895bc7&X-Amz-SignedHeaders=host&actor_id=94290072&key_id=0&repo_id=643480517',
        link: 'https://github.com/sanyam12/FlavR',
    },
    {
        id:2,
        title: 'Veza',
        description: "A community for school/college students",
        year:'2021',
        image: 'https://user-images.githubusercontent.com/96609856/148262436-11b19d1b-dbcb-405e-abb5-f8f71c5a2fc7.jpeg',
        link: 'https://github.com/sanyam12/Veza',
    },
    {
        id:3,
        title: 'DSC Connect',
        description: 'An announcement portal for DSC Club',
        year:'2022',
        image:'https://raw.githubusercontent.com/sanyam12/DSC-Connect/master/dsc-connect-pic.png',
        link: 'https://github.com/sanyam12/DSC-Connect',
    }
]

export default projectsData;