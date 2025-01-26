import {Button, CurrencyContainer} from "./components/index.js"
import './exchanger.css';
import getData from "./services/getCurrencyinfo.js";

import { useState, useEffect } from "react";

function Exchanger() {
  const [FromVal, setFromVal] = useState(0)
  const [ToVal, setToVal] = useState(0)
  const [FromCurrency, setFromCurrency] = useState("usd")
  const [ToCurrency, setToCurrency] = useState("inr")
  const [Options, setOptions] = useState({})

  // getData("usd").then(data => console.log(data))
  useEffect(() => {
    getData(FromCurrency).then(data => setOptions(data[FromCurrency]))   
  }, [FromCurrency]);

  const handleClick = () => {
    console.log(Options)
    setToVal(FromVal * Options[ToCurrency])
  }

  return (
    <div className="Exchanger">
        <CurrencyContainer purposeStr={"from"} value={FromVal} selectedOption={FromCurrency} options={Object.keys(Options)} isDisabled={false} setVal={setFromVal} setCurrency={setFromCurrency}/>
        <Button str={"Swap"}/>
        <CurrencyContainer purposeStr={"to"} value={ToVal} selectedOption={ToCurrency} options={Object.keys(Options)} isDisabled={true} setVal={setToVal} setCurrency={setToCurrency}/>
        <Button str={"Convert INR to USD"} onClick={handleClick}/>
    </div>
  )
}

export default Exchanger
