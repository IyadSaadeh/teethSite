"use client";
import React from "react";
import Slider from "react-slick";
import BlogCard from "./BlogCard";

const BlogArea = () => {
  // setting slider slick
  let settings = {
    arrows: true,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
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
          slidesToShow: 2,
        },
      },
    ],
  };
  const arr = [
    {
      link: "/",
      img1: "https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2Fpic4.28ea761e.jpg?alt=media&token=f4eb1774-f894-4ee9-9095-2b9742105110",
      autor: "Kalina Mollika",
      autorImg:
        "https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2F39.jpg?alt=media&token=bcd4c9b3-394c-430b-b8ab-9bee90ece43b",
      date: "18 July 2021",
      title: "Dental Care for Women is very important",
    },
    {
      link: "/",
      img1: "https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2Fpic5.44c2a542.jpg?alt=media&token=aa06c57c-205a-413c-80c6-09419ce0333e",
      autor: "Michel",
      autorImg:
        "https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2F40.jpg?alt=media&token=7a998047-b972-493b-8eac-eef1b1e36c23",
      date: "17 July 2021",
      title: "Health Will Be A Thing Of The Past And Here's Why",
    },
    {
      link: "/",
      img1: "https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2Fpic1.a3848a11.jpg?alt=media&token=bcab00b5-f62f-4266-8406-b8b03bf94049",
      autor: "John deo",
      autorImg:
        "https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2F29.jpg?alt=media&token=87d78b0f-af55-4db9-8d1a-3a9118d4831e",
      date: "21 July 2021",
      title: "In this hospital there are special surgeon",
    },
    {
      link: "/",
      img1: "https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2Fpic2.67db6c47.jpg?alt=media&token=dafdfb8b-ed2e-4346-8307-966667b760b9",
      autor: "Peter Packer",
      autorImg:
        "https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2F30.jpg?alt=media&token=b420835f-ce38-4c32-954b-87405a6d76d6",
      date: "20 July 2021",
      title: "Can you get a diflucan prescription online?",
    },
    {
      link: "/",
      img1: "https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2Fpic3.89b83151.jpg?alt=media&token=eaf693ad-3633-4f85-ae7d-19f6f8663185",
      autor: "Sonar Moyna",
      autorImg:
        "https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2F31.jpg?alt=media&token=d09f8e98-e143-4ece-aec9-0e8b355a4fcf",
      date: "19 July 2021",
      title: "Why Is Skin Surgeon Considered Underrated",
    },
  ];
  return (
    <section
      className="section-area section-sp1 blog-area"
      style={{
        backgroundImage:
          "url('https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2Fline-bg2.cfded2fd.png?alt=media&token=f49ed52d-8b4e-44d4-bdf1-a867cc635904')",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="heading-bx text-center">
          <h6 className="title-ext text-secondary">Latest News</h6>
          <h2 className="title">Our Latest News</h2>
        </div>
        <div
          className="slick-slider tt-slider blog-slide slider-sp0 slick-arrow-none slick-initialized"
          dir="ltr"
        >
          <div>
            <Slider {...settings}>
              {arr.map((element, index) => {
                return <BlogCard key={index} data={element} />;
              })}
            </Slider>
          </div>
        </div>
      </div>
      <img
        className="pt-img1 animate1"
        src="https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2F3.png?alt=media&token=eb5d4147-9962-4e9a-a83f-3d0d3ac601b3"
        alt="icon"
      ></img>
      <img
        className="pt-img2 animate2"
        src="https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2F11.png?alt=media&token=3fc041de-53c1-468d-9162-692499def906"
        alt="icon"
      ></img>
      <img
        className="pt-img3 animate-rotate"
        src="https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2F24.png?alt=media&token=9fd2b6b6-5882-4543-b39f-8acafe608392"
        alt="icon"
      ></img>
      <img
        className="pt-img4 animate-wave"
        src="https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2F22.png?alt=media&token=8dbff4fb-bbaa-4353-a635-a80e6380371b"
        alt="icon"
      ></img>
    </section>
  );
};

export default BlogArea;
