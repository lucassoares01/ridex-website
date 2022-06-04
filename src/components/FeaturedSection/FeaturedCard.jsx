import { StyledCard } from "./FeaturedCard.styled"
import { StyledButton } from "../UI/Button.styled"
import { FaUserFriends, FaBolt } from "react-icons/fa"

const Card = (props) => {
    return (
        <StyledCard>
            <img src={props.data.img} />
            <div className="card-top">
                <div className="card-title">{props.data.name}</div>
                <div className="card-year">{props.data.year}</div>
            </div>
            <div className="card-middle">
                <span>
                    <FaUserFriends className="icon" />
                    &nbsp;
                    4 pessoas
                    </span>
                <span>
                    <FaBolt className="icon" />
                    &nbsp;
                    Automatico
                </span>
            </div>

            <div className="card-bottom">
                <p className="card-price">R${props.data.price} / mês</p>
                <StyledButton>Alugar</StyledButton>
            </div>
        </StyledCard>
    )
}

export default Card