import { useContext, useState } from 'react'
import TaskList from './TaskList'
import { GlobalContext } from '../context/GlobalContext'
import { StyledHorizontalListView } from './styles/HorizontalListView.styled'
const HorizontalListView = ({state, isExpandable}) => {

    const {main_axis_state_mapping, usable_card_height} = useContext(GlobalContext)
    const [isExpanded, setIsExpanded] = useState(false)

    const toggleExpand = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <StyledHorizontalListView isExpandable={isExpandable} expanded={isExpanded} usable_card_height={usable_card_height}>
            <div className="section-header">
                <h2>{main_axis_state_mapping[state]}</h2>
                {isExpandable && <button onClick={toggleExpand}>&#x25BC;</button>}
            </div>
            <div className="task-list-wrapper">
                <div className="task-list">
                {/* make this dynamic */}
                {/* why we shuld not use index as key in react */}
                {Array.from({length: 4}).map((_, idx) => 
                    <TaskList key={idx} main_state={state} cross_state={idx}/>
                )}
                </div>
            </div>
        </StyledHorizontalListView>
    )
}

export default HorizontalListView