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
    bg-[#f9f9f9]
    '>
        <Container
            classNames='
            flex 
            justify-center
            '
        >
            <ProjectCard />
        </Container>
    </section>
}

export default Projects