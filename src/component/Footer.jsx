import React from 'react'
import '../style/footer.css'

const Footer = () => {
  return (
    <>
    <hr />
     <div className="footer-content">
      <div className="footer-left">
        <h3>About Us</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="footer-right">
        <h3>Contact Us</h3>
        <p>Email: example@example.com</p>
        <p>Phone: 123-456-7890</p>
      </div>
    </div>
    </>
  )
}

export default Footer