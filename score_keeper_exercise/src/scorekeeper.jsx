import { useState } from "react";
import { v4 as uuid } from "uuid";
import Li_Ele from "./li_ele";

function ScoreKeeper({numPlayers, target}){

    //arr of objects with each object containing id, score
    const setInitScores = ()=> Array.from({length:numPlayers}, () => (
        {
            id: uuid(),
            score: 0
        }
    ))
    
    const [scores, setScores] = useState(setInitScores)
    const hasWinner = scores.some((ele) => ele.score>=target)

    function ResetScores(){
        const reinit_scores = Array.from({length:numPlayers}, () => (
            {
                id: uuid(),
                score: 0
            }
        ))
        setScores(reinit_scores)
    }

    return (
        <>
            <ul>
                {scores.map((score_ele) => (
                    <Li_Ele 
                        key={score_ele.id} 
                        score_id={score_ele.id} 
                        playerScore={score_ele.score} 
                        target={target} 
                        scores={scores} 
                        setScores={setScores}
                        hasWinner={hasWinner}
                    />
                ))}
            </ul>
            <button onClick={ResetScores}>Reset</button>
        </>
    )
}

export default ScoreKeeper;