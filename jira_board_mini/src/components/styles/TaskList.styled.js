import styled from "styled-components";

export const StyledTaskList = styled.div`
    display: flex;
    flex-direction: column;
    /* background-color: #f3f5f7; */
    height: 100%;
    /* flex: 1; */
    border: 1px solid #e8e8e8;
    border-radius: 0.5rem;
    /* margin: 0.5rem 0; */
    margin-right: 0.5rem;
    overflow-y: auto;
    min-width: 430px;
    flex-shrink: 0;

    @media (max-width: 450px){
        min-width: 100px;
    }
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
`