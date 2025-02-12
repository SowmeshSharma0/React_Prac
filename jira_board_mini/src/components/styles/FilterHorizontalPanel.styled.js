import styled from 'styled-components';

export const StyledFilterHorizontalPanel = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: fit-content;
    padding: ${({len}) => len > 0 ? '1.2rem' : '0'};
    background-color: #f1f1f1;
    /* background-color: red; */
    margin: 1rem;
    border-radius: 10px;
    box-shadow: 0px 0px 5px 0px rgb(67, 66, 66);
`

export const StyledFilterBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0.5rem;
    padding: 0.5rem;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 0px #000000;
    transition: all 0.3s ease;
    p{
        margin: 0;
        font-weight: ${({isToggleActive}) => isToggleActive ? '600' : '400'};
    }
    &:hover{
        cursor: pointer;
        transform: translateY(-2px);
    }
    &:active{
        transform: scale(1.05);
    }

    #toggle-on{
        color: green;
        margin-left: 0.5rem;
    }
    #toggle-off{
        color: red;
        margin-left: 0.5rem;
    }
`