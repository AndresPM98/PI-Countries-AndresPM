import React from 'react'
import "./Card.css"
import { Link } from 'react-router-dom'

const Card = ({ name, continent, flag, id }) => {

  return (
    <div className='Card'>
      <Link to={`/detail/${id}`} className="Link">
        <img src={flag} alt={name} className="Flag"/>
        <h3 className='h3Card'>{name}</h3>
        <p className='pCont'>{continent}</p>
      </Link>
    </div>
  )
}

export default Card
