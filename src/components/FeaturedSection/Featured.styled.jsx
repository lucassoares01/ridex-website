import styled from "styled-components"

export const StyledFeatured = styled.section`
    width: 100vw;
    display: flex;
    justify-content: center;
    padding: 80px 0px;

    .section-title__filter{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 18px;
        font-weight: 500;
        color: ${({theme}) => theme.colors.darkBlue};
    }

    select{
        font-size: 22px;
        padding: 5px 15px;
        border-radius: 10px;
        color: ${({theme}) => theme.colors.darkBlue};
        outline: none;
        border: 1px solid gray;
    }

    .cards-area{
        display: grid;
        justify-content: center;
        align-items: center;
        grid-template-columns: repeat(3, 1fr);
        gap: 40px;
        margin-top: 50px;
    }

    @media (max-width: 1180px) {
        .cards-area{
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 768px) {
        .cards-area{
            grid-template-columns: 1fr;
        }
    }
`