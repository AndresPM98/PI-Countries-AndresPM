import styled from "styled-components"


const Tarjeta = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    border:1px solid black;
    width:25%;  /* agregamos un ancho del 25% para que quepan 4 tarjetas por fila */
    img{
        width:315px; /* especificamos un ancho para la imagen */
    }
`

const Card = ({name, continent, flag})=>{


    return(
        <Tarjeta>
            <img src= {flag} alt= {name}/>
            <p>Name: {name}</p>
            <p>Continent: {continent}</p>
        </Tarjeta>
    )
}

export default Card