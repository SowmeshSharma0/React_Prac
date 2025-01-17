import "./property.css"

function PropertyItem({name, rating, price}){
    return (
        <div className="property_div">
            <h2>{name}</h2>
            <h3>{price} a night</h3>
            <h3>{rating} Stars</h3>
        </div>
    )
}

export default PropertyItem;