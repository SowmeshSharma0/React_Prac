import styled from "styled-components";

export const StyledTaskCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .cardHeader{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        background-color: #f0f0f0;
        padding: 0.5rem;
        border-radius: 5px;
    }
    background-color: #f0f0f0;
    border-radius: 5px;
    padding: 1rem;
    margin: 0.8rem;
    box-shadow: 0 0 5px 0 rgba(0,0,0,0.2);
`