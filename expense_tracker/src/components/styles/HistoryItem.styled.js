import styled from "styled-components";

export const StyledHistoryItem = styled.div`
    div{
        display: flex;
        justify-content: space-between;

        h4{
            color: #333;
        }

        p::before{
            content: '${({type}) => type === 'I' ? '+' : ''}';
        }
    }
    margin: 1rem 0;
    border: 1px solid #ccc;
    padding: 1rem;
    border-radius: 5px;
    border-right: ${({type}) => type === 'I' ? '8px solid green' : '8px solid red'};
`