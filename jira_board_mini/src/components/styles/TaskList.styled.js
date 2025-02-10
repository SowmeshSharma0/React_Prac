import styled from "styled-components";

export const StyledTaskList = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #f3f5f7;
    height: 100%;
    /* flex: 1; */
    border: 1px solid #e8e8e8;
    border-radius: 0.5rem;
    /* margin: 0.5rem 0; */
    margin-right: 0.5rem;
    overflow-y: auto;
    min-width: 450px;
    flex-shrink: 0;

    @media (max-width: 450px){
        min-width: 100px;
    }
`