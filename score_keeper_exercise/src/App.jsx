import './App.css'
import ScoreKeeper from './scorekeeper'

function App() {

  return (
    <>
      <h1>Scores Game</h1>
      <ScoreKeeper numPlayers={5} target={10}/>
    </>
  )
}

export default App
