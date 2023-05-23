import React from "react";

import {TfiWorld,TfiMapAlt} from "react-icons/tfi"
import {BsPersonVcard,BsTwitter,BsLinkedin,BsInstagram} from "react-icons/bs"

const FormEmail = () => {
  return (
    <section class="">
      <div class="container">
        <div class="contact-wraper">
          <div class="row">
            <div class="col-lg-6 mb-30">
              <form class="form-wraper contact-form ajax-form">
                <div class="ajax-message"></div>
                <div class="row">
                  <div class="form-group col-md-12">
                    <input
                      name="name"
                      type="text"
                      required=""
                      class="form-control"
                      placeholder="Your Name"
                    />
                  </div>
                  <div class="form-group col-md-12">
                    <input
                      name="email"
                      type="email"
                      required=""
                      class="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div class="form-group col-md-12">
                    <input
                      name="phone"
                      type="text"
                      required=""
                      class="form-control"
                      placeholder="Phone Numbers"
                    />
                  </div>
                  <div class="form-group col-md-12">
                    <select class="form-select form-control">
                      <option>Selecty Department</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div class="form-group col-md-12">
                    <textarea
                      name="message"
                      required=""
                      class="form-control"
                      placeholder="Type Message"
                    ></textarea>
                  </div>
                  <div class="col-lg-12">
                    <button
                      name="submit"
                      type="submit"
                      value="Submit"
                      class="btn w-100 btn-secondary btn-lg"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div class="col-lg-6 mb-30">
              <div
                class="contact-info ovpr-dark"
                style={{
                  backgroundImage:
                    "url('https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2Fpic-1.ad1ed7ee.jpg?alt=media&token=c75fa498-c802-478d-91f1-97c623809692')",
                }}
              >
                <div class="info-inner">
                  <h4 class="title mb-30">Contact Us For Any Informations</h4>
                  <div class="icon-box">
                    <h6 class="title">
                      <TfiMapAlt/>Location
                    </h6>
                    <p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
                  </div>
                  <div class="icon-box">
                    <h6 class="title">
                      <BsPersonVcard/>Email &amp; Phone
                    </h6>
                    <a class="text-white" href="/react/contact-us">
                      info@yourdomain.com
                    </a>
                    <p>(+68) 120034509</p>
                  </div>
                  <div class="icon-box">
                    <h6 class="title">
                      <TfiWorld/>Follow Us
                    </h6>
                    <ul class="social-media">
                      <li>
                        <a
                          rel="noreferrer"
                          target="_blank"
                          href="https://twitter.com/"
                        >
                          <BsTwitter/>
                        </a>
                      </li>
                      <li>
                        <a
                          rel="noreferrer"
                          target="_blank"
                          href="https://www.linkedin.com/"
                        >
                          <BsLinkedin/>
                        </a>
                      </li>
                      <li>
                        <a
                          rel="noreferrer"
                          target="_blank"
                          href="https://www.instagram.com/"
                        >
                          <BsInstagram/>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormEmail;
