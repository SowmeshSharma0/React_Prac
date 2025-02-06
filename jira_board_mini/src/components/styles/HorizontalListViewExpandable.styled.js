import styled from "styled-components";

export const StyledHorizontalListViewExpandable = styled.section`
    height: 100%;
    margin-bottom: 1.5rem;
    /* border: 1px solid #dfe1e6; */
    h2{
        margin: 0.5rem;
    }
    .task-list{
        display: flex;
        flex-direction: row;
        height: 45vh;
    }
    .section-header{
        display: flex;
        flex-direction: row;
        align-items: center;
        /* background-color: #f4f5f7; */
        padding: 0.5rem;
        border-bottom: 1px solid #dfe1e6;
        button:active{
            transform: scale(0.9);
        }
    }
`