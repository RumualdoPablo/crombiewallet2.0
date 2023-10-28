"use client"

import { ThemeProvider } from 'next-themes';

const ThemeContext = ({ children }: { children: React.ReactNode; }) => {
    return (
        <ThemeProvider>{children}</ThemeProvider>
    )
}

export default ThemeContext