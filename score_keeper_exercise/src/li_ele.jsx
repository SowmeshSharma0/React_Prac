function Li_Ele({ele_id, playerScore, target, scores, setScores}){
    function updateScore(index){
        const new_scores = scores.map((c, ind) =>{
            if(index == ind && c < target)
                return c+1;
            else
                return c;
        })
        setScores(new_scores)
    }
    return (
        <li key={ele_id}>
            <h2 style={{display: "inline-block"}}>Player{ele_id + 1} : {playerScore} </h2>
            <button onClick={()=>updateScore(ele_id) } className="increment">+1</button>
            {playerScore === target ? <h3 style={{display: "inline-block"}}> Winner!!!!</h3> : null}
        </li>
    )
}

export default Li_Ele;