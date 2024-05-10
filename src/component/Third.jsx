import React from 'react';
import '../style/third.css';

const Third = () => {
  return (
    <>
        <h2 className='tours-heading'>Tours</h2>
      <div className="tours">
        <div className="image-container">
          <img className="tours-image" src="https://images.unsplash.com/photo-1430089430181-74b60db38d4f?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <div className="video-container">
            <iframe
              title="YouTube Video"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/nyA3teAJkK0?autoplay=1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="description-container">
            <p className="service-description">
              Tours and travel services offer a gateway to exploration and adventure, providing individuals with immersive experiences that transcend boundaries and cultures. From awe-inspiring natural wonders to vibrant urban landscapes, these services curate journeys that cater to diverse interests and preferences. Whether seeking solace in serene landscapes, embarking on adrenaline-fueled escapades, or delving into rich cultural tapestries, tours and travel services serve as conduits for unforgettable memories and transformative encounters.
            </p>
            <button className="explore-packages">Packages</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Third;
