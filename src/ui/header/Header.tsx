import { FC } from 'react'
import useTheme from '../../../hooks/useTheme'

const Header: FC = () => {
    const { theme, setTheme } = useTheme()
    return <header className="
            w-full
            fixed
            flex 
            justify-between 
            items-center 
            bg-[--port-primary-second]
            backdrop-blur-sm
            py-5
            px-16
            font-semibold 
            text-[18px] 
            shadow-[0_0_10px_rgb(0,0,0,.09)]
            text-[--port-font-main]
            transition-[background]
            duration-300
            ">
        <div className="">
            manne
        </div>
        <nav className="flex items-center">
            <button
                className='mr-4'
                onClick={() => setTheme(prev => prev == 'dark' ? 'light' : 'dark')}>
                {theme == "dark" ?
                    <svg width={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    :
                    <svg width={20}  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z" stroke='#000' stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                }
            </button>
            <a className="mr-4 font-semibold" href="">About</a>
            <a className="mr-4 font-semibold" href="">Projects</a>
            <a className="font-semibold" href="">Contact</a>
        </nav>
    </header>
}

export default Header