import React from 'react'
import "./Card.css"

// import product1 from '../../assets/product1.jpg'

const Card = (props) => {
  return (
    <div className='card'>
        <img src={props.image} className='productImg' />
        <h2>{props.title}</h2>
        <p>{props.des}</p>
        <h3>{props.price}</h3>
    </div>
  )
}

export default Card
