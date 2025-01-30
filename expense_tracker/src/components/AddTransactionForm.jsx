import { useContext,} from "react"
import { StyledAddTransactionForm } from "./styles/AddTransactionForm.styled"
import { GlobalContext, UiActions, TransactionActions} from "../context/GlobalContext"

function AddTransactionForm() {
  const { TransactionDispatch, UiDispatch, UiState} = useContext(GlobalContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    const TransData = {
      ...UiState.formData,
    }
    TransData.id = crypto.randomUUID()
    TransData.type = (TransData.amount<0) ? 'E' : 'I'

    TransactionDispatch({type: TransactionActions.ADD_TRANSACTION, payload: TransData})
    UiDispatch({type: UiActions.RESET_FORM_DATA})
  }

  const handleOnChange = (e) => {
    const {name, value} = e.target;
    UiDispatch({
      type: UiActions.SET_FORM_DATA, 
      payload: {field: name, value}}
    )
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
          value={UiState.formData.title}
        />

        <label htmlFor="amount">Amount (negative - expense; positive - income)</label>
        <input 
          type="number" 
          name="amount" 
          id="amount"
          onChange={handleOnChange}
          value={UiState.formData.amount}
        />

        <label htmlFor="description">Description</label>
        <input 
          type="text" 
          name="description" 
          id="description"
          onChange={handleOnChange}
          value={UiState.formData.description}
        />
        
        <button type="submit">Add transaction</button>
      </form>
    </StyledAddTransactionForm>
  )
}

export default AddTransactionForm
