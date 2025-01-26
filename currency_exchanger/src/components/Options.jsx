
function Options({options, selectedOption, setCurrency}) {
  return (
    <select value={selectedOption} onChange={(e) => setCurrency(e.target.value)}>
        {options.map((currency) => <option key={currency}>{currency}</option>)}
    </select>
  )
}

export default Options
