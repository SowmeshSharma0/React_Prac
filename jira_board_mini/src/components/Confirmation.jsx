import { StyledConfirmation } from "./styles/Confirmation.styled"

const Confirmation = () => {
  return (
    <StyledConfirmation>
        <h2>Do you really want to proceed with this Action ?</h2>
        <div className="buttons">
            <button className="confirm">Confirm</button>
            <button className="cancel">Cancel</button>
        </div>
    </StyledConfirmation>
  )
}

export default Confirmation
