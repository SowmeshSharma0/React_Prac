import styled from 'styled-components'

export const StyledHorizontalListView = styled.section`
    height: 100%;
    margin-bottom: 1.5rem;
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
        min-height: ${({isExpandable, expanded, usable_card_height}) => !isExpandable ? "auto" : expanded ? `${usable_card_height.min}` : "0"};
        max-height: ${({isExpandable, expanded, usable_card_height}) => !isExpandable ? "auto" : expanded ? `${usable_card_height.max}` : "0"};
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
        border-bottom: 1px solid #dfe1e6;

        button{
            cursor: pointer;
            &:active{
                transform: scale(0.9);
                transition: transform 0.1s;
            };
            transform : ${({expanded}) => expanded ? "rotate(180deg)" : "rotate(0deg)"};
            transition: transform 0.3s;
        }
    }
`