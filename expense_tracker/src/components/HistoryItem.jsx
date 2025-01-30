import { useContext } from "react"
import { StyledHistoryItem } from "./styles/HistoryItem.styled"
import { GlobalContext, TransactionActions, UiActions } from "../context/GlobalContext"

function HistoryItem({id, title, amount, type, description}) {

    const {TransactionDispatch, UiDispatch, UiState} = useContext(GlobalContext)
    return (
        <StyledHistoryItem key={id} type={type} onClick={() => UiDispatch({type: UiActions.TOGGLE_OPEN_ITEMS, payload: id})} onDoubleClick={() => TransactionDispatch({type: TransactionActions.DELETE_TRANSACTION, payload: id})}>
            <div>
                <h4>{title}</h4> 
                <p>{amount}</p>
            </div>
            {UiState.isOpenItems.includes(id) && <p>{description}</p>}
        </StyledHistoryItem>
    )
}

export default HistoryItem
