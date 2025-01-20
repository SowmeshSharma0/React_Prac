import { useState } from "react";
// import { v4 as uuid } from "uuid";
// import Li_Ele from "./li_ele";

function ScoreKeeper({numPlayers, target}){

    const setInitScores = ()=> new Array(numPlayers).fill(0)
    const [scores, setScores] = useState(setInitScores)

    function updateScore(index){
        const new_scores = scores.map((c, ind) =>{
            if(index == ind && c < target)
                return c+1;
            else
                return c;
        })
        setScores(new_scores)
    }

    function ResetScores(){
        const reinit_scores = new Array(numPlayers).fill(0)
        setScores(reinit_scores)
    }

    return (
        <>
            <ul>
                {scores.map((score,index) => (
                    <li key={index}>
                        <h2 style={{display: "inline-block"}}>Player{index + 1} : {score} </h2>
                        <button onClick={()=>updateScore(index) } className="increment">+1</button>
                        {score === target ? <h3 style={{display: "inline-block"}}> Winner!!!!</h3> : null}
                    </li>
                    // <Li_Ele key={index} ele_id={index} playerScore={score}/>
                ))}
            </ul>
            <button onClick={ResetScores}>Reset</button>
        </>
    )
}

export default ScoreKeeper;