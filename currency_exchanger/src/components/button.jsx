import "./button.css"

function Button({str, onClick}) {
  return (
    <button className="Button" onClick={onClick}>
      {str}
    </button>
  )
}

export default Button
