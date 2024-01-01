import Card from "@/components/card";
import CustomLink from "@/components/customLink";
import ProjectCard from "@/components/projectCard";
import { ILanguageData, languagesData } from "@/constants/languages";
import { ILibrariesData, librariesData } from "@/constants/libraries";
import { githubLink, linkedInLink, mailLink, resumeLink, twitterLink } from "@/constants/links";
import projectsData, { IProjectData } from "@/constants/projects";
import { IToolsData, toolsData } from "@/constants/tools";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className='w-full sm:w-3/4 md:w-2/3 lg:w-2/3 px-[4vw] sm:p-0 flex flex-col items-center justify-center'>
        <h1 className="text-6xl sm:text-9xl font-bold pt-[25vh] text-center">Hi. I&apos;m Sanyam.</h1>
        <h2 className='text-6xl sm:text-9xlfont-bold text-center'>A Fronend Developer.</h2>
        <p className='text-center pt-[9vh] text-lg sm:text-2xl'>Hello! I&apos;m am 3rd Year Student at NIT Jalandhar focused on building scalable products with a strong emphasis on user experience, developer experience, and meaningful impact.</p>
        <div className="w-full">
          <Card />

        </div>
        <div className="flex w-full justify-start">
          <h3 className="pt-[6vh] text-5xl font-bold">Projects</h3>
        </div>
        <div className="w-full inline-grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {
            projectsData.map((project: IProjectData) => {
              return (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  year={project.year}
                  image={project.image}
                  link={project.link}
                />
              )
            })
          }

        </div>
        <div className="flex w-full justify-start pt-[5vh]">
          <h3 className="text-5xl font-bold">Languages and Tools</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 pb-[15vh] place-content-start w-full">
          <div className="flex flex-col gap-1 pt-[3vh]">
            <div className="flex gap-3 text-xl">
              <Image
                width={24}
                height={24}
                src={"/language.svg"}
                alt="Language Icon"
              />
              <span>Technical Languages</span>
            </div>
            <div className="pt-[1vh] ps-2">
              {
                languagesData.map((language: ILanguageData) => {
                  return (
                    <div key={language.id} className="text-lg">
                      {language.name}
                    </div>
                  )
                })
              }
            </div>


          </div>

          <div className="flex flex-col gap-1 pt-[3vh]">
            <div className="flex gap-3 text-xl">
              <Image
                width={24}
                height={24}
                src={"/lib.svg"}
                alt="library Icon"
              />
              Libraries/Frameworks
            </div>
            <div className="pt-[1vh] ps-2">
              {
                librariesData.map((language: ILibrariesData) => {
                  return (
                    <div key={language.id} className="text-lg">
                      {language.name}
                    </div>
                  )
                })
              }
            </div>

          </div>

          <div className="flex flex-col gap-1 pt-[3vh]">
            <div className="flex gap-3 text-xl">
              <Image
                width={24}
                height={24}
                src={"/tools.svg"}
                alt="software and tools Icon"
              />
              Software, Tools, and Platforms
            </div>
            <div className="pt-[1vh] ps-2">
              {
                toolsData.map((language: IToolsData) => {
                  return (
                    <div key={language.id} className="text-lg">
                      {language.name}
                    </div>
                  )
                })
              }
            </div>

          </div>
        </div>

        <div className="grid grid-cols-2 pb-[15vh] place-content-start w-full pt-[3vh]">
          <div className="flex flex-col gap-1">
            <div className="text-3xl pb-2">
              Elsewhere
            </div>

            <div>
              <CustomLink title="Github" href={githubLink} />
            </div>
            <div>
              <CustomLink title="Twitter" href={twitterLink} />
            </div>

            <div>
              <CustomLink title="LinkedIn" href={linkedInLink} />
            </div>
            <div>
              <CustomLink title="Resume" href={resumeLink} />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-3xl pb-2">
              Contact Me
            </div>

            <div>
              <CustomLink title="Mail" href={mailLink} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
