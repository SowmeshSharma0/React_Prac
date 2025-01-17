import PropertyItem from "./property";


function PropertyListing({properties}){
    console.log(properties)
    const all_properties = properties.map((property)=>(
        <PropertyItem key={property.id} name={property.name} rating={property.rating} price={property.price}/>
    ))
    return (
        <div >
            {all_properties}
        </div>
    )
}

export default PropertyListing;