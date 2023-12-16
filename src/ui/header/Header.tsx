import { FC } from 'react'

const Header: FC = () => {
    return <header className="
            w-full
            fixed
            bg-white
            flex 
            justify-between 
            items-center 
            py-6
            px-16
            font-semibold 
            text-[20px] 
            shadow-[0_0_10px_rgb(0,0,0,.09)]">
        <div className="">
            manne
        </div>
        <nav className="">
            <a className="mr-4 " href="">About</a>
            <a className="mr-4 " href="">Projects</a>
            <a className="" href="">Contact</a>
        </nav>
    </header>
}

export default Header