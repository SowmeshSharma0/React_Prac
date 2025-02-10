import { useContext } from "react"
import { StyledHorizontalStatePanel } from "./styles/HorizontalStatePanel.styled"
import { GlobalContext } from "../context/GlobalContext"

function HorizontalStatePanel() {
    const {cross_axis_state_mapping} = useContext(GlobalContext)

    const cross_axis_states = Object.values(cross_axis_state_mapping)
    return (
      <StyledHorizontalStatePanel>
          {cross_axis_states.map((state, idx) => 
                <div key={idx}>
                    <h2>{state}</h2>
                </div>
          )}
      </StyledHorizontalStatePanel>
    )
}

export default HorizontalStatePanel
