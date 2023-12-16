import { FC } from 'react'

const Presentation: FC = () => {
    return <section className="
        w-screen
        h-screen
        flex
        items-center
        justify-center
        flex-col
        bg-[#f9f9f9]
    ">
        <div className="flex
            flex-col
        ">
            <h1 className="
                w-[600px]
                text-[48px]
                font-bold
                text-[#2d2e32]
                leading-[120%]
            ">
                Frontend Developer
            </h1>
            <h2 className="font-medium 
                text-[18px]
                text-[#7b7b7b]
            ">
                Hi, I'm Maxim. I'm a Junior Frontend React Developer 👋🏼
            </h2>
        </div>
        <div className="flex items-center">
            <p className="mr-4 text-[18px]">Stack:</p>
            <ul className="flex items-center">
                <li className=" w-12 h-12 rounded-[8px] bg-black mr-2">
                    <svg className='flex items-start' width={48} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g><title>file_type_html</title><polygon points="5.902 27.201 3.655 2 28.345 2 26.095 27.197 15.985 30 5.902 27.201" style={{ fill: "#e44f26" }}></polygon><polygon points="16 27.858 24.17 25.593 26.092 4.061 16 4.061 16 27.858" style={{ fill: '#f1662a' }}></polygon><polygon points="16 13.407 11.91 13.407 11.628 10.242 16 10.242 16 7.151 15.989 7.151 8.25 7.151 8.324 7.981 9.083 16.498 16 16.498 16 13.407" style={{ fill: "#ebebeb" }}></polygon><polygon points="16 21.434 15.986 21.438 12.544 20.509 12.324 18.044 10.651 18.044 9.221 18.044 9.654 22.896 15.986 24.654 16 24.65 16 21.434" style={{ fill: "#ebebeb" }}></polygon><polygon points="15.989 13.407 15.989 16.498 19.795 16.498 19.437 20.507 15.989 21.437 15.989 24.653 22.326 22.896 22.372 22.374 23.098 14.237 23.174 13.407 22.341 13.407 15.989 13.407" style={{ fill: "#fff" }}></polygon><polygon points="15.989 7.151 15.989 9.071 15.989 10.235 15.989 10.242 23.445 10.242 23.445 10.242 23.455 10.242 23.517 9.548 23.658 7.981 23.732 7.151 15.989 7.151" style={{ fill: "#fff" }}></polygon></g></svg>
                </li>
                <li className=" w-12 h-12 rounded-[8px] bg-black mr-2">
                    <svg className='flex items-start' width={48} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8"></path> <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"></path> <path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="white"></path> </g></svg>
                </li>
                <li className="w-12 h-12 rounded-[8px] bg-black mr-2">

                </li>
                <li className="w-12 h-12 rounded-[8px] bg-black">

                </li>
            </ul>
        </div>
    </section>
}

export default Presentation