import styled from "styled-components"

export const StyledCard = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background: #223;
    border-radius: 20px;
    color: #fff;
    box-shadow: rgb(0 0 0 / 10%) 0px 1px 10px 8px;
    background: ${({theme}) => theme.colors.bg};
    padding: 10px 10px;

    img{
        width: 100%;
        border-radius: 20px;
    }

    .card-top{
        width: 90%;
        color: #223;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 18px;
    }

    .card-title{
        font-size: 22px;
        font-weight: 500;
    }

    .card-year{
        font-size: 16px;
        font-weight: 600;
        border: 2px dashed ${({theme}) => theme.colors.lightBlue};
        border-radius: 20px;
        padding: 2px 10px;
    }

    .card-middle{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 80%;
        font-size: 16px;
        color: ${({theme}) => theme.colors.lightGray};
        margin-top: 30px;
    }

    .card-middle span{
        display: flex;
        align-items: center;
    }

    .icon{
        color: ${({theme}) => theme.colors.lightBlue};
    }

    .card-bottom{
        width: 90%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 30px;
        border-top: 1.8px solid ${({theme}) => theme.colors.lightGray};
        padding: 15px 0px;
    }

    .card-price{
        color: #223;
        font-size: 24px;
    }
`