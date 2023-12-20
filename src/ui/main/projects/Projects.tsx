import { FC } from 'react'
import ProjectCard, { ProjectCardType } from './ProjectCard'
import { projects } from '../../../../projects'
// import projects from '../../../../projects'


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
            grid-cols-2
            gap-x-12
            gap-y-4
            '>
                {projects.map(project => <ProjectCard {...project} />)}
            </div>
        </div>
    </section>
}

export default Projects

// grid
// gap - 4
// max - [550px]: grid - cols - 1
// max - [900px]: grid - cols - 3
// grid - cols - 4