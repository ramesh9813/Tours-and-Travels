import React from 'react'
import '../style/card.css'

const Card = (props) => {
  const data=props.value
  console.log(data.img)
  return (
    <>
    <div className="cards">
      <p className='location'>{data.location}</p>
      <img src={data.img} alt="" />
      <button className='button'>Visit</button>
      <p><span className='days'>{data.number_of_days} Days</span> <span className='cost'>cost: {data.cost}</span></p>
    </div>
    </>
  )
}

export default Card