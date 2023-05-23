import Link from "next/link";
import React from "react";
import {FaArrowRight} from "react-icons/fa"
const WorkArea = () => {
  return (
    <section
      className="section-area section-sp5 work-area"
      style={{backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2F12.png?alt=media&token=eab3e753-1b79-4572-b723-6bf0b82326b7")',backgroundRepeat:'no-repeat',backgroundPosition:'center center',backgroundSize:'100%'}}
   
    >
      <div className="container-sm">
        <div className="heading-bx text-center">
          <h6 className="title-ext text-secondary">Working Process</h6>
          <h2 className="title">How we works?</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-sm-6 mb-30">
            <div className="work-bx">
              <div className="work-num-bx">01</div>
              <div className="work-content">
                <h5 className="title text-secondary mb-10">Make Appointmnet</h5>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of.
                </p>
              </div>
              <Link className="btn btn-primary light" href="/">
                View More 
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-30">
            <div className="work-bx active">
              <div className="work-num-bx">02</div>
              <div className="work-content">
                <h5 className="title text-secondary mb-10">Take Treatment</h5>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of.
                </p>
              </div>
              <Link className="btn btn-primary light" href="/">
                View More 
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-30">
            <div className="work-bx">
              <div className="work-num-bx">03</div>
              <div className="work-content">
                <h5 className="title text-secondary mb-10">Registration</h5>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of.
                </p>
              </div>
              <Link className="btn btn-primary light" href="/">
                View More 
              </Link>
            </div>
          </div>
        </div>
      </div>
      <img className="pt-img1 animate1" src="https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2F13.png?alt=media&token=dec00947-753c-4b81-9966-ff7ca4c81ed3" alt="icon" ></img>
      <img className="pt-img2 animate2" src="https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2F6.png?alt=media&token=9397db5c-0e4a-4f80-be7b-24dd194cf7ad" alt="icon" ></img>
      <img className="pt-img3 animate3" src="https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2F14.png?alt=media&token=748a6492-39d2-479b-a969-85b0f835803e" alt="icon" ></img>
    </section>
  );
};

export default WorkArea;
