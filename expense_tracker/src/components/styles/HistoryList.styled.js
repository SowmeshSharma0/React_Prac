import styled from "styled-components";

export const StyledHistoryList = styled.div`
    margin: 1rem 0;
    padding: 1rem;
    max-height: 45vh;
    overflow-y: auto;
    overflow-x: hidden;
    /* background-color: #f9f9f9;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1); */
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 1.2rem;
    font-weight: 500;
    color: #333;
    &::-webkit-scrollbar {
        width: 10px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #ccc;
        border-radius: 10px;
    }
    &::-webkit-scrollbar-track {
        background-color: #f9f9f9;
    }

    h2:after{
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background-color: #ccc;
        margin-top: 0.5rem;
    }
`