import clsx from "clsx";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import Image from "next/image";
interface IButtonProps {
    path: string;
    onClick: () => void;
    isClicked?: boolean;
    href: Url;
}

const Button: React.FC<IButtonProps> = (props) => {
    return (
        <Link href={props.href}>
                <button
                    className={
                        clsx("h-14 w-14 flex items-center justify-center rounded-full transition duration-300 hover:shadow-lg",
                            props.isClicked ? "bg-white" : "bg-custom-gray"
                        )
                    }
                    onClick={props.onClick}
                >
                    <Image width={500} src={props.path} alt="Home Button" />
                </button>
        </Link>

    );
}

export default Button;