import { useState, useEffect } from "react"
import getData from "../services/getCurrencyinfo.js"

function useOptions(FromCurrency) {
    console.log(FromCurrency)
    const [Options, setOptions] = useState({})

    useEffect(() => {
        getData(FromCurrency).then(data => setOptions(data[FromCurrency]))   
    }, [FromCurrency]);
    return Options
}

export default useOptions
