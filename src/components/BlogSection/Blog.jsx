import { StyledSection } from "./Blog.styled"

import { FaRocketchat } from "react-icons/fa"

import blog1 from "../../images/blog-1.jpg"
import blog2 from "../../images/blog-2.jpg"
import blog3 from "../../images/blog-3.jpg"
import blog4 from "../../images/blog-4.jpg"
import blog5 from "../../images/blog-5.jpg"

const Blog = () =>{
    return(
        <StyledSection id="blog">
            <div className="container">
                <h2 className="section-title">Nosso Blog</h2>
                <div className="cards-area">
                    <div className="blog-card">
                        <img src={blog1}/>
                        <div className="card-title">Novos lugares de atuação da nossa empresa.</div>
                        <div className="comments-area">
                            <FaRocketchat className="comments-icon"/>
                             23 Comentarios
                        </div>
                    </div>
                    <div className="blog-card">
                        <img src={blog2}/>
                        <div className="card-title">O que procurar ao alugar um carro ?</div>
                        <div className="comments-area">
                            <FaRocketchat className="comments-icon"/>
                             27 Comentarios
                        </div>
                    </div>
                    <div className="blog-card">
                        <img src={blog3}/>
                        <div className="card-title">Como a estetica influencia na escolha.</div>
                        <div className="comments-area">
                            <FaRocketchat className="comments-icon"/>
                             12 Comentarios
                        </div>
                    </div>
                    <div className="blog-card">
                        <img src={blog4}/>
                        <div className="card-title">Vulnerabilidades comuns em carros.</div>
                        <div className="comments-area">
                            <FaRocketchat className="comments-icon"/>
                             43 Comentarios
                        </div>
                    </div>
                    <div className="blog-card">
                        <img src={blog5}/>
                        <div className="card-title">Novas regras para alugar nossos carros.</div>
                        <div className="comments-area">
                            <FaRocketchat className="comments-icon"/>
                             30 Comentarios
                        </div>
                    </div>
                </div>
            </div>
        </StyledSection>
    )
}

export default Blog