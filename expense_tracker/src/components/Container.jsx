import { useState } from 'react'
import AddTransactionForm from './AddTransactionForm'
import HistoryList from './HistoryList'
import IncomeExpense from './IncomeExpense'
import { StyledContainer } from './styles/Container.styled'

function Container() {
  const [TransList, setTransList] = useState([])
  const [Income, setIncome] = useState(0)
  const [Exp, setExp] = useState(0)

  const addToList = (item) => {
    console.log(item)
    if(item.type === 'I')
      setIncome(prevIncome => prevIncome + Number(item.amount))
    else
      setExp(prevExp => prevExp + Math.abs(item.amount))

    setTransList(prevList => [...prevList, item])
  }

  return (
    <StyledContainer>
      <h1>Expense Tracker</h1>
      <h2>Your Balance</h2>
      <h2>Rs{Income - Exp}</h2>
      <IncomeExpense income={Income} exp={Exp}/>
      <HistoryList TransList={TransList}/>
      <AddTransactionForm addToTransList={addToList}/>
    </StyledContainer>
  )
}

export default Container
