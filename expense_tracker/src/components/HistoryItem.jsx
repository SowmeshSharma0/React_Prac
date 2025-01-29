import { useState } from "react"
import { StyledHistoryItem } from "./styles/HistoryItem.styled"

function HistoryItem({id, title, amount, type, description}) {

    const [IsOpen, setIsOpen] = useState(false)

    return (
        <StyledHistoryItem key={id} type={type} onClick={() => setIsOpen(prevState => !prevState)}>
            <div>
                <h4>{title}</h4>
                <p>{amount}</p>
            </div>
            {IsOpen && <p>{description}</p>}
        </StyledHistoryItem>
    )
}

export default HistoryItem
