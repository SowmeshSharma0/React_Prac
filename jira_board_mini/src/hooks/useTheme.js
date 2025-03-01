import { useContext, useEffect } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const useTheme = () => {
  const {isDark, setIsDark} = useContext(ThemeContext)

  const toggleTheme = () => setIsDark(!isDark)

  useEffect(() => {
    const app_container = document.querySelector('html')
    if(isDark){
      app_container.classList.remove('light')
      app_container.classList.add('dark')
    }
    else{
      app_container.classList.remove('dark')
      app_container.classList.add('light')
    }
  }, [isDark])

  return {isDark, toggleTheme}
}

export default useTheme
