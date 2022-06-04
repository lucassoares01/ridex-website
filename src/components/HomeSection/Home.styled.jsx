import styled from "styled-components"

export const StyledHome = styled.section`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 80px 0px;

    .container{
        display: flex;
        align-items: center;
        flex-direction: row;
    }

    .home-left{
        flex: 1;
    }

    .home-title{
        font-size: 50px;
        line-height: 70px;
        font-weight: 600;
        max-width: 600px;
        color: ${({ theme }) => theme.colors.darkBlue};
    }

    .home-subtitle{
        font-size: 18px;
        color: ${({ theme }) => theme.colors.darkBlue};
        margin-top: 25px;
    }

    .search-form{
        display: grid;
        background: ${({ theme }) => theme.colors.bg};
        grid-template-columns: 200px 200px 280px 160px;
        border: 2px solid #fff;
        margin-top: 60px;
        padding: 10px 30px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 10px 8px;
        border-radius: 20px;
        position: absolute;
        z-index: 0;
    }

    .form-control{
        display: flex;
        flex-direction: column;
    }

    label{
        font-size: 14px;
        color: rgb(139, 149, 167);
    }

    input{
        background: transparent;
        outline: none;
        border: none;
        font-size: 16px;
        font-weight: 400;
        padding: 10px 0px;
    }

    input:focus{
        border-bottom: 1.5px solid ${({ theme }) => theme.colors.lightBlue};
    }

    .submit-button{
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        background: ${({ theme }) => theme.colors.lightBlue};
        border: none;
        outline: none;
        font-size: 18px;
        padding: 12px 30px;
        border-radius: 10px;
        letter-spacing: 0.5px;
        transition: 0.3s;
        cursor: pointer;
    }

    .submit-button:hover{
        color: #fff;
        opacity: 0.6;
    }


    .home-right{
        flex: 1;
        margin-right: -450px;
    }

    .home-right img{
        width: 600px;
        height: 800px;
        border-radius: 30px;
        object-fit: cover;
    }

    @media (max-width: 1180px) {
        .container{
            padding-top: 80px;
        }

        .home-right{
            display: none;
        }

        .home-left{
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
        }

        .home-title{
            text-align: center;
            font-size: 45px;
            line-height: 50px;
        }

        .home-subtitle{
            text-align: center;
        }

        .search-form{
            position: initial;
            display: flex;
            flex-direction: column;
            width: 95vw;
            gap: 30px;
        }
    }
`