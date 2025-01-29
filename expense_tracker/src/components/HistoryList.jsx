import HistoryItem from "./HistoryItem"
import { StyledHistoryList } from "./styles/HistoryList.styled"

function HistoryList() {

    const hist_data = [
        {id: 1, title: 'Cash',amount: 100, type: 'I', desc: 'Cash from ATM machine on 2021-09-01'},
        {id: 2, title: 'Book', amount: -20, type: 'E', desc: 'Book purchased on 2021-09-02'},
        {id: 3, title: 'Camera', amount: -50, type: 'E', desc: 'Camera purchased on 2021-09-03'},
        {id: 4, title: 'Salary', amount: 200, type: 'I', desc: 'Salary credited on 2021-09-04'},
        {id: 5, title: 'Book', amount: -30, type: 'E', desc: 'Book purchased on 2021-09-05'},
        {id: 6, title: 'Cash', amount: 50, type: 'I', desc: 'Cash from ATM machine on 2021-09-06'},
    ]
    return (
        <StyledHistoryList>
            <h2>History</h2>
            {/* below component is scrollable and must be expandable */}
            {hist_data.map(({id, title, amount, type, desc}) => 
                HistoryItem({id, title, amount, type, desc})
            )}
        </StyledHistoryList>
    )
}

export default HistoryList
