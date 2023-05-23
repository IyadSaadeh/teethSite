import Link from 'next/link'
import React from 'react'

const ServicesCard = ({data}) => {
  return (
    <div
    className="slider-item"
    tabIndex="-1"
    style={{width:'100%',display:'inline-block'}}

    
  >
    <div className="feature-container feature-bx2 feature3">
      <div className="feature-box-xl mb-20">
        <span className="icon-cell">
         <img src={data.icon} alt="icon"></img>
        </span>
      </div>
      <div className="icon-content">
        <h3 className="ttr-title">{data.title}</h3>
        <p>
        {data.descrption}
        </p>
        <Link
          className="btn btn-primary light"
          href={data.link}
        >
          View More
        </Link>
      </div>
    </div>
  </div>
  )
}

export default ServicesCard