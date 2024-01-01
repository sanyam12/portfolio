import Image from 'next/image';
import Link from 'next/link';

interface IProjectCard {
    title: string;
    description: string;
    year: string;
    image: string;
    link: string;
}

const ProjectCard: React.FC<IProjectCard> = (props) => {
    return (
        <Link
            href={props.link}
        >
            <div className="flex flex-col items-center justify-center rounded-2xl px-3 py-3">
                <Image
                    src={props.image}
                    alt="Product Image"
                    width={500}
                    height={500}
                    className='rounded-2xl object-contain w-[40vw] md:w-[25vw] lg:w-[20vw] h-[18vh]'
                />
                <div className='flex flex-col justify-start pt-3'>
                <h3 className="text-3xl font-bold">{props.title}</h3>
                <p className='text-xl'>{props.year}</p>
                <p className="text-xl">{props.description}</p>
                </div>
            </div>
        </Link>

    );
}

export default ProjectCard;