import styled from "styled-components";

export const StyledSection = styled.section`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 80px 0px;

    .cards-area{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-auto-flow: column;
        overflow: auto;
        gap: 60px;
        margin-top: 50px;
    }

    .blog-card{
        width: 360px;
        background: #fff;
        margin-bottom: 30px;
        border-radius: 10px;
        padding-bottom: 10px;
    }

    .card-title{
        padding: 0px 20px;
    }

    .blog-card img{
        width: 100%;
        object-fit: cover;
        border-radius: 5px 5px 0px 0px;
    }

    .card-title{
        font-size: 22px;
        font-weight: 400;
        color:${({theme}) => theme.colors.darkBlue};
    }

    .comments-area{
        padding: 0px 20px;
        margin-top: 20px;
        font-size: 14px;
        display: flex;
        align-items: center;
        gap: 15px;
    }
`