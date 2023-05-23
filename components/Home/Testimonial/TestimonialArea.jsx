"use client";

import React from "react";
import Slider from "react-slick";
import TestimonialCard from "./TestimonialCard";

const TestimonialArea = () => {
  let settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const arr = [
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      name: "John Deo",
      position: "patient",
    },
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      name: "John Deo",
      position: "patient",
    },
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      name: "John Deo",
      position: "patient",
    },
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      name: "John Deo",
      position: "patient",
    },
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      name: "John Deo",
      position: "patient",
    },
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      name: "John Deo",
      position: "patient",
    },
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      name: "John Deo",
      position: "patient",
    },
    
  ];
  return (
    <section className="section-area section-sp3 testimonial-wraper">
      <div className="container">
        <div className="heading-bx text-center">
          <h6 className="title-ext text-secondary">Testimonial</h6>
          <h2 className="title m-b0">
            See What Are The Patients <br />
            Saying About us
          </h2>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6 text-center">
            <div className="thumb-wraper">
              <img
                className="bg-img"
                src="https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2F28.png?alt=media&token=cf263bfb-85f4-4477-89a5-e716bfa92355"
                alt=""
              />
              <ul>
                <li data-member="1">
                  <a href="/react/">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2F29.jpg?alt=media&token=87d78b0f-af55-4db9-8d1a-3a9118d4831e"
                      alt=""
                    />
                  </a>
                </li>
                <li data-member="2">
                  <a href="/react/">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2F30.jpg?alt=media&token=b420835f-ce38-4c32-954b-87405a6d76d6"
                      alt=""
                    />
                  </a>
                </li>
                <li data-member="3">
                  <a href="/react/">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2F31.jpg?alt=media&token=d09f8e98-e143-4ece-aec9-0e8b355a4fcf"
                      alt=""
                    />
                  </a>
                </li>
                <li data-member="4">
                  <a href="/react/">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2F32.jpg?alt=media&token=665284ae-226a-43ae-9e80-2727bb0ed49a"
                      alt=""
                    />
                  </a>
                </li>
                <li data-member="5">
                  <a href="/react/">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2F33.jpg?alt=media&token=8d71f355-23cf-4936-9fa3-1f21cc815de6"
                      alt=""
                    />
                  </a>
                </li>
                <li data-member="6">
                  <a href="/react/">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2F34.jpg?alt=media&token=a83da3e2-f1d0-495c-a392-fc3a663abaa4"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="slick-slider testimonial-slide slick-initialized"
              dir="ltr"
            >
              <div>
                <Slider {...settings}>
                  {arr.map((element, index) => {
                    return <TestimonialCard key={index} data={element} />;
                  })}
                </Slider>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
      <img
        className="pt-img1 animate1"
        src="https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2F35.png?alt=media&token=680ab664-265a-4731-a32d-706df5fcc8ba"
        alt="icon"
      ></img>
      <img
        className="pt-img2 animate2"
        src="https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2F36.png?alt=media&token=10a0998c-3db0-44ee-92d4-62dd35e1ad9f"
        alt="icon"
      ></img>
      <img
        className="pt-img3 animate3"
        src="https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2F37.png?alt=media&token=2a427ed3-69b7-4eac-9aa6-650332d63cd9"
        alt="icon"
      ></img>
      <img
        className="pt-img4 animate4"
        src="https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2F38.png?alt=media&token=252044e9-6641-4e99-bd69-7ab03cb94d5e"
        alt="icon"
      ></img>
    </section>
  );
};

export default TestimonialArea;
