import { FC } from 'react'
// shadow-[0_7px_12px_rgba(0,0,0,.12)]
// border-[1px]
// border-[#444]
// hover:shadow-[0_0_12px_#f4eeff]
type Stack = "React TS" | "React JS" | "Tailwind" | "SCSS" | "CSS" | "Next" | ""

export type ProjectCardType = {
    id: number
    thumbnail: string
    app_name: string
    description: string
    stack: Stack[]
    link_git?: string
    link_web?: string
    color: string
    tr?: number
}

const ProjectCard: FC<ProjectCardType> = ({
    app_name,
    description,
    link_git,
    link_web,
    stack,
    thumbnail,
    tr = 60
}) => {

    const translatey = {
        52: 'group-hover:-translate-y-[52px]',
        112: 'group-hover:-translate-y-[112px]',
    }
    return !!link_web ? <a href={link_web} target='blank' className={`
    flex 
    items-center
    overflow-hidden
    w-full
    p-3
    rounded-[12px]
    transition-[box-shadow,transform,background]
    project-card
    hover:bg-[--hover-bg]
    group
    `}>
        <div className='
        max-w-[240px]
        max-h-[140px]
        h-full
        rounded-[8px]
        overflow-hidden
        mr-6
        '>
            {!!thumbnail.length ? <img className={`
            shadow-[0_7px_12px_rgba(0,0,0,.12)]
            rounded-[8px] 
            object-cover
            w-full
            ${!!translatey[tr] ? translatey[tr] : ''}
            transition-[transform]
            duration-[1500ms]
            overflow-hidden    
            `}
                src={thumbnail} alt="" />
                : <div className='
            bg-slate-200
            w-[240px]
            h-[135px]
            rounded-[8px] 
            animate-pulse
            '
                />}
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
            {!!app_name ? <h3 className='
            font-medium 
            text-[18px]
            '>
                {app_name}
            </h3>
                :
                <div className='
            h-[20px]
            w-full
            mb-[7px]
            rounded-[8px] 
            animate-pulse
            bg-slate-200
            '/>
            }

            {!!description ? <p className='
            text-[14px]
            mb-4
            '>
                {description}
            </p>
                :
                <div className='
            h-[20px]
            w-28
            mb-4
            rounded-[8px] 
            animate-pulse
            bg-slate-200
            '/>
            }

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
                    <a href={link_web} className='
                    px-3.5
                    py-[3px]
                    bg-[--port-primary-bg]
                    rounded-[20px]
                    mr-4
                    font-medium
                    shadow-[0_0_12px_rgba(0,0,0,.12)]
                    border-[1px]
                    border-[#333]
                    ' target='blank'>
                        Link
                    </a>
                </div>
            </div>
        </div>
    </a>
        :
        <div className={`
    flex 
    items-center
    overflow-hidden
    w-full
    p-3
    rounded-[12px]
    transition-[box-shadow,transform,background]
    project-card
    hover:bg-[--hover-bg]
    group
    `}>
            <div className='
        max-w-[240px]
        max-h-[140px]
        h-full
        rounded-[8px]
        overflow-hidden
        mr-6
        '>
                {!!thumbnail.length ? <img className={`
            shadow-[0_7px_12px_rgba(0,0,0,.12)]
            rounded-[8px] 
            object-cover
            w-full
            ${!!translatey[tr] ? translatey[tr] : ''}
            transition-[transform]
            duration-[1500ms]
            overflow-hidden    
            `}
                    src={thumbnail} alt="" />
                    : <div className='
            bg-slate-200
            w-[240px]
            h-[135px]
            rounded-[8px] 
            animate-pulse
            '
                    />}
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
                {!!app_name ? <h3 className='
            font-medium 
            text-[18px]
            '>
                    {app_name}
                </h3>
                    :
                    <div className='
            h-[20px]
            w-full
            mb-[7px]
            rounded-[8px] 
            animate-pulse
            bg-slate-200
            '/>
                }

                {!!description ? <p className='
            text-[14px]
            mb-4
            '>
                    {description}
                </p>
                    :
                    <div className='
            h-[20px]
            w-28
            mb-4
            rounded-[8px] 
            animate-pulse
            bg-slate-200
            '/>
                }

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
                        <a href={link_web} className='
                    px-3.5
                    py-[3px]
                    bg-[--port-primary-bg]
                    rounded-[20px]
                    mr-4
                    font-medium
                    shadow-[0_0_12px_rgba(0,0,0,.12)]
                    border-[1px]
                    border-[#333]
                    ' target='blank'>
                            Link
                        </a>
                    </div>
                </div>
            </div>
        </div>
}


export default ProjectCard