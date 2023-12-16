import { useLayoutEffect, useState } from "react"

const useTheme = () => {
    const storage = localStorage.getItem('theme')
    const [theme, setTheme] = useState(storage || 'dark')

    useLayoutEffect(() => {
        localStorage.setItem('theme', theme)
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])

    return {
        theme, 
        setTheme
    }
}

export default useTheme