import { StyledHistoryItem } from "./styles/HistoryItem.styled"

function HistoryItem({id, title, amount, type, desc}) {
    // this is an expandable card
    return (
        <StyledHistoryItem key={id} type={type}>
            <h4>{title}</h4>
            <p>{amount}</p>
        </StyledHistoryItem>
    )
}

export default HistoryItem
