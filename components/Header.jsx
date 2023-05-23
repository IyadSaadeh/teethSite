"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = ({params}) => {
    
    const [scrollPosition, setScrollPosition] = useState(0);
    const [linkVisted, setLinkVisted] = useState(0);

useEffect(()=>{
    console.log(params)
    const handleScroll = () => {
        setScrollPosition(window.pageYOffset);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
       
},[])
 
  return (
    <header>
      <nav
        className={
            scrollPosition?"flex justify-around py-4 w-full fixed top-0 left-0 right-0 z-50 bg-white shadow-md":"flex justify-around py-4 w-full fixed top-0 left-0 right-0 z-50 "
        }
        id="header"
      >
        {/* <!-- Logo Container --> */}
        <div className="flex items-center">
          {/* <!-- Logo --> */}
          <Link href={"#"} className="cursor-pointer">
            <h3 className="text-2xl font-medium text-[#f17732]">
              <img
                className="h-10 object-cover"
                src="https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/logo-removebg-preview.png?alt=media&token=7b1a8095-a5ba-4f3b-b37c-f3abba5ebc8f"
                alt="Store Logo"
              ></img>
            </h3>
          </Link>
        </div>

        {/* <!-- Links Section --> */}
        <div className="items-center hidden space-x-8 lg:flex">
          <Link
            href={"/"}
            className={linkVisted!==0?"flex text-gray-600 hover:text-[#f17732] cursor-pointer transition-colors duration-300":"flex text-[#f17732] cursor-pointer transition-colors duration-300"} onClick={()=>setLinkVisted(0)}
          >
            Home
          </Link>

          <Link
            href={"/about"}
            className={linkVisted!==1?"flex text-gray-600 hover:text-[#f17732] cursor-pointer transition-colors duration-300":"flex text-[#f17732] cursor-pointer transition-colors duration-300"} onClick={()=>setLinkVisted(1)}
          >
            About Us
          </Link>

          <Link
            href={"/contact"}
            className={linkVisted!==2?"flex text-gray-600 hover:text-[#f17732] cursor-pointer transition-colors duration-300":"flex text-[#f17732] cursor-pointer transition-colors duration-300"} onClick={()=>setLinkVisted(2)}
          >
            Contact Us
          </Link>
        </div>

        {/* <!-- Icon Menu Section --> */}
        <div className="flex items-center space-x-5">
          {/* <!-- Login --> */}
          <Link
            href={"/login"}
            className="flex text-gray-600 
                    cursor-pointer transition-colors duration-300
                    font-semibold hover:text-blue-600"
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
