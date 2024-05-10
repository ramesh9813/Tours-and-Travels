import React from 'react'
import'../style/header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
   <div className="header">
      <div className="left">
        <Link to="/"style={{ textDecoration: 'none', color: 'inherit' }}> <i className="bi bi-house-fill"></i></Link>
      </div>
      <div className="right">
        <Link to="pricing" className="pricing-link"style={{ textDecoration: 'none', color: 'inherit' }}>Pricing</Link>
        <hr />
        <Link to="travel" className="package-link" style={{ textDecoration: 'none', color: 'inherit' }}>Package</Link>
      </div>
    </div>
    <hr/>
    </>
  )
}

export default Header