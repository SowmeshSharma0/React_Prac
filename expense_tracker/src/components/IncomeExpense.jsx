import { StyledIncomeExpense } from "./styles/IncomeExpense.styled"

function IncomeExpense({income, exp}) {
  return (
    <StyledIncomeExpense>
      <div>
        <h3>INCOME</h3>
        <h3 style={{color: "green"}}>Rs{income}</h3>
      </div>
      <div>
        <h3>EXPENSE</h3>
        <h3 style={{color: "red"}}>Rs{exp}</h3>
      </div>
    </StyledIncomeExpense>
  )
}

export default IncomeExpense
