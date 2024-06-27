// MainContent.js
import React from 'react';
import './MainContent.css';
import First from '../images/Img1.jpg'
import Second from '../images/img2.jpg'
import ActivityImage from '../images/Forma 1.jpg'
import HikingImage from '../images/Forma 2.jpg'
import MountainImage from '../images/Forma 3.jpg'
import Third from '../images/img3.jpg'
const MainContent = () => {
  return (
    <div className="main-content">
      {/* Hero Section */}
      <div className="hero-section bg-dark text-white">
        <div className="container-fluid">
          <div className="row g-0">
            <div className="col-lg-6 d-flex align-items-center">
              <div className="text-content p-4 p-lg-5">
                <h1 className="display-4 fw-bold">Discover your next Hike</h1>
                <h2 className="text-info text-uppercase">DISCOVER YOUR NEXT HIKE</h2>
                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
              </div>
            </div>
            <div className="col-lg-6 image-section p-0">
              <div className="image-wrapper">
                <img src={First} alt="Hikers on mountain" className="img-fluid w-100 h-100 object-fit-cover" />
              </div>
            </div>
          </div>
        </div>
        <div className="diagonal-lines d-none d-lg-block">
          <div className="line line-1"></div>
          <div className="line line-2"></div>
        </div>
      </div>

      {/* New Sections */}
      <div className="container mt-5">
        {/* Upper Section */}
        <div className="row mb-5">
          <div className="col-12">
            <h2 className="text-uppercase mb-0">Hiking and Camping</h2>
            <h2 className="text-uppercase">Classes</h2>
            <hr className="bg-info w-25 mb-5" style={{height: '3px'}} />
          </div>
        </div>

        {/* Icons Section */}
        <div className="row text-center mb-5">
  {[
    { title: 'ACTIVITIES', image: ActivityImage },
    { title: 'HIKING', image: HikingImage },
    { title: 'MOUNTAINS', image: MountainImage }
  ].map((item, index) => (
    <div key={index} className="col-md-4 mb-4 mb-md-0">
      <div className="rounded-circle d-inline-flex align-items-center justify-content-center p-4 mb-3" style={{ width: '150px', height: '150px' }}>
        <img src={item.image} className="img-fluid rounded-circle" alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <h5>{item.title}</h5>
      <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipiscing, elit molestie posuere</p>
    </div>
  ))}
</div>


        {/* Rock Climbing Section */}
        <div className="row mt-5">
          <div className="col-md-6 mb-4 mb-md-0">
            <h2 className="text-uppercase mb-4">Rock<br/>Climbing</h2>
            <h5 className="mb-3">1. CLASSES & EVENTS</h5>
            <p>Hatha is the most classic yoga. Its origin is in the Raya Yoga of Patanjali and other classical texts such as Bhagavad Gita and Hatha Yoga Pradipika.</p>
            <hr className="bg-info w-50" style={{height: '3px'}} />
            10 modules<br/> divided into 7 weekends
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className="rounded-circle overflow-hidden" style={{width: '300px', height: '300px'}}>
              <img src={Second} className="img-fluid" alt="Hiker" style={{ width: '100%', height: '100%', objectFit: 'cover' }}  />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid p-0 mt-4">
  <div className="row">
    <div className="col-md-12 p-0">
      <div className="position-relative mt-10">
        <img
          src={Third}
          className="img-fluid w-100"
          alt="Adventure"
          style={{ height: 'auto', objectFit: 'cover', opacity: '0.85' }}
        />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-start justify-content-start text-white" style={{ zIndex: '1', padding: '20px' }}>
          <h1 className="text-white fw-bold cursive-font mb-4">BIG BEND NATIONAL PARK <br/> HIKING GUIDE</h1>
          <h3 className="text-white">THIS HIKE IS THE NEXT BEST <br/> OPTION.</h3>
          <p> LOREM IPSUM</p>
          <button className="btn btn-outline-info btn-sm"style={{ borderColor: '#007bff' }}>see more</button>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default MainContent;