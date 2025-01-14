import React from 'react'
import '../style/first.css'
// import firstImage from './image/first.jpg';


const First = () => {
  return (
    <>
    <div className="first">
          <img className='first-image' src="https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" srcset="" />
          <div className="content">
            <h1 className='content-heading'> Travel & Tour</h1>
            <p className='content-description'>I have always imagined paradise will be a kind of library</p>
            <button className='search-package'>Search</button>
          </div>
        </div>
    </>
  )
}

export default First