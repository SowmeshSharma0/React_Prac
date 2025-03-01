import { useContext, useState } from 'react'
import TaskList from './TaskList'
import { GlobalContext } from '../context/GlobalContext'
import { StyledHorizontalListView } from './styles/HorizontalListView.styled'
const HorizontalListView = ({state, isExpandable}) => {

    const {main_axis_state_mapping, usable_card_height, cross_axis_state_mapping} = useContext(GlobalContext)
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
                {Array.from(Object.keys(cross_axis_state_mapping)).map((cross_state) => {
                    cross_state = parseInt(cross_state)
                    const key_cross_axis_state = crypto.randomUUID()
                    return <TaskList key={key_cross_axis_state} main_state={state} cross_state={cross_state}/>
                }
                )}
                </div>
            </div>
        </StyledHorizontalListView>
    )
}

export default HorizontalListView