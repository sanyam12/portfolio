import { linkedInLink, resumeLink } from "@/constants/links";
import CustomLink from "./customLink";

export default function Card() {
    return (
        <div className='flex flex-col items-center justify-center w-full bg-custom-gray rounded-2xl shadow-2xl mt-[6vh] py-[3vh] px-3 sm:px-5'>
            <p className='text-lg sm:text-xl'>
                I am actively seeking part-time engineering roles that revolve around frontend development.I am proficient in Android, Flutter and Next.js / React.js.
            </p>
            <p className="pt-[1vh] text-lg sm:text-xl">
                I am also open to full-time opportunities starting in 2025. I am eager to contribute and collaborate with your team. Please feel free to reach out to me.
            </p>
            <div className='flex flex-row w-full items-center justify-start pt-[1vh] space-x-5'>
                <CustomLink title="Resume" href={resumeLink}/>
                <CustomLink title="LinkedIn" href={linkedInLink}/>
            </div>

        </div>
    );
}