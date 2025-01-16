import "./pokemon_card.css"

function genRand(minR, maxR){
  return Math.floor(Math.random()* (maxR-minR) ) + minR;
}
function PokemonCard(){
  const base_url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
  const poke_number = genRand(1, 1000)
  return (
    <div className="pokemon_card">
      <h1>Pokemon {poke_number}</h1>
      <img src={`${base_url}${poke_number}.png`} alt="" />
    </div>
  )
}

export default PokemonCard;