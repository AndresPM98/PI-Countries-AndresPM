import React from 'react'
import "./Card.css"
import { Link } from 'react-router-dom'

const Card = ({ name, continent, flag, id }) => {

  return (
    <div className='Card'>
      <Link to={`/detail/${id}`} className="Link">
        <h2>{name}</h2>
        <img src={flag} alt={name} className="Flag"/>
        <p>{continent}</p>
      </Link>
    </div>
  )
}

export default Card
