import styled from 'styled-components';

export const StyledFilterPanelContainer = styled.div`
    /* width: 100%; */
    display: flex;
    align-items: center;
    overflow-x: auto;
    min-width: 0;
    max-width: 100%;

    &::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-x: none;  // IE and Edge
    scrollbar-width: none;  // Firefox
    
    h2{
        font-size: 1.5rem;
        font-weight: 600;
        margin: 0;
        padding: 0;
        margin-bottom: 1rem;
        color: #4a4a4a;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
        white-space: nowrap;
        flex-shrink: 0;
    }
`
//cant keep resizing the filter boxes; box widths should be fixed; and overflow-x should be auto
export const StyledFilterHorizontalPanel = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
    min-width: fit-content;
    padding: ${({len}) => len > 0 ? '1.2rem' : '0'};
    margin: 1rem;
    border-radius: 10px;
    box-shadow: 0px 0px 5px 0px rgb(67, 66, 66);
    width: 100%;
`


//cant have more than 3 words in the filter box
export const StyledFilterBox = styled.div`   
    text-align: center;
    margin: 0.5rem;
    padding: 0.5rem;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 0px #000000;
    transition: all 0.3s ease;
    p{
        margin: 0;
        font-weight: ${({isToggleActive}) => isToggleActive ? '600' : '400'};
        font-size: ${({isToggleActive}) => isToggleActive ? '1rem' : '1.06rem'};
        color: white;
        /* overflow: hidden;
        text-overflow: ellipsis; */
    }
    background-color: ${({isToggleActive}) => isToggleActive ? 'green' : 'red'};
    &:hover{
        cursor: pointer;
        transform: translateY(-2px);
    }
    &:active{
        transform: scale(1.05);
    }
    width: 190px;
    max-width: fit-content;

    @media (max-width: 768px) {
        width: 150px;
    }

    @media (max-width: 480px) {
        width: 100px;
    }
`