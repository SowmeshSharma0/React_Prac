import { useState } from "react"
import getRand from "./gen_rand"


function ColorGrid({colors}){
    const [color, setColor] = useState(getRand(colors,0,colors.length))
    function changeColor(){
        setColor(getRand(colors,0,colors.length))
    }
    return (
        <div style={{backgroundColor: color, width: "250px", height: "250px"}} onClick={changeColor}> </div>
    )
}

export default ColorGrid;