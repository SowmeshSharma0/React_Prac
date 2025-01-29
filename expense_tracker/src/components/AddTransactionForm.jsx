
import { StyledAddTransactionForm } from "./styles/AddTransactionForm.styled"

function AddTransactionForm() {

  return (
    <StyledAddTransactionForm>
      <h2>Add New Transaction</h2>
      <form action="">
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title"/>

        <label htmlFor="amount">Amount (negative - expense; positive - income)</label>
        <input type="number" name="amount" id="amount"/>

        <label htmlFor="description">Description</label>
        <input type="text" name="description" id="description"/>
        
        <button type="submit">Add transaction</button>
      </form>
    </StyledAddTransactionForm>
  )
}

export default AddTransactionForm
