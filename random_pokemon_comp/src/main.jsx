import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import PokemonCard from './pokemon_Card'
import CardPanel from './pokemon_cards'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CardPanel/>
  </StrictMode>,
)
