import HistoryItem from "./HistoryItem"
import { StyledHistoryList } from "./styles/HistoryList.styled"

function HistoryList({TransList}){
    return (
        <StyledHistoryList>
            <h2>History</h2>
            {/* below component is scrollable and must be expandable */}
            {TransList.map(({id, title, amount, type, desc}) => 
                HistoryItem({id, title, amount, type, desc})
            )}
        </StyledHistoryList>
    )
}

export default HistoryList
