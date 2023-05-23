import Link from "next/link";
import React from "react";
import {BsFillTelephoneFill} from "react-icons/bs"
const Footer = () => {
  return (
    <footer
      className="footer"
      style={{
        backgroundImage:
          "url('https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2Ffooter.d025f458.jpg?alt=media&token=429dc8a7-a822-4fb5-8ea9-936e6764af55')",
      }}
    >
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="widget widget_info">
                <div className="footer-logo">
                  <Link href={"/"}>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/logo-removebg-preview.png?alt=media&token=7b1a8095-a5ba-4f3b-b37c-f3abba5ebc8f"
                      alt="logo"
                    ></img>
                  </Link>
                </div>
                <div className="ft-contact">
                  <p>
                    Lorem ipsum is dolor sit amet, csectetur adipiscing elit,
                    dolore smod tempor incididunt ut labore et.
                  </p>
                  <div className="contact-bx">
                    <div className="icon">
                      <BsFillTelephoneFill/>
                    </div>
                    <div className="contact-number">
                      <span>Contact Us</span>
                        <a href="tel:0798632513">
                      <h4 className="number">
                      0792261998
                        </h4>
                        </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-6">
              <div className="widget footer_widget ml-50">
                <h3 className="footer-title">Quick Links</h3>
                <ul>
                  <li>
                    <Link href="/react/about">
                      <span>About Us</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <span>Services</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <span>Booking</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <span>Faq's</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <span>Blogs</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <span>Out Team</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-6">
              <div className="widget footer_widget">
                <h3 className="footer-title">Our Service</h3>
                <ul>
                  <li>
                    <Link href="/">
                      <span>Dental Care</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <span>Cardiac Clinic</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <span>Massege Therapy</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <span>Cardiology</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <span>Precise Diagnosis</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <span>Abmbulance Services</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="widget widget_form">
                <h3 className="footer-title">Subcribe</h3>
                <form className="subscribe-form subscription-form mb-30">
                  <div className="ajax-message"></div>
                  <div className="input-group">
                    <input
                      name="email"
                      required=""
                      className="form-control"
                      placeholder="Email Address"
                      type="email"
                    />
                  </div>
                  <button
                    name="submit"
                    value="Submit"
                    type="submit"
                    className="btn btn-secondary shadow w-100"
                  >
                    Subscribe Now
                  </button>
                </form>
                <div className="footer-social-link">
                  <ul>
                    <li>
                      <Link
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.facebook.com/"
                      >
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2F41.png?alt=media&token=01f058ad-8d7a-4ba2-8b9b-1e3995a39693"
                          alt="facebook"
                        ></img>
                      </Link>
                    </li>
                    <li>
                      <Link
                        target="_blank"
                        rel="noreferrer"
                        href="https://twitter.com/"
                      >
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2F42.png?alt=media&token=10af6c95-72ff-40de-8d8e-849b5b4be8dc"
                          alt="twitter"
                        ></img>
                      </Link>
                    </li>
                    <li>
                      <Link
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.instagram.com/"
                      >
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2F43.png?alt=media&token=ed3d7aee-ba6c-45fb-98b0-3d8981c52cf9"
                          alt="instagram"
                        ></img>
                      </Link>
                    </li>
                    <li>
                      <Link
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/"
                      >
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2F44.png?alt=media&token=768a3ff4-4c19-425c-a6ad-71a566864a0b"
                          alt="linkedin"
                        ></img>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="footer-bottom">
          <div className="row">
            <div className="col-12 text-center">
              <p className="copyright-text">
                Copyright © 2023 Design &amp; Developed by Iyad Saadeh
              </p>
            </div>
          </div>
        </div>
      </div>
      <img
        className="pt-img1 animate-wave"
        src="https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2F22.png?alt=media&token=8dbff4fb-bbaa-4353-a635-a80e6380371b"
        alt="icon"
      ></img>
      <img
        className="pt-img2 animate1"
        src="https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2F14.png?alt=media&token=748a6492-39d2-479b-a969-85b0f835803e"
        alt="icon"
      ></img>
      <img
        className="pt-img3 animate-rotate"
        src="https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2F45.png?alt=media&token=29518c75-8ed5-452b-a324-f2054fd7373f"
        alt="icon"
      ></img>
      <img
        className="pt-img4 animate-wave"
        src="https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2F22.png?alt=media&token=8dbff4fb-bbaa-4353-a635-a80e6380371b"
        alt="icon"
      ></img>
    </footer>
  );
};

export default Footer;
