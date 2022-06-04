import styled from "styled-components";

export const Navbar = styled.header`
    width: 100vw;
    height: 80px;
    background: ${({theme}) => theme.colors.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999999999;

    .container{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .logo{
        font-size: 28px;
        color: ${({theme}) => theme.colors.darkBlue};
    }

    ul{
        display: flex;
        gap: 50px;
    }

    ul li{
        padding: 15px 0px;
    }

    ul li a{
        font-weight: 400;
        font-size: 16px;
        letter-spacing: 0.5px;
        cursor: pointer;
        color: ${({theme}) => theme.colors.darkBlue};
        transition: 0.2s;
    }

    .active,
    ul li a:hover{
        color: ${({theme}) => theme.colors.lightBlue};
    }

    .nav-buttons{
        display: flex;
        justify-content: center;
        gap: 25px;
        align-items: center;
    }

    .car-button__mobile{
        display: none;
    }


    .user-icon{
        background: #fff;
        padding: 11px 15px;
        padding-bottom: 8px;
        box-shadow: rgba(2, 2, 3, 0.1) 0px 1px 20px 2px;
        border-radius: 10px;
        font-size: 20px;
        color: #223;
        transition: 0.3s;
    }

    .user-icon:hover{
        color: #fff;
        background: ${({theme}) => theme.colors.lightBlue};
    }

    .toggle-button{
        display: none;
    }

    @media (max-width: 1180px) {
        ul{
            height: 100vh;
            display: flex;
            flex-direction: column;
            background: ${({theme}) => theme.colors.bg};
            position: fixed;
            width: 250px;
            right: -260px;
            border: 2px solid #fff;
            top: 80px;
            padding-top: 30px;
            transition: 0.3s;
            gap: 20px;
        }

        .show-menu{
            right: 0;
        }

        ul li a{
            padding: 15px 50px 15px 18px;
        }

        .toggle-button{
            display: flex;
            font-size: 28px;
            cursor: pointer;
            transition: 0.3s;
            color: ${({theme}) => theme.colors.darkBlue};
        }

        .hide-on{
            display: none;
        }

        .active-button{
            color: ${({theme}) => theme.colors.lightBlue};
        }
    }

    @media (max-width: 500px){
        .car-button__desktop{
            display: none;
        }

        button{
            padding: 15px 20px;
        }

        .car-button__mobile{
            display: flex;
        }
    }
`