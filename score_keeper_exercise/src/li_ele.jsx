function Li_Ele({score_id, playerScore, target, scores, setScores, hasWinner}){
    // console.log(score_id)
    // for (let score of scores){
    //     console.log(score)
    // }
    function updateScore(score_id){
        const new_scores = scores.map((score_ele) =>{
            if(score_id == score_ele.id && score_ele.score < target)
                return {
                    ...score_ele,
                    score: score_ele.score+1
                }
            else
                return score_ele;
        })
        setScores(new_scores)
    }
    return (
        <li>
            <h2 style={{display: "inline-block"}}>Player{score_id} : {playerScore} </h2>
            <button 
                onClick={()=>updateScore(score_id)}
                disabled={hasWinner}
            >+1</button>
            {playerScore === target ? <h3 style={{display: "inline-block"}}> Winner!!!!</h3> : null}
        </li>
    )
}

export default Li_Ele;