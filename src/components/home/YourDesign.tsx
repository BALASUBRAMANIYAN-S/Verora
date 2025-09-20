"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import { Autoplay } from "swiper/modules";
function YourDesign() {
  return (
    <div className="mt-10 product-slider">
      <Swiper
        spaceBetween={3}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <div className=" mt-12 items-center justify-center left-0 right-0 flex ">
          <SwiperSlide>
            <img src="/assets/YourDesign.png" className="h-[480px] " alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/YourDesign.png" className="h-[480px] " alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/HomeTwo.png" className="h-[480px] " alt="" />
          </SwiperSlide>
        </div>
      </Swiper>
      <div>
        <center>
          <p className="mt-10 font-bold">Design Your Own Embroidery!</p>
          <p className="mt-3 text-sm">
            Turn your idea into a one-of-a-kind stitched masterpiece
          </p>
          <button className="mt-6 rounded-3xl bg-[#865CBD]">
            <p className="text-white mt-2 mb-2 mr-3 ml-3">Start Customizing</p>
          </button>
        </center>
      </div>
    </div>
  );
}

export default YourDesign;
