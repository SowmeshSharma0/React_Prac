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
    position: relative;
    left: 95%;
    font-size: 1.5rem;
    &:hover{
        background-color: #0052cc;
        cursor: pointer;
        transform: scale(1.1);
        transition: transform 0.5s ease;
    }
`