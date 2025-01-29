import styled from "styled-components";

export const StyledFooter = styled.footer`
    background-color: ${({theme}) => theme.colorsLight.footer};
    color: #fff;
    padding: 100px 0 60px;

    ul {
        list-style-type: none;
    }

    ul li {
        margin: 20px;
    }

    p {
        text-align: right;
        margin-top: 40px;
    }

    @media(max-width: ${({theme}) => theme.sizes.mobile}){
        text-align: center;
        ul{
            padding: 0;
        }
    }
`

export const StyledSocialIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;

    li{
        list-style: none;
    }

    a{
        border: 1px solid #fff;
        border-radius: 50%;
        color: #fff;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        height: 40px;
        width: 40px;
        margin-right: 10px; 
    }
`