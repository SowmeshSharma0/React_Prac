import "./styles/ToggleThemeBtn.css"

function ToggleThemeBtn({handleToggle, Dark}) {
  return (
    <button 
      className={Dark? `toggle-btn-dark` : `toggle-btn`}
      onClick={handleToggle}
    >
        Toggle Theme
    </button>
  )
}

export default ToggleThemeBtn
