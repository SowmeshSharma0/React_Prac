import { FormProvider, ListContext } from '../context/GlobalContext'
import AddTransactionForm from './AddTransactionForm'
import HistoryList from './HistoryList'
import IncomeExpense from './IncomeExpense'
import { StyledContainer } from './styles/Container.styled'
import { useContext } from 'react'

function Container() {

  const { TransList } = useContext(ListContext)

  const Income = TransList.filter(item => item.type === 'I').reduce((acc, item) => acc + Number(item.amount), 0)
  const Exp = TransList.filter(item => item.type === 'E').reduce((acc, item) => acc + Number(Math.abs(item.amount)), 0)

  return (
    <StyledContainer>
      <h1>Expense Tracker</h1>
      <h2>Your Balance</h2>
      <h2>Rs{Income - Exp}</h2>
      <IncomeExpense income={Income} exp={Exp}/>
      <HistoryList />
      <FormProvider>
        <AddTransactionForm/>
      </FormProvider>
    </StyledContainer>
  )
}

export default Container
