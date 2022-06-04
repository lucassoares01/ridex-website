import styled from "styled-components"

export const StyledFooter = styled.section`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 80px 0px;
    background: rgb(228, 233, 241);

    .container{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .card-brand{
        font-size: 15px;
    }

    .footer-list{
        display: flex;
        flex-direction: column;
    }

    .footer-list p{
        font-size: 20px;
        color: ${({theme}) => theme.colors.darkBlue};
    }

    .footer-list a{
        font-size: 15px;
        margin-top: 10px;
        color: ${({theme}) => theme.colors.darkGray};
    }

    .footer-message{
        max-width: 400px;
        color: ${({theme}) => theme.colors.darkBlue};
        margin-top: 20px;
    }

    .card-social{
        display: flex;
        gap: 25px;
    }

    .social-icon{
        font-size: 25px;
        color: ${({theme}) => theme.colors.darkGray};
        transition: 0.4s;
    }

    .social-icon:hover{
        color: ${({theme}) => theme.colors.lightBlue};
        cursor: pointer;
    }

    @media (max-width: 990px) {
        .container{
            display: flex;
            flex-direction: column;
            text-align: center;
            gap: 50px;
        }
    }
`