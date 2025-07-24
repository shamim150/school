import React from "react";
import Container from "../layer/Container";
import TitleHeader from "../layer/TitleHeader";

const MapLocation = () => {
  return (
    <div className="bg-[#F5F5F5] md:py-10 py-4">
      <Container className="text-center  md:mt-10 mt-5">
        <TitleHeader headerText="Our School Location" />
        <div className="flex justify-center items-center">

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7303.029839825465!2d90.36234632869656!3d23.764671489432985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0a6426a9aad%3A0xfec8ea4f35be6527!2sMohammadpur%20Government%20High%20School!5e0!3m2!1sen!2sbd!4v1753355560241!5m2!1sen!2sbd" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          
        </div>
      </Container>
    </div>
  );
};

export default MapLocation;
