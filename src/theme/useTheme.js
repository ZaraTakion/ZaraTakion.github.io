import { useEffect, useState } from 'react'

export const useTheme = () => {
  const [theme, setTheme] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () =>
    setTheme(theme === 'dark' ? 'light' : 'dark')

  return { theme, toggleTheme }
}
