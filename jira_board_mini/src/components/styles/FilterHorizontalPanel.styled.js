import styled from 'styled-components';

export const StyledFilterPanelContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    h2{
        font-size: 1.5rem;
        font-weight: 600;
        margin: 0;
        padding: 0;
        margin-bottom: 1rem;
        color: #4a4a4a;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
    }
`

export const StyledFilterHorizontalPanel = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: fit-content;
    padding: ${({len}) => len > 0 ? '1.2rem' : '0'};
    /* background-color: #f1f1f1; */
    margin: 1rem;
    border-radius: 10px;
    box-shadow: 0px 0px 5px 0px rgb(67, 66, 66);
`

export const StyledFilterBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0.5rem;
    /* padding: 0.5rem; */
    border-radius: 5px;
    box-shadow: 0px 0px 5px 0px #000000;
    transition: all 0.3s ease;
    .filter-box-content{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        p{
            margin: 0;
            font-weight: ${({isToggleActive}) => isToggleActive ? '600' : '400'};
            font-size: ${({isToggleActive}) => isToggleActive ? '1rem' : '1.06rem'};
            color: white;
        }
        padding: 0.5rem;
        border-radius: 5px;
        background-color: ${({isToggleActive}) => isToggleActive ? 'green' : 'red'};
    }
    &:hover{
        cursor: pointer;
        transform: translateY(-2px);
    }
    &:active{
        transform: scale(1.05);
    }

    /* #toggle-on{
        color: green;
        margin-left: 0.5rem;
    }
    #toggle-off{
        color: red;
        margin-left: 0.5rem;
    } */
`