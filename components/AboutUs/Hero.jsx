import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div class="banner-wraper">
      <div
        class="page-banner banner-lg contact-banner"
      style={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2Fimg1.815eb17a.jpg?alt=media&token=6943d588-877b-40d4-b4f4-784feed60340')" }}

       
      >
        <div class="container">
          <div class="page-banner-entry text-center">
            <h1>About Us</h1>
            <nav aria-label="breadcrumb" class="breadcrumb-row">
              <ul class="breadcrumb">
                <li class="breadcrumb-item">
                  <Link href="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-home"
                    >
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    Home
                  </Link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  About Us
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <img
          class="pt-img1 animate-wave"
          src="https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2F22.png?alt=media&token=8dbff4fb-bbaa-4353-a635-a80e6380371b"
          alt=""
        />
        <img
          class="pt-img2 animate2"
          src="https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2F14.png?alt=media&token=748a6492-39d2-479b-a969-85b0f835803e"
          alt=""
        />
        <img
          class="pt-img3 animate-rotate"
          src="https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2F45.png?alt=media&token=29518c75-8ed5-452b-a324-f2054fd7373f"
          alt=""
        />
      </div>
    </div>
  )
}

export default Hero