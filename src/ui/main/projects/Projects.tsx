import { FC } from 'react'
import ProjectCard from './ProjectCard'
import Container from '../Container'

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
        <Container
            classNames='
            grid
            grid-cols-2
            gap-8
            max-[550px]:grid-cols-1
            min-[900px]:grid-cols-3
            '
        >
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </Container>
    </section>
}

export default Projects