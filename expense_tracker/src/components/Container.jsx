import AddTransactionForm from './AddTransactionForm'
import HistoryList from './HistoryList'
import IncomeExpense from './IncomeExpense'
import { StyledContainer } from './styles/Container.styled'

function Container({
  TransList, 
  setTransList, 
  isExpanded, 
  setIsExpanded, 
  isOpenItems, 
  setIsOpenItems, 
  FormData, 
  setFormData
}) {

  const addToList = (item) => {
    console.log("Adding to list")
    console.log(item)

    setTransList(prevList => [...prevList, item])
    setIsExpanded(true)
  }

  const toggleItemOpen = (toggleID) => {
    console.log(toggleID)
    setIsOpenItems(prevState => {
      const newState = {...prevState}
      newState[toggleID] = !newState[toggleID]
      return newState
    })
  }

  const Income = TransList.filter(item => item.type === 'I').reduce((acc, item) => acc + Number(item.amount), 0)
  const Exp = TransList.filter(item => item.type === 'E').reduce((acc, item) => acc + Number(Math.abs(item.amount)), 0)

  return (
    <StyledContainer>
      <h1>Expense Tracker</h1>
      <h2>Your Balance</h2>
      <h2>Rs{Income - Exp}</h2>
      <IncomeExpense income={Income} exp={Exp}/>
      <HistoryList 
        TransList={TransList} 
        isExpanded={isExpanded} 
        setIsExpanded={setIsExpanded}
        isOpenItems={isOpenItems}
        toggleItemOpen={toggleItemOpen}
      />
      <AddTransactionForm addToTransList={addToList} FormData={FormData} setFormData={setFormData}/>
    </StyledContainer>
  )
}

export default Container
