import styled from "styled-components";

export const StyledIncomeExpense = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
    border: 1px solid #ccc;

    div{
        flex: 1;
        text-align: center;
    }

    div:first-child{
        border-right: 1px solid #ccc;
    }
`