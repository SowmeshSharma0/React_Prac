import { useContext } from "react"
import { StyledHorizontalStatePanel } from "./styles/HorizontalStatePanel.styled"
import { GlobalContext } from "../context/GlobalContext"

function HorizontalStatePanel() {
    const {cross_axis_states} = useContext(GlobalContext)
    return (
      <StyledHorizontalStatePanel>
          {cross_axis_states.map((state, idx) => 
              <div key={idx}>{state}</div>
          )}
      </StyledHorizontalStatePanel>
    )
}

export default HorizontalStatePanel
