import { FC } from 'react'

const ProjectCard: FC = () => {
    return <div className='
    flex 
    bg-white
    w-full
    p-4
    rounded-[12px]
    shadow-[0_0_10px_rgba(132,132,132,.3)]
    '>
        <div className='
        max-w-[480px]
        w-full
        h-[270px]
        box-content
        pr-12
        '>
            <img className='
            shadow-[0_0_8px_rgb(132,132,132)]
            rounded-[8px] 
            object-contain
            w-full
            h-full
            overflow-hidden    
            ' src="/site.png" alt="" />
        </div>
        <div className='
        flex 
        flex-col 
        items-center
        justify-between
        w-full
        py-3
        '>
            <h3 className='font-semibold 
            text-[20px]
            '>
                Typing Test
            </h3>
            <p className='
            my-2
            text-[18px]
            px-10
            text-center
            '>
                This site provides an opportunity to practice the skills of high-speed and blind printing
            </p>
            <ul className='flex my-2'>
                <li className='
                px-4
                py-2
                rounded-[4px]
                bg-[#f9f9f9]
                mr-2
                '>
                    React TS
                </li>
                <li className='
                px-4
                py-2
                rounded-[4px]
                bg-[#f9f9f9]
                '>
                    Tailwind
                </li>
            </ul>
            <div className='
            mt-2
            '>
                <button className='
                px-4
                py-2
                bg-[#f9f9f9]
                rounded-[4px]
                mr-2
                '>
                    Link
                </button>
                <button className='
                px-4
                py-2
                bg-[#f9f9f9]
                rounded-[4px]
                
                '>
                    Github
                </button>
            </div>
        </div>
    </div>
}

export default ProjectCard