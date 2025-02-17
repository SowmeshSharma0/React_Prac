import styled from "styled-components";

export const StyledTaskList = styled.div`
    display: flex;
    flex-direction: column;
    /* height: 100%; */
    /* flex: 1; */
    border-radius: 0.5rem;
    /* margin: 0.5rem 0; */
    margin-right: 0.5rem;
    overflow-y: auto;
    min-width: ${({ usable_card_width }) => usable_card_width}px;
    max-width: ${({ usable_card_width }) => usable_card_width}px;

    min-height: ${({ usable_card_height }) => usable_card_height}px;
    max-height: ${({ usable_card_height }) => usable_card_height}px;
    
    /* flex-shrink: 0; */

    background: ${({ main_state, cross_state, DraggableStates, isDragActive}) => {
    if (!DraggableStates || !DraggableStates[main_state] || !isDragActive) {
      return ' #f3f5f7';
    }

    if (DraggableStates[main_state][cross_state] === true) {
      return 'rgba(144, 238, 144, 0.3)';
    }
    else if (DraggableStates[main_state][cross_state] === false) {
      return 'rgba(255, 0, 0, 0.3)';
    }
    return '#f0f0f0'; // fallback color
  }};
  border: ${({ main_state, cross_state, DraggableStates, isDragActive}) => {
    if (!DraggableStates || !DraggableStates[main_state] || !isDragActive) {
      return '1px solid #e8e8e8';
    }

    if (DraggableStates[main_state][cross_state] === true) {
      return '2px dashed rgba(144, 238, 144, 0.3)';
    }
    else if (DraggableStates[main_state][cross_state] === false) {
      return '2px dashed rgba(255, 0, 0, 0.3)';
    }
    return '1px solid #e8e8e8'; // fallback color
  }};
  transition: all 0.3s ease;
  transition-property: background, border;
  /* &:active:not(:focus-within) {
    opacity: 0.8;
    transform: scale(0.98);
  } */
   ${({ isDragActive }) => isDragActive && `
    opacity: 0.8;
    transform: scale(0.98);
   `}
`

// learnt that completely conditional styling can be done in styled components