import styled from "styled-components";

export const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background: ${({theme}) => theme.colors.lightBlue};
    border: none;
    outline: none;
    font-size: 18px;
    padding: 12px 30px;
    border-radius: 10px;
    letter-spacing: 0.5px;
    transition: 0.3s;
    cursor: pointer;

    &:hover{
        color: #fff;
        opacity: 0.6;
    }
`