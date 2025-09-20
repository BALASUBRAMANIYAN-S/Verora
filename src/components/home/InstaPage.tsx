"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function InstaPage() {
  return (
    <div className="mt-16">
      <center>
        <p className="text-xl font-bold">Verora Instagram ❤️</p>
        <p className="mt-4 text-gray-600">
          Follow us at
          <span className="border-b-2 border-black font-medium">verora.in</span>
        </p>
      </center>

      <div className="mt-8 px-4">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="/assets/InstapageImage.png"
              alt="Slide 1"
              className="w-full rounded-xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/InstapageImage.png"
              alt="Slide 2"
              className="w-full rounded-xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/InstapageImage.png"
              alt="Slide 3"
              className="w-full rounded-xl"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Optional: Icons (just for design; not controlling Swiper here) */}
      <div className="flex justify-center mt-4 gap-4 text-xl text-gray-500">
        <div className="custom-prev">
          <FaChevronLeft />
        </div>
        <div className="custom-next">
          <FaChevronRight />
        </div>
      </div>
    </div>
  );
}

export default InstaPage;
