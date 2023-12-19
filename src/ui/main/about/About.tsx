import { FC } from 'react'
import Container from '../Container'

const About: FC = () => {
    return <section className='
    py-12
    flex 
    justify-center
    bg-[--port-primary-second]
    text-[--port-font-main]
    transition-[background]
    duration-300
    w-full
    '>
        <Container classNames='
            flex
            flex-col
            justify-center
            items-center
        '>
            <h2 className='
            mb-8
            font-bold
            text-[24px]
            '>
                About
            </h2>
            <div className='
            flex
            justify-center
            items-center
            '>
                <p className='max-w-[500px] text-center'>
                    Привет, меня зовут Максим, я программист-самоучка.
                    Я занимаюсь fronted разработкой уже больше 6 месяцев.
                    За это время я написал множество приложений.
                    До фронтенда я писал ботов на Python.
                </p>
                
            </div>
        </Container>
    </section>
}

export default About