import { FC } from 'react'
import ProjectCard, { ProjectCardType } from './ProjectCard'
import Container from '../Container'

const pdefault: ProjectCardType = {
    thumbnail: "https://www.codewithantonio.com/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F34030399-8018-4b2b-928d-b978bfe20202-5k5p0a.png&w=2048&q=75",
    app_name: "Fullstack Typing",
    description: "typing app",
    stack: ["React TS", "Tailwind"],
    link_git: "/",
    link_web: "/",
    color: 'f4eeff'
}

const Projects: FC = () => {
    return <section className='
    py-16
    px-8
    w-full
    h-full
    flex
    justify-center
    bg-[--port-primary-bg]
    text-[--port-font-main]
    transition-[background]
    duration-300
    '>
        <div
            className='
            flex 
            flex-col
            items-center
            '
        >
            <h2 className='
            mb-8
            font-bold
            text-[24px]
            '>
                Main Projects
            </h2>
            <div className='
            grid
            gap-4
            max-[550px]:grid-cols-1
            max-[900px]:grid-cols-3
            grid-cols-4
            '>
                <ProjectCard {...pdefault} />
                <ProjectCard {...pdefault} />
                <ProjectCard {...pdefault} />
                <ProjectCard {...pdefault} />
                <ProjectCard {...pdefault} />
            </div>
        </div>
    </section>
}

export default Projects