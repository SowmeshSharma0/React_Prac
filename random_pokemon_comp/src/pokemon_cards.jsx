//generates a list of 10 random pokemon cards and shows them
import PokemonCard from "./pokemon_card"
import './pokemon_cards.css'

function CardPanel(){
    const cards = Array.from({ length: 10 }).map((_, index) => (
        <PokemonCard key={index} />
    ));
    return (
        <div className="card_panel_div">
            {cards}
        </div>
    )
}

export default CardPanel;

//div 