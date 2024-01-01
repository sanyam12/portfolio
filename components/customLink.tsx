import Link from "next/link";


interface CustomLinkProps {
    title: string;
    href: string;
}

const CustomLink: React.FC<CustomLinkProps> = (props) => {
    return (
        <Link
            href={props.href}
        >
            <button className="group transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-lg">
                <div className="flex rounded-full transition duration-300 hover:shadow-xl">
                    <span>
                        {props.title}
                    </span>
                    <span className="ps-3">
                        &#8599;
                    </span>
                </div>
            </button>
        </Link>
    );
}

export default CustomLink;