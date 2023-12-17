import { FC } from 'react'
import Container from '../Container'

const About: FC = () => {
    return <section className='
    my-4
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
            justify-center
            items-center
        '>
            <p className='max-w-[500px] text-center'>
                Привет, я Максим, программист-самоучка. Я занимаюсь fronted разработкой уже больше 6 месяцев. Помимо фронта я знаю Python.
            </p>
            <div className='
            rounded-[12px]
            shadow-[0_0_1px_0_rgba(0,0,0,.7)]
            p-8
            flex
            flex-col
            items-center

            '>
                <p>
                    Skills
                </p>
                <div className='
                grid
                grid-cols-2
                gap-4
                '>
                    <ul className='
                    flex flex-col items-start
                    '>
                        <li className='mb-4'>Html</li>
                        <li className='mb-4'>CSS</li>
                        <li className=''>React</li>
                    </ul>
                    <ul className='
                    flex flex-col items-start
                    '>
                        <li>Node JS</li>
                        <li>Python</li>
                        <li>Html</li>
                    </ul>
                </div>
            </div>
        </Container>
    </section>
}

export default About