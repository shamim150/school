import React from "react";
import { Link, Outlet } from "react-router-dom";
// import Haeder from '../Haeder'
import Footer from "../Footer";
import { Navbar } from "../Navbar";
import GoogleTranslate from "../../gooleTranslator/GoogleTranslate";

const RootLayOut = () => {
  return (
    <div className="overflow-hidden relative">
      <Link
      
        className="fixed bottom-10 right-2 md:bottom-16 md:right-5 z-50 flex" // Add z-index here
        to="https://wa.me/+8801717507404?text=Hello"
        target="_blank"
      >
        {/* <img
          className="size-16 relative z-auto md:size-24 rounded-full"
          src="/Callme.png"
          alt="Callme"
        /> */}
        <img
          className="size-10 relative z-auto md:size-14"
          src="/whatsapp.gif"
          alt="whatsapp"
        />

      </Link>

 

      <Navbar />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayOut;
