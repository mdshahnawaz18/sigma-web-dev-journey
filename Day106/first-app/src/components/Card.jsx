import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
    <div className='card' style={{overflow: "hidden"}}>
        <img src="https://www.shutterstock.com/image-photo/hands-typing-on-laptop-programming-600nw-2480023489.jpg" alt="" width={340}
        style={{border: "2px solid black"}}/>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export default Card
