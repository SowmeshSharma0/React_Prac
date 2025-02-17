import styled from "styled-components";

export const StyledAddTask = styled.div`
    background-color: #1a76d3;
    color: white;
    padding: 0.8rem;
    margin: 0.5rem;
    width: 3%;
    /* height: 3%; */
    border-radius: 30%;
    text-align: center;
    position: fixed;
    bottom: 0.5rem;
    right: 0.5rem;
    z-index: 1000;
    font-size: 1.5rem;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    &:hover{
        background-color: #0052cc;
        cursor: pointer;
        transform: scale(1.1);
        transition: transform 0.5s ease;
    }
`