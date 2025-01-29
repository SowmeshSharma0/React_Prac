import { useState } from "react"
import HistoryItem from "./HistoryItem"
import { StyledHistoryList } from "./styles/HistoryList.styled"

function HistoryList({TransList, isExpanded, setIsExpanded, isOpenItems, toggleItemOpen}) {
    
    return (
        <StyledHistoryList>
            <div className="history-header">
                <h2>History</h2>
                <button onClick={() => setIsExpanded(prevState => !prevState)}>{isExpanded ? '-' : '+'}</button>
            </div>
            {/* below component is scrollable and must be expandable */}
            <section>
                {isExpanded && TransList.map(({id, title, amount, type, description}) => 
                    <HistoryItem 
                        key={id} 
                        id={id} 
                        title={title} 
                        amount={amount} 
                        type={type} 
                        description={description}
                        IsOpen={isOpenItems[id]}
                        toggleOpen={toggleItemOpen}
                    />
                )}
            </section>
        </StyledHistoryList>
    )
}

export default HistoryList
