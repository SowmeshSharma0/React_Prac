import { useState } from "react";
// import { v4 as uuid } from "uuid";
import Li_Ele from "./li_ele";

function ScoreKeeper({numPlayers, target}){

    const setInitScores = ()=> new Array(numPlayers).fill(0)
    const [scores, setScores] = useState(setInitScores)

    function ResetScores(){
        const reinit_scores = new Array(numPlayers).fill(0)
        setScores(reinit_scores)
    }

    return (
        <>
            <ul>
                {scores.map((score,index) => (
                    <Li_Ele key={index} ele_id={index} playerScore={score} target={target} scores={scores} setScores={setScores}/>
                ))}
            </ul>
            <button onClick={ResetScores}>Reset</button>
        </>
    )
}

export default ScoreKeeper;