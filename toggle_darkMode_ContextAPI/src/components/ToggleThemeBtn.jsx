import { useContext } from "react"
import { ThemeContext } from "../contexts/theme"
import "./styles/ToggleThemeBtn.css"

function ToggleThemeBtn() {
  const {dark, toggle} = useContext(ThemeContext)

  return (
    <button 
      className={dark? `toggle-btn-dark` : `toggle-btn`}
      onClick={toggle}
    >
        Toggle Theme
    </button>
  )
}

export default ToggleThemeBtn
