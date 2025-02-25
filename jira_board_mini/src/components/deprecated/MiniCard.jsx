//@deprecated

import { StyledMiniCard } from "./MiniCard.styled"

const MiniCard = ({type, content, isEditing, EditingCard, handleChange}) => {
    return (
      <StyledMiniCard>
        {type === 'Card Description' ? (
          <>
            <p><b>{type}</b></p>
            {isEditing ? (
              <>
                <label htmlFor="description" hidden></label>
                <textarea value={EditingCard.description} onChange={handleChange} name="description" id="description"/>
              </>
            ) : (
              <p>{content}</p>
            )}
          </>
        ) : (
          <p><b>{type}</b> : {isEditing ? (
            <>
              {type === 'Due Date' ? (
                <>
                  <label htmlFor="due_date" hidden></label>
                  <input 
                    type="date" 
                    value={EditingCard.due_date} 
                    onChange={handleChange} 
                    name="due_date" 
                    id="due_date" 
                    onFocus={(e) => {
                        e.currentTarget.setAttribute(
                            "min",
                            new Date().toISOString().slice(0, 10)
                        );
                    }}
                  />
                </>
              ) : (
                <>
                  <label htmlFor={type.toLowerCase()} hidden></label>
                  <input type="text" value={EditingCard[type.toLowerCase()]} onChange={handleChange} name={type.toLowerCase()} id={type.toLowerCase()}/>
                </>
              )}
            </>
          ) : (
            <span>{content}</span>
          )}</p>
        )}
      </StyledMiniCard>
    )
  }
  
  export default MiniCard