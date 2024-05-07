import React from 'react'
import'../style/header.css'

const Header = () => {
  return (
    <>
    <div className="header">
        <i class="bi bi-house-fill"></i>
        <i class="bi bi-luggage"><span> Package</span></i>
        <i class="bi bi-tags-fill"> <span>Pricing</span></i>
    </div>
    </>
  )
}

export default Header