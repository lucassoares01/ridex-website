import styled from "styled-components";

export const StyledSection = styled.section`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 80px 0px;

    .card-list{
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        margin-top: 50px;
        gap: 25px;     
    }

    .operation-card{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #fff;
        text-align: center;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 10px 8px;
        flex: 1;
        padding: 15px;
    }

    .card-icon{
        width: 50px;
        height: 50px;
        font-size: 25px;
        background: ${(props) => props.color};
        border-radius: 10px;
        padding: 10px;
        color: ${({theme}) => theme.colors.darkBlue};
    }

    .green{
        background-color: green;
    }

    .card-title{
        font-size: 24px;
        font-weight: 500;
        color: ${({theme}) => theme.colors.darkBlue};
        margin-top: 10px;
    }

    a{
        font-size: 18px;
    }

    @media (max-width: 768px) {
        .card-list{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 500px) {
        .card-list{
            display: grid;
            grid-template-columns: 1fr;
        }
    }
`