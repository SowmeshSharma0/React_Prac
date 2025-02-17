import styled from "styled-components";

export const StyledHorizontalListViewExpandable = styled.section`
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
        transition: all 0.3s ease-in-out;
        transition-property: max-height;
        max-height: ${({expanded, usable_card_height}) => expanded ? `${usable_card_height}vh` : "0"};
        /* overflow-x: hidden; */
    }
    .task-list{
        margin-top: 0.5rem;
        display: flex;
        flex-direction: row;
        height: 100%;
    }
    .section-header{
        display: flex;
        flex-direction: row;
        align-items: center;
        /* background-color: #f4f5f7; */
        border-bottom: 1px solid #dfe1e6;

        button{
            cursor: pointer;
        }
        
        button:active{
            transform: scale(0.9);
            transition: transform 0.1s;
        }
    }
`

//took help of gpt to animate this, was not able to figure out:
//found that conditional rendering shuld be removed from jsx and the styled component should be used to handle the conditional rendering