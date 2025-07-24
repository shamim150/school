import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";

import Container from "../layer/Container";
import TitleHeader from "../layer/TitleHeader";

const OurClients = () => {
  const clients = [
    { name: "MGI", initials: "/OurCorporateClients/Mgi.jpg", url: "https://www.mgi.org" },
    { name: "Akij", initials: "/OurCorporateClients/AKIJ.jpg", url: "https://www.gulfood.com" },
    { name: "TK", initials: "/OurCorporateClients/TK.jpg", url: "https://www.tkgroupbd.com" },
    { name: "Nabil", initials: "/OurCorporateClients/Nabil.jpg", url: "https://ngibd.com" },
    { name: "SB", initials: "/OurCorporateClients/SB.jpg", url: "https://sbgroup.com.bd" },
    { name: "Desh Bondho", initials: "/OurCorporateClients/DESHBondhu.jpg", url: "https://www.dbg.com.bd" },
    { name: "Edrish Group", initials: "/OurCorporateClients/Edrish.jpg" },
    { name: "Safar Group", initials: "/OurCorporateClients/safarGroup.png", url: "https://www.safargrp.com/" },
  ];

  return (
    <div className="bg-[#ECFAFE]">
      {/* <Container className="">
      <div className="md:py-16 py-4 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">

        <TitleHeader className="text-center mb-12 text-3xl font-bold text-gray-700 " headerText="Our Corporate Clients" />

        <div className="relative">
          <Swiper
            style={{ padding: "20px" }}
            slidesPerView={2}
            spaceBetween={15}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: ".swiper-prev",
              nextEl: ".swiper-next",
            }}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 5,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 35,
              },
            }}
          >
            {clients.map((client, index) => (
              <SwiperSlide
                key={index}
                className="bg-gradient-to-b from-white to-gray-100 p-4 md:p-6 rounded-lg shadow-md flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              >
                {client.url ? (
                  <a
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center"
                  >
                    <img
                      className="w-20 h-20 md:w-24 md:h-24 object-contain mb-3 md:mb-4 rounded-full z-50"
                      src={client.initials}
                      alt={client.name}
                    />
                    <h2 className="text-sm md:text-lg font-medium text-gray-700 text-center">{client.name}</h2>
                  </a>
                ) : (
                  <div className="flex flex-col items-center">
                    <img
                      className="w-20 h-20 md:w-24 md:h-24 object-contain mb-3 md:mb-4 rounded-full z-50"
                      src={client.initials}
                      alt={client.name}
                    />
                    <h2 className="text-sm md:text-lg font-medium text-gray-700 text-center">{client.name}</h2>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="swiper-prev absolute md:top-1/2 -top-6 left-[70%] md:left-[-45px] transform -translate-y-1/2 bg-[#2CB0E1] text-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center shadow-md hover:bg-[#314478] z-10">
            &larr;
          </button>
          <button className="swiper-next absolute md:top-1/2 -top-6 right-2 md:right-[-45px] transform -translate-y-1/2 bg-[#2CB0E1] text-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center shadow-md hover:bg-[#314478] z-10">
            &rarr;
          </button>
        </div>
      </div>
    </Container> */}
    </div>
  );
};

export default OurClients;
