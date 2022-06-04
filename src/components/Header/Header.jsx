import { Navbar } from "./Header.styled";
import { FaRegUser, FaCar, FaBars, FaTimes } from "react-icons/fa"
import { StyledButton } from "../UI/Button.styled";
import { useState } from "react";
import Link from "react-scroll/modules/components/Link";

const Header = () =>{
    const [toggle, setToggle] = useState(false)

    const changeToggleHandler = () =>{
        setToggle(!toggle)
        console.log(toggle)
    }


    return(
        <Navbar>
            <div className="container">
                <div className="logo">Ridex</div>
                <ul className={toggle && 'show-menu'}>
                    <li><a href="#home" onClick={changeToggleHandler}>Home</a></li>
                    <li><a href="#featured" onClick={changeToggleHandler}>Destaques</a></li>
                    <li><a href="#operation" onClick={changeToggleHandler}>Serviço</a></li>
                    <li><a href="#blog" onClick={changeToggleHandler}>Nosso Blog</a></li>
                </ul>
                <div className="nav-buttons">
                    <StyledButton className="button">
                        <span className="car-button__desktop">Nossos Carros</span>
                        <FaCar className="car-button__mobile"></FaCar>
                    </StyledButton>
                    <a className="user-icon" href="#">
                        <FaRegUser/>
                    </a>
                    <FaBars className={toggle ? 'toggle-button hide-on' : 'toggle-button'} onClick={changeToggleHandler}/>
                    <FaTimes className={toggle ? 'toggle-button active-button': 'toggle-button hide-on'} onClick={changeToggleHandler}/>
                </div>
            </div>
        </Navbar>
    )
}

export default Header;