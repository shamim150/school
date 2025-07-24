"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "../layer/Image";
import induss from "../../../public/Connect With Slider/Induss.jpg";
import maxtherm from "../../../public/Connect With Slider/Maxtherm.jpeg";
import qili from "../../../public/Connect With Slider/Qili.jpg";
import ace from "../../../public/Connect With Slider/Ace_oil.jpg";
import Container from "../layer/Container";
import TitleHeader from "../layer/TitleHeader";

const ConnectWithSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="bg-[#F5F5F5] md:pb-10 pb-4 ">
      <Container>
        <TitleHeader
          className="text-center md:py-10 py-3 mb-5 "
          headerText="আমাদের ছাত্রছাত্রীরাই আমাদের গর্ব, তাদের শিক্ষা, চরিত্র ও সাফল্যই আমাদের পরিচয়।"
        />

        <div
          style={{
            position: "relative",
            padding: "20px",
            maxWidth: "1280px",
            margin: "auto",
          }}
        >
          <Swiper
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                if (prevRef.current && nextRef.current) {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                }
              });
            }}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <a
                className="relative"
                href="/induss"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="h-[300px] w-full object-cover rounded"
                  src={induss} // Ensure induss is the correct image source
                  alt="induss"
                />
                <p className="absolute bottom-0 left-1/2 -translate-x-1/2 md:text-lg text-xs  bg-white font-bold text-center w-[250px]  md:w-[350px]  rounded-lg">
                (Induss)Pioneer in Drier & Parboiling Technology
                </p>
              </a>
            </SwiperSlide>

            <SwiperSlide>
              <a
                className="relative"
                href="/maxtherm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="h-[300px] w-full object-cover rounded"
                  src={maxtherm} // Ensure this is the correct path to your image
                  alt="maxtherm"
                />
                <p className="absolute bottom-0 left-1/2 -translate-x-1/2 md:text-lg text-xs text-nowrap  bg-white font-bold text-center w-[250px]  md:w-[350px] py-2 rounded-lg">
                  Maxtherm (Boiler)
                </p>
              </a>
            </SwiperSlide>

            <SwiperSlide>
              <a
                className="relative"
                href="/qili"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="h-[300px] w-full object-cover rounded"
                  src={qili} // Ensure qili is a valid image source
                  alt="qili"
                />
                <p className="absolute bottom-0 left-1/2 -translate-x-1/2 md:text-lg text-xs text-nowrap  bg-white font-bold text-center w-[250px]  md:w-[350px] py-2 rounded-lg">
                  Qili (Rice Mill Machinery)
                </p>
              </a>
            </SwiperSlide>

            <SwiperSlide>
              <a
                className="relative"
                href="/ace"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="h-[300px] w-full object-cover rounded"
                  src={ace} // Ensure ace is a valid image source
                  alt="ace"
                />

                <p className="absolute bottom-0 left-1/2 -translate-x-1/2 md:text-lg text-xs text-nowrap  bg-white font-bold text-center w-[250px]  md:w-[350px] py-2 rounded-lg">
                  ACE Oil Project & Refinery System
                </p>
              </a>
            </SwiperSlide>
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button
            className="absolute top-[-5px] md:top-1/2 left-[70%] md:-left-[30px] transform -translate-y-1/2 md:translate-y-0 bg-[#2CB0E1] text-white rounded-full w-8 h-8 md:w-10 md:h-10 text-lg cursor-pointer hover:bg-[#314478]  z-10"
            ref={prevRef}
          >
            &larr;
          </button>
          <button
            className="absolute top-[-5px] md:top-1/2 right-4 md:-right-[30px] transform -translate-y-1/2 md:translate-y-0 bg-[#2CB0E1] text-white rounded-full w-8 h-8 md:w-10 md:h-10 text-lg cursor-pointer hover:bg-[#314478] z-10"
            ref={nextRef}
          >
            &rarr;
          </button>
        </div>
      </Container>
    </div>
  );
};

export default ConnectWithSlider;
