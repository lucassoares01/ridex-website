import { StyledFooter } from "./Footer.styled"
import {FaInstagram, FaTwitter, FaLinkedin, FaFacebook, FaEnvelope} from "react-icons/fa"

import footerLogo from "../../images/logo.svg"

const Footer = () =>{
    return(
        <StyledFooter>
            <div className="container">
                <div className="card-brand">
                    <img src={footerLogo}/>
                    <p className="footer-message">
                        O melhor aluguel da região. Com nossa frota de mais de 10000
                        carros,garantimos uma lista atrariva de carros .
                    </p>
                </div>
                <div className="footer-list">
                    <p>Empresa</p>
                    <a href="#">Sobre</a>
                    <a href="#">Preço</a>
                    <a href="#">Blog</a>
                    <a href="#">Contato</a>
                </div>
                <div className="footer-list">
                    <p>Suporte</p>
                    <a href="#">Ajuda</a>
                    <a href="#">Perguntas</a>
                    <a href="#">Politicas de Privacidade</a>
                    <a href="#">Termos de Uso</a>
                </div>
                <div className="card-social">
                    <FaInstagram className="social-icon"/>
                    <FaTwitter className="social-icon"/>
                    <FaLinkedin className="social-icon"/>
                    <FaFacebook className="social-icon"/>
                    <FaEnvelope className="social-icon"/>
                </div>
            </div>
        </StyledFooter>
    )
}

export default Footer