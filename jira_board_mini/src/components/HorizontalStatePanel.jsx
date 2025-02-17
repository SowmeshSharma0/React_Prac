import { useContext } from "react"
import { StyledHorizontalStatePanel } from "./styles/HorizontalStatePanel.styled"
import { GlobalContext } from "../context/GlobalContext"

function HorizontalStatePanel() {
    const {cross_axis_state_mapping, usable_card_width} = useContext(GlobalContext)

    const cross_axis_states = Object.values(cross_axis_state_mapping)
    return (
      <StyledHorizontalStatePanel usable_card_width={usable_card_width}>
          {cross_axis_states.map((state, idx) => 
                <div key={idx}>
                    <h2>{state}</h2>
                </div>
          )}
      </StyledHorizontalStatePanel>
    )
}

export default HorizontalStatePanel
