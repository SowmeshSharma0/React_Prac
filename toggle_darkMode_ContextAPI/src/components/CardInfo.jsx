import AddToCartBtn from "./AddToCartBtn"
import StarRating from "./StarRating"
import "./styles/CardInfo.css"

function CardInfo() {
  return (
    <div className="card-info">
        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, adipisci.</h1>
        <StarRating/>
        <span>$599</span>
        <AddToCartBtn/>
    </div>
  )
}

export default CardInfo
