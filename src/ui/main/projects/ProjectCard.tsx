import { FC } from 'react'
// shadow-[0_7px_12px_rgba(0,0,0,.12)]
// border-[1px]
// border-[#444]
const ProjectCard: FC = () => {
    return <div className='
    flex 
    flex-col
    items-center

    w-full
    p-3
    rounded-[12px]
    transition-[box-shadow,transform,background]
    hover:shadow-[0_0_12px_rgba(0,0,0,.12)]
    hover:-translate-y-2
    hover:bg-[--hover-bg]
    '>
        <div className='
        max-w-[280px]
        w-full
        '>
            <img className='
            shadow-[0_7px_12px_rgba(0,0,0,.12)]
            rounded-[8px] 
            object-cover
            w-full
            h-full
            overflow-hidden    
            ' src="https://www.codewithantonio.com/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F34030399-8018-4b2b-928d-b978bfe20202-5k5p0a.png&w=2048&q=75" alt="" />
        </div>
        <div className='
        flex 
        flex-col 
        items-start
        justify-between
        w-full
        h-full
        py-3
        '>
            <h3 className='
            font-medium 
            text-[18px]
            mb-4
            '>
                Typing Test
            </h3>
            <div className='flex flex-col '>
                <ul className='
                flex 
                mb-1
                text-[13px]

                '>
                    <li className='
                    px-3.5
                    py-[2px]
                    rounded-[20px]
                    bg-[--port-primary-bg]
                    mr-4
                    font-medium
                    shadow-[0_0_12px_rgba(0,0,0,.12)]
                    border-[1px]
                    border-[#333]
                    '>
                        React TS
                    </li>
                </ul>
                <div className='
                mt-1
                text-[13px]
                '>
                    <button className='
                    px-3.5
                    py-[2px]
                    bg-[--port-primary-bg]
                    rounded-[20px]
                    mr-4
                    font-medium
                    shadow-[0_0_12px_rgba(0,0,0,.12)]
                    border-[1px]
                    border-[#333]
                    '>
                        Link
                    </button>
                </div>
            </div>
        </div>
    </div>
}

export default ProjectCard