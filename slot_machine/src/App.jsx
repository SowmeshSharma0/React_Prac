import "./App.css"

function App({num1, num2, num3}){
  const result = num1 === num2 && num2==num3
  return (
    <>
    <h1>{num1} {num2} {num3}</h1>
    {result === true ? <h2 style={{color: "green"}}>You Win</h2 > : <h2 style={{color: "red"}}>You Lose</h2>}
    {result === true ? <h3>Congrats!</h3> : null}
    </>
  )
}

export default App;