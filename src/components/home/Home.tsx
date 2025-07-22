"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


function Home() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
      className="relative"
    >
     

      {/* Slide 2 - You can duplicate or add more */}
      <SwiperSlide>
        <div className="relative mt-20">
          <img
            src="/assets/dummy.png"
            alt=""
            className="w-full object-cover h-[500px]"
          />
          <div className="fontStyleHeroImage absolute bottom-40 items-center right-0 left-0 text-white justify-center flex flex-col">
            <p>Crafted Threads, Just for You</p>
            <button className="p-2 rounded-3xl border-[1px]">Shop Now</button>
          </div>
        </div>
      </SwiperSlide>
       <SwiperSlide>
        <div className="relative mt-20">
          <img
            src="/assets/dummy.png"
            alt=""
            className="w-full object-cover h-[500px]"
          />
          <div className="fontStyleHeroImage absolute bottom-40 items-center right-0 left-0 text-white justify-center flex flex-col">
            <p>Crafted Threads, Just for You</p>
            <button className="p-2 rounded-3xl border-[1px]">Shop Now</button>
          </div>
        </div>
      </SwiperSlide>
       <SwiperSlide>
        <div className="relative mt-20">
          <img
            src="/assets/dummy.png"
            alt=""
            className="w-full object-cover h-[500px]"
          />
          <div className="fontStyleHeroImage absolute bottom-40 items-center right-0 left-0 text-white justify-center flex flex-col">
            <p>Crafted Threads, Just for You</p>
            <button className="p-2 rounded-3xl border-[1px]">Shop Now</button>
          </div>
        </div>
      </SwiperSlide>
     
    </Swiper>
  );
}

export default Home;
