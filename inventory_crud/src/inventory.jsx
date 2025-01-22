import InventoryItem from "./inventory_item";
import "./inventory.css"

function Inventory({items, deleteItemCallback}){

    return (
        <section id="itemList">
            <h1>Inventory</h1>
            {items.length === 0 && <p style={{color: "red"}}>No items in inventory</p>}
            <ul >
                {/* <InventoryItem itemName={"First"} qty={5} price={20} deleteCallback={()=>console.log("delete")}/>
                 */}
                 {items.map((item) => (
                    <InventoryItem 
                        key={item.id} 
                        itemID={item.id}
                        itemName={item.name} s
                        qty={item.qty} 
                        price={item.price} 
                        deleteItemCallback={deleteItemCallback}
                    />
                 ))}
            </ul>
        </section>
    )
}

export default Inventory;