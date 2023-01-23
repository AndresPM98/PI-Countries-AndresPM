import styled from "styled-components"

const Tarjeta = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    border:1px solid black;
`

const Card = ({name, continent, flag})=>{


    return(
        <Tarjeta>
            <p>Name: {name}</p>
            <p>Continent: {continent}</p>
            <p>Flag: {flag}</p>
        </Tarjeta>
    )
}

export default Card