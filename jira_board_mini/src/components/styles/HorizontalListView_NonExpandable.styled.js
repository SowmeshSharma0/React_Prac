import styled from "styled-components";

export const StyledHorizontalListView_NonExpandable = styled.div`
    height: 100%;
    margin-bottom: 1.5rem;
    /* border: 1px solid #dfe1e6; */
    h2{
        margin: 0.5rem;
    }
    .task-list-wrapper{
        overflow-y: hidden;
        &::-webkit-scrollbar {
            height: 0.5rem;
        }
        /* overflow-x: hidden; */
    }
    .task-list{
        display: flex;
        flex-direction: row;
        height: 100%;
    }
`