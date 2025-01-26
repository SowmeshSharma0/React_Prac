import "./currency_container.css";
import Options from "./Options";

function CurrencyContainer({
  purposeStr,
  value,
  options,
  selectedOption,
  isDisabled,
  setVal,
  setCurrency
}) {
  const handleChange = (e) => {
    setVal(e.target.value)
  }

  return (
    <div className="CurrencyContainer">
      <div>
        <span>{purposeStr}</span>
        <span>Currency Type</span>
      </div>
      <div>
        <input 
          type="number" 
          value={value} 
          disabled={isDisabled} 
          onChange={handleChange}/>
        <Options options={options} selectedOption={selectedOption} setCurrency={setCurrency}/>
      </div>
    </div>
  )
}

export default CurrencyContainer
