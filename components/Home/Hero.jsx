import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div
      className="main-banner"
      style={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2Fbg1.c53c8971.jpg?alt=media&token=78a9dddf-9fb2-4338-b9d4-39aa3b53c242')" }}
    >
      <div className="container inner-content">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-6 col-sm-7">
            <h6 className="title-ext text-primary">
              We Provide All Health Care Solution
            </h6>
            <h1>Protect Your Health And Take Care To Of Your Health</h1>
            <Link className="btn btn-secondary btn-lg shadow" href="/">
              Read More
            </Link>
          </div>
          <div className="col-lg-5 col-md-6 col-sm-5">
            <div className="banner-img">
              <img src="https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/doctor.7c2bc96d.png?alt=media&token=95c6564f-581b-484e-9874-3634f392fb13" alt="banner img" ></img>
            </div>
          </div>
        </div>
      </div>
      <img className="pt-img1 animate1" src="https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2F3.png?alt=media&token=eb5d4147-9962-4e9a-a83f-3d0d3ac601b3" alt="icon" ></img>
      <img className="pt-img2 animate2" src="https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2F4.png?alt=media&token=f1ac80aa-4226-4e1d-9e1d-95bd2cd96605" alt="icon" ></img>
      <img className="pt-img3 animate3" src="https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2F5.png?alt=media&token=902e602b-2e9c-4ce9-bc39-d24901582fdc" alt="icon" ></img>
      <img className="pt-img4 animate4" src="https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2F6.png?alt=media&token=9397db5c-0e4a-4f80-be7b-24dd194cf7ad" alt="icon" ></img>
      <img className="pt-img5 animate-wave" src="https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2F7.png?alt=media&token=2d44d553-0812-4976-be20-68449d6501de" alt="icon" ></img>
    </div>
  );
};

export default Hero;
