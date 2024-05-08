import React from 'react'
import'../style/header.css'

const Header = () => {
  return (
    <>
    <div className="header">
        <i className="bi bi-house-fill"></i>
        <i className="bi bi-luggage"><span> Package</span></i>
        <i className="bi bi-tags-fill"> <span>Pricing</span></i>
    </div>
    </>
  )
}

export default Header