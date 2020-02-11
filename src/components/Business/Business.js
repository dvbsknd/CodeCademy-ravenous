import React from 'react'
import './Business.css'

class Business extends React.Component {
  render () {
    const b=this.props.business;
    return (
      <div className="Business">
        <div className="image-container">
          <img src={b.imageSrc} alt=''/>
        </div>
        <h2>{b.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{b.address}</p>
            <p>{b.city}</p>
            <p>{b.state} {b.zipCode}</p>
          </div>
          <div className="Business-reviews">
            <h3>{b.category.toUpperCase()}</h3>
            <h3 className="rating">{b.rating} stars</h3>
            <p>{b.reviewCount} reviews</p>
          </div>
        </div>
      </div>
    ) 
  }
}

export default Business;
