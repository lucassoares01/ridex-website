import { StyledSection } from "./Operation.styled"
import { FaCar, FaUserPlus, FaMoneyBill, FaHome  } from "react-icons/fa"

const Operation = () =>{
    return(
        <StyledSection id="operation">
            <div className="container">
                <h2 className="section-title">Como Funciona ?</h2>
                <div className="card-list">
                    <div className="operation-card">
                        <div className="card-icon" style={{background: "#F6D5E6"}}>
                            <FaUserPlus />
                        </div>
                        <div className="card-title">Crie uma conta</div>
                        <a href="#">Get Started</a>
                    </div>
                    <div className="operation-card">
                        <div className="card-icon" style={{background: "#CEEAFD"}}>
                            <FaCar/>
                        </div>
                        <div className="card-title">Escolha o carro para alugar</div>
                    </div>
                    <div className="operation-card">
                        <div className="card-icon" style={{background: "#D5F0E4"}}>
                            <FaMoneyBill />
                        </div>
                        <div className="card-title">Escolha o metodo de pagamento</div>
                    </div>
                    <div className="operation-card">
                        <div className="card-icon" style={{background: "#E7DEF7"}}>
                            <FaHome />
                        </div>
                        <div className="card-title">Receba o carro na sua casa.</div>
                    </div>
                </div>
            </div>
        </StyledSection>
    )
}

export default Operation