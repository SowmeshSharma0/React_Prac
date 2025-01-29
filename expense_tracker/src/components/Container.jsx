import AddTransactionForm from './AddTransactionForm'
import HistoryList from './HistoryList'
import IncomeExpense from './IncomeExpense'
import { StyledContainer } from './styles/Container.styled'

function Container() {
  return (
    <StyledContainer>
      <h1>Expense Tracker</h1>
      <h2>Your Balance</h2>
      <h2>$260.00</h2>
      <IncomeExpense/>
      <HistoryList/>
      <AddTransactionForm/>
    </StyledContainer>
  )
}

export default Container
