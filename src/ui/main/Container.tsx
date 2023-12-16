import { FC, PropsWithChildren } from 'react'

const Container: FC<PropsWithChildren<{classNames?: string}>> = ({ classNames, children }) => {
    return <div className={`
        ${classNames}
        `}>
        {children}
    </div>
}
// const Container: FC<PropsWithChildren<{classNames?: string}>> = ({ classNames, children }) => {
//     return <div className={`
//         max-w-[900px]
//         w-full
//         ${classNames}
//         `}>
//         {children}
//     </div>
// }

export default Container