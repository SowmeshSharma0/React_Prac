import "./inventory_item.css"

export default function InventoryItem({itemID, itemName, qty, price, deleteItemCallback}){
    return (
        <li className="list_item">
            <div>
                <p><b>{qty}</b> items of <b>{itemName}</b> of price <b>{price}</b></p>
                <button onClick={() => deleteItemCallback(itemID)}>-</button>
            </div>
        </li>
    )
}