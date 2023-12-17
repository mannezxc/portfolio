import { FC } from 'react'
// shadow-[0_7px_12px_rgba(0,0,0,.12)]
// border-[1px]
// border-[#444]
// hover:shadow-[0_0_12px_#f4eeff]
type Stack = "React TS" | "React JS" | "Tailwind" | "SCSS" | "CSS" | "Next" | ""

export type ProjectCardType = {
    thumbnail: string
    app_name: string
    description: string
    stack: Stack[]
    link_git: string
    link_web: string
    color: string
}



const ProjectCard: FC<ProjectCardType> = ({
    app_name,
    description,
    link_git,
    link_web,
    stack,
    thumbnail,
    color
}) => {
    return <div className={`
    flex 
    flex-col
    items-center
    overflow-hidden
    w-full
    p-3
    rounded-[12px]
    transition-[box-shadow,transform,background]
    project-card
    hover:bg-[#f1f1f1]
    hover:-translate-y-2
    `}>
        <div className='
        max-w-[240px]
        w-full
        '>
            <img className='
            shadow-[0_7px_12px_rgba(0,0,0,.12)]
            rounded-[8px] 
            object-cover
            w-full
            h-full
            overflow-hidden    
            ' src={thumbnail} alt="" />
        </div>
        <div className='
        flex 
        flex-col 
        items-start
        justify-between
        w-full
        h-full
        py-3
        px-1
        '>
            <h3 className='
            font-medium 
            text-[18px]
            '>
                {app_name}
            </h3>
            <p className='
            text-[14px]
            mb-4
            '>
                {description}
            </p>
            <div className='
            flex 
            flex-col 
            
            '>
                <ul className='
                flex 
                mb-1
                text-[12px]
                overflow-x-auto
                whitespace-nowrap
                scrolbar
                clamp
                '>
                    {stack?.map(item => <li className='
                    px-3
                    py-[2px]
                    rounded-[20px]
                    bg-[--port-primary-bg]
                    mr-1
                    font-medium
                    shadow-[0_0_12px_rgba(0,0,0,.12)]
                    border-[1px]
                    border-[#333]
                    '>
                        {item}
                    </li>
                    )}
                </ul>
                <div className='
                mt-1
                text-[12px]
                '>
                    <a href={link_git} className='
                    px-3.5
                    py-[3px]
                    bg-[--port-primary-bg]
                    rounded-[20px]
                    mr-1
                    font-medium
                    shadow-[0_0_12px_rgba(0,0,0,.12)]
                    border-[1px]
                    border-[#333]
                    '>
                        GitHub
                    </a>
                    <a href={link_git} className='
                    px-3.5
                    py-[3px]
                    bg-[--port-primary-bg]
                    rounded-[20px]
                    mr-4
                    font-medium
                    shadow-[0_0_12px_rgba(0,0,0,.12)]
                    border-[1px]
                    border-[#333]
                    '>
                        Link
                    </a>
                </div>
            </div>
        </div>
    </div>
}

export default ProjectCard