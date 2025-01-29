
import { useState } from "react"
import { StyledAddTransactionForm } from "./styles/AddTransactionForm.styled"

function AddTransactionForm({addToTransList}) {
  const [FormData, setFormData] = useState({title:"", amount:0, description: ""})

  const handleSubmit = (e) => {
    e.preventDefault()
    const TransData = {
      ...FormData,
    }
    TransData.id = crypto.randomUUID()
    TransData.type = (TransData.amount<0) ? 'E' : 'I'
    
    addToTransList(TransData)
    setFormData({title:"", amount:0, description: ""})
  }

  const handleOnChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...FormData,
      [name] : value
    })
  }

  return (
    <StyledAddTransactionForm>
      <h2>Add New Transaction</h2>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input 
          type="text" 
          name="title" 
          id="title"
          onChange={handleOnChange}
          value={FormData.title}
        />

        <label htmlFor="amount">Amount (negative - expense; positive - income)</label>
        <input 
          type="number" 
          name="amount" 
          id="amount"
          onChange={handleOnChange}
          value={FormData.amount}
        />

        <label htmlFor="description">Description</label>
        <input 
          type="text" 
          name="description" 
          id="description"
          onChange={handleOnChange}
          value={FormData.description}
        />
        
        <button type="submit">Add transaction</button>
      </form>
    </StyledAddTransactionForm>
  )
}

export default AddTransactionForm
