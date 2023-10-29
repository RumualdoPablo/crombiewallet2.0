"use client"
import { useEffect } from 'react'
import { useTheme } from 'next-themes'

const ThemeSwitch = () => {
    const { theme, setTheme } = useTheme()

    const handleThemeChange = (newTheme: string) => {
        if (newTheme === 'dark') {
            document.documentElement.style.backgroundColor = '#000'
            document.documentElement.style.color = '#fff'
            setTimeout(() => {
                setTheme(newTheme)
            }, 300); // transicion lenta de 0.3s
        } else {
            setTheme(newTheme)
        }
    }

    useEffect(() => {
        document.documentElement.style.backgroundColor = theme === 'dark' ? '#000' : '#fff'
        document.documentElement.style.color = theme === 'dark' ? '#fff' : '#000'
    }, [theme])

    return (
        <select value={theme} onChange={(e) => handleThemeChange(e.target.value)}>
            <option value="system">System</option>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
        </select>
    )
}

export default ThemeSwitch
