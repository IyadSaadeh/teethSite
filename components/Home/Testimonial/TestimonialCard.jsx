import React from 'react'

const TestimonialCard = ({data}) => {
  return (
    <div
    className="slider-item"
    
    style={{ width: "100%", display: "inline-block" }}
  >
    <div className="testimonial-bx">
      <div className="testimonial-content">
        <p>
        {data.description}
        </p>
      </div>
      <div className="client-info">
        <h5 className="name">{data.name}</h5>
        <p>{data.position}</p>
      </div>
      <div className="quote-icon">
      <svg xmlns="http://www.w3.org/2000/svg" fill='#f17732' viewBox="0 0 448 512"><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"/></svg>
       
      </div>
    </div>
  </div>
  )
}

export default TestimonialCard