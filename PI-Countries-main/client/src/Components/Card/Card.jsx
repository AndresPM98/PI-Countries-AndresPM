import React from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom'

const Tarjeta = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    border:1px solid black;
    width:25%;  /* agregamos un ancho del 25% para que quepan 4 tarjetas por fila */
    img{
      width:100%; /* especificamos un ancho para la imagen */
    }
`
const Card = ({ name, continent, flag, id }) => {

  return (
    <Tarjeta>
      <Link to={`/detail/${id}`}>
        <h2>{name}</h2>
        <img src={flag} alt={name} />
        <p>{continent}</p>
      </Link>
    </Tarjeta>
  )
}

export default Card
