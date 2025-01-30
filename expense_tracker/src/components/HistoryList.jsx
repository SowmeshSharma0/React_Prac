import { useContext } from "react"
import HistoryItem from "./HistoryItem"
import { StyledHistoryList } from "./styles/HistoryList.styled"
import { GlobalContext, UiActions } from "../context/GlobalContext"

function HistoryList() {
    const { TransactionState, UiState, UiDispatch } = useContext(GlobalContext)
    return (
        <StyledHistoryList>
            <div className="history-header">
                <h2>History</h2>
                <button onClick={() => UiDispatch({type: UiActions.TOGGLE_EXPANDED})}>{UiState.isExpanded ? '-' : '+'}</button>
            </div>
            {/* below component is scrollable and must be expandable */}
            <section>
                {UiState.isExpanded && TransactionState.transactions.map(({id, title, amount, type, description}) => {
                   return  <HistoryItem 
                        key={id} 
                        id={id} 
                        title={title} 
                        amount={amount} 
                        type={type} 
                        description={description}
                    />
                }
                )}
            </section>
        </StyledHistoryList>
    )
}

export default HistoryList
