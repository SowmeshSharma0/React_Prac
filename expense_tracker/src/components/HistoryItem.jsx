import { StyledHistoryItem } from "./styles/HistoryItem.styled"

function HistoryItem({id, title, amount, type, description, IsOpen, toggleOpen}) {

    return (
        <StyledHistoryItem key={id} type={type} onClick={() => toggleOpen(id)}>
            <div>
                <h4>{title}</h4>
                <p>{amount}</p>
            </div>
            {IsOpen && <p>{description}</p>}
        </StyledHistoryItem>
    )
}

export default HistoryItem
