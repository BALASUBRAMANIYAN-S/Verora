"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Home() {
  return (
    <div>
      <div className="mx-3 mt-18">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          pagination={{ clickable: true }}
          loop={true}
          className="relative"
        >
          {/* Slide 2 - You can duplicate or add more */}
          <SwiperSlide>
            <div className="relative ">
              <img
                src="/assets/dummy.png"
                alt=""
                className="w-full object-cover h-[500px]"
              />
              <div className="fontStyleHeroImage absolute bottom-40 items-center right-0 left-0 text-white justify-center flex flex-col">
                <p>Crafted Threads, Just for You</p>
                <button className="p-2 rounded-3xl border-[1px]">
                  Shop Now
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative ">
              <img
                src="/assets/HomeTwo.png"
                alt=""
                className="w-full object-cover h-[500px]"
              />
              <div className="fontStyleHeroImage absolute bottom-40 items-center right-0 left-0 text-white justify-center flex flex-col">
                <p>Crafted Threads, Just for You</p>
                <button className="p-2 rounded-3xl border-[1px]">
                  Shop Now
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative ">
              <img
                src="/assets/HomeThree.png"
                alt=""
                className="w-full object-cover h-[500px]"
              />
              <div className="fontStyleHeroImage absolute bottom-40 items-center right-0 left-0 text-white justify-center flex flex-col">
                <p>Crafted Threads, Just for You</p>
                <button className="p-2 rounded-3xl border-[1px]">
                  Shop Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div> 
      {/* Custom Arrows */}
      <div className="absolute z-10 top-[540px]  w-full flex justify-between px-6 transform -translate-y-1/2">
        <button className="custom-prev bg-transparent text-white border-white border-1 p-1 rounded-full shadow">
          <FaChevronLeft />
        </button>
        <button className="custom-next bg-transparent text-white  border-white border-1 p-1 rounded-full shadow">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
  @import
  url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
</style>;
export default Home;
