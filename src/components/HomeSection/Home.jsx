import { StyledHome } from "./Home.styled"
import { StyledButton } from "../UI/Button.styled";

import img1 from "../../images/hero.jpg"

const Home = () =>{
    return(
        <StyledHome id="home">
            <div className="container">
                <div className="home-left">
                    <h1 className="home-title">O MELHOR LUGAR PARA ALUGAR UM CARRO</h1>
                    <p className="home-subtitle">Rio de Janeiro, São Paulo e Minas Gerais</p>

                    <form className="search-form" action="#" onSubmit={(e)=>e.preventDefault()}>
                        <div className="form-control">
                            <label htmlFor="modelo">Marca / Modelo</label>
                            <input type="text" name="modelo" placeholder="Modelo"/>
                        </div>
                        <div className="form-control">
                            <label htmlFor="modelo">Ano do Carro</label>
                            <input type="text" name="modelo" placeholder="Qual o ano do carro ?"/>
                        </div>
                        <div className="form-control">
                            <label htmlFor="modelo">Tempo de aluguel(mês)</label>
                            <input type="text" name="modelo" placeholder="Por quanto tempo quer alugar ?"/>
                        </div>
                        <a href="#" type="submit" className="submit-button">Procurar</a>
                    </form>
                </div>
                <div className="home-right">
                    <img src={img1} />
                </div>
            </div>
        </StyledHome>
    )
}

export default Home