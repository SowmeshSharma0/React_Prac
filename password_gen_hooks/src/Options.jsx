import "./Options.css";

function Options({ length, hasNumber, hasSpecialChar, setLength, setHasNumber, setHasSpecialChar }) {
  return (
    <div className="options">
        <input 
            type="range"
            min="6"
            max="20"
            value={length}
            id="slider"
            name="length"
            onChange={(e) => setLength(e.target.value)}
        />
        <label htmlFor="slider">Length: </label>
        <span>{length}</span>
        <input 
            type="checkbox"
            id="hasNum"
            name="hasNumber"
            value={hasNumber}
            onChange={(e) => setHasNumber(e.target.checked)}
        />
        <label htmlFor="hasNum">hasNumber</label>
        <input 
            type="checkbox"
            id="hasSpecialChar"
            name="hasSpecialChar"
            value={hasSpecialChar}
            onChange={(e) => setHasSpecialChar(e.target.checked)}
        />
        <label htmlFor="hasSpecialChar">hasSpecialCharacter</label>
    </div>
  )
}

export default Options
