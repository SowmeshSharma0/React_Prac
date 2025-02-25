import styled from "styled-components";

export const StyledHorizontalStatePanel = styled.header`
    display: flex;
    align-items: baseline;
    margin-bottom: 1rem;

    div{
        width: ${({ usable_card_width }) => usable_card_width};
        margin-right: 0.5rem;
        text-align: center;
        font-weight: 600;
        border: 1px solid #e8e8e8;
        border-radius: 0.3rem;
        background-color: #1a76d3;
        color: white;
        h2{
            margin: 0.8rem auto;
        }
        box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
        &:hover{
            cursor: pointer;
            transform: scale(1.02);
            transition: transform 0.2s ease-in-out;
        }
        &:active{
            background-color: #0a5fa6;
            transform: scale(0.98);
            transition: transform 0.2s ease-in-out;
        }
    }
`