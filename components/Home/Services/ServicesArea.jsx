"use client";
import React from "react";
import Slider from "react-slick";
import ServicesCard from "./ServicesCard";
import Link from "next/link";

const ServicesArea = () => {
  const arr = [
    {
      link: "/",
      title: "Surgery",
      icon: "https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2Fsvg%20services%2Fsvg1.svg?alt=media&token=968b8025-1461-4fda-a3c4-2cba37cff303",
      descrption: "Phasellus venenatis porta rhoncus. Integer et viverra felis.",
    },
    {
      link: "/",
      title: "Vaccine",
      icon: "https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2Fsvg%20services%2Fsvg2.svg?alt=media&token=b8a7de0a-293d-48ac-a926-555b3db8773d",
      descrption: "Phasellus venenatis porta rhoncus. Integer et viverra felis.",
    },
    {
      link: "/",
      title: "Emergency",
      icon: "https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2Fsvg%20services%2Fsvg3.svg?alt=media&token=2c318b69-30ac-4b87-bb8a-adf656f63507",
      descrption: "Phasellus venenatis porta rhoncus. Integer et viverra felis.",
    },
    {
      link: "/",
      title: "Diagnostics",
      icon: "https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2Fsvg%20services%2Fsvg4.svg?alt=media&token=7060a409-f0d3-44ed-8937-d9c449e0b497",
      descrption: "Phasellus venenatis porta rhoncus. Integer et viverra felis.",
    },
    {
      link: "/",
      title: "Treatment",
      icon: "https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2Fsvg%20services%2Fsvg5.svg?alt=media&token=1b777f87-ed34-4067-8799-6b44bd3f185c",
      descrption: "Phasellus venenatis porta rhoncus. Integer et viverra felis.",
    },
  ];
  let settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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
  return (
    <section className="section-area section-sp1 service-wraper">
      <div className="row align-items-center">
        <div className="col-xl-4 col-lg-7 mb-30">
          <div className="heading-bx">
            <h6 className="title-ext text-secondary">Services</h6>
            <h2 className="title">
              We Cover A Big Variety Of Medical Services
            </h2>
            <p>
              We provide the special tips and advice’s of heath care treatment
              and high level of best.
            </p>
          </div>
          <Link className="btn btn-secondary btn-lg shadow" href="/">
            All Services
          </Link>
        </div>
        <div className="col-xl-8 mb-15">
          <div
            className="slick-slider service-slide slick-arrow-none slick-initialized"
            dir="ltr"
          >
        <div>
                <Slider {...settings}>
                  {arr.map((element, index) => {
                    return <ServicesCard key={index} data={element} />;
                  })}
                </Slider>
              </div>
          </div>
        </div>
      </div>
      <img
        className="pt-img1 animate-rotate"
        src="https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2F24.png?alt=media&token=9fd2b6b6-5882-4543-b39f-8acafe608392"
        alt="icon"
      ></img>
      <img
        className="pt-img2 animate2"
        src="https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2F25.png?alt=media&token=35d29d63-c0bd-46d2-9999-247458dbdba9"
        alt="icon"
      ></img>
      <img
        className="pt-img3 animate-wave"
        src="https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2F26.png?alt=media&token=03d3bb5f-8166-4003-a034-8067a7fde223"
        alt="icon"
      ></img>
      <img
        className="pt-img4 animate1"
        src="https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2F27.png?alt=media&token=dcce8955-6800-4bb9-afe1-6dc19b755f06"
        alt="icon"
      ></img>
    </section>
  );
};

export default ServicesArea;
