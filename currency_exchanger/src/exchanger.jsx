import {Button, CurrencyContainer} from "./components/index.js"
import './exchanger.css';
import useOptions from "./hooks/useOptions.jsx";

import { useState} from "react";

function Exchanger() {
  const [FromVal, setFromVal] = useState(0)
  const [ToVal, setToVal] = useState(0)
  const [FromCurrency, setFromCurrency] = useState("usd")
  const [ToCurrency, setToCurrency] = useState("inr")
  const Options = useOptions(FromCurrency)

  const handleClick = () => {
    console.log(Options)
    setToVal(FromVal * Options[ToCurrency])
  }

  const swapCurrencyTypes = () => {
    setFromCurrency(ToCurrency)
    setToCurrency(FromCurrency)
  }

  return (
    <div className="Exchanger">
        <CurrencyContainer purposeStr={"from"} value={FromVal} selectedOption={FromCurrency} options={Object.keys(Options)} isDisabled={false} setVal={setFromVal} setCurrency={setFromCurrency}/>
        <Button str={"Swap"} onClick={swapCurrencyTypes}/>
        <CurrencyContainer purposeStr={"to"} value={ToVal} selectedOption={ToCurrency} options={Object.keys(Options)} isDisabled={true} setVal={setToVal} setCurrency={setToCurrency}/>
        <Button str={"Convert INR to USD"} onClick={handleClick}/>
    </div>
  )
}

export default Exchanger
