import { useState } from "react"
import { StyledFeatured } from "./Featured.styled"
import Card from "./FeaturedCard"

import car1 from "../../images/car-1.jpg"
import car2 from "../../images/car-2.jpg"
import car3 from "../../images/car-3.jpg"
import car4 from "../../images/car-4.jpg"
import car5 from "../../images/car-5.jpg"
import car6 from "../../images/car-6.jpg"

const Featured = () => {
    const [ filteredYear, setFilteredYear ] = useState('todos')

    const carList = [
        {
            id: 1,
            img: car1,
            name: 'Toyota RAV4',
            year: '2021',
            price: 420
        },
        {
            id: 2,
            img: car2,
            name: 'BMW 3 Series',
            year: '2019',
            price: 350
        },
        {
            id: 3,
            img: car3,
            name: 'Volkswagen T-Cross',
            year: '2020',
            price: 440
        },
        {
            id: 4,
            img: car4,
            name: 'Cadillac Escalade',
            year: '2020',
            price: 400
        },
        {
            id: 5,
            img: car5,
            name: 'BMW 4 Series GTI',
            year: '2021',
            price: 450
        },
        {
            id: 6,
            img: car6,
            name: 'BMW 4 Series',
            year: '2019',
            price: 520
        }
    ]

    const setFilterHandler = (event) =>{
        setFilteredYear(event.target.value)
        console.log(event.target.value)
    }

    const filteredCars = carList.filter((filteredCar)=>{
        return filteredCar.year === filteredYear
    })

    return (
        <StyledFeatured id="featured">
            <div className="container">
                <div className="section-title__filter">
                    <h2>Carros em Destaque</h2>
                    <select name="year" id="year" onChange={setFilterHandler}>
                        <option value="todos">Todos</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                    </select>
                </div>
                <div className="cards-area">
                    {filteredYear !== "todos" ? filteredCars.map((item)=>{
                        return(
                            <Card 
                                key={item.id}
                                data={item}
                            />
                        ) 
                    }): carList.map((item)=>{
                        return(
                            <Card 
                                key={item.id}
                                data={item}
                            />
                        ) 
                    })}
                    
                </div>
            </div>
        </StyledFeatured>
    )
}

export default Featured