import React from 'react'
import '../style/card.css'
import { Link } from 'react-router-dom'
 


const Card = (props) => {
  const data=props.value
 
  const handleSave = () => {
    localStorage.setItem('myData', JSON.stringify(data));
    
  };

  return (
    <>
    <div className="cards">
      <h2 className='location'>{data.location}</h2>
      <img src={data.img} alt="" />
      <button className='button visit' onClick={handleSave}> 
         <Link to={{
             pathname: '/country',
             state: { yourData: "hello i am good " }
          }} style={{ textDecoration: 'none', color: 'inherit' }}>Visit</Link>
      </button>
      <button className='button add'>Add</button>
      <p><span className='days'>{data.number_of_days} Days</span> <span className='cost'>cost: {data.cost}</span></p>
    </div>
    </>
  )
}

export default Card