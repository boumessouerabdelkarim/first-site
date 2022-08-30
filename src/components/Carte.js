import React from 'react'
import '../styles/carte.css'
const Carte = (props) => {
  return (
    <div className='carte'>
<img src={props.imgUrl} alt='img'/>
<div className='carte_container'>
    <h3 className='titre'>{props.title}</h3>
    <p>
        {props.description}
    </p>
</div>
    </div>
  )
}

export default Carte