import ColorGrid from "./ColorGrid"
import getRand from "./gen_rand";

function ColorBoxGrid({colors}){
    const grid_ele = Array.from({length : 25}).map((_,index) => (
        <ColorGrid colors={colors} key={index}/>
    ))
    return (
        <>
            {grid_ele}
        </>
    )
}

export default ColorBoxGrid;