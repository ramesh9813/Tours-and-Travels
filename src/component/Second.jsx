import React from 'react'
import Card from './Card'
import data from '../Json/data.json'
import '../style/second.css'

const Second = () => {
  console.log(data.packages)
  return (
    <>
    <h2 className='second'>OUR PREMIUM PACKAGES</h2>
    <div className="packages">
      {data.packages.map((item,index)=>{
        return <Card key={index} value={item}/>
      })}
     
    </div>
    </>
  )
}

export default Second