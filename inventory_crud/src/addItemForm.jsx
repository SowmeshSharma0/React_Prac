//item : id, name, qty, price

import { useState } from "react"
import {v4 as uuid} from "uuid";
import "./addItemForm.css"


export default function AddItemForm({addItemCallback}){
    const [formData, setFormData] = useState({name:"", qty:0, price:0})

    const handleSubmit = () => {
        const data_to_add = {...formData}
        data_to_add["id"] = uuid()

        addItemCallback(data_to_add)
        setFormData({name:"", qty:0, price:0})
    }

    const handleChange = (evt) => {
        const chagedField = evt.target.name;
        const chagedValue = evt.target.value;

        setFormData(formData => {
            return {
                ...formData,
            [chagedField] : chagedValue
            }
        })
    }
 
    return (
        <section id="addItemForm">
            <h2>Add Item</h2>
            <label htmlFor="pname">Product name : </label>
            <input 
                type="text"
                placeholder="pname"
                name="name"
                id="pname"
                value={formData.name}
                onChange={handleChange}
            />
            <br />
            <label htmlFor="qty">Quantity : </label>
            <input 
                type="number"
                placeholder="qty"
                name="qty"
                id="qty"
                value={formData.qty}
                onChange={handleChange}
            />
            <br />
            <label htmlFor="price">Price : </label>
            <input 
                type="number"
                placeholder="price"
                name="price"
                id="price"
                value={formData.price}
                onChange={handleChange}
            />
            <br />
            <button onClick={handleSubmit}>Submit</button>
        </section>
    )
}