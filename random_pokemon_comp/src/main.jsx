import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PokemonCard from './pokemon_Card'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PokemonCard/>
  </StrictMode>,
)
