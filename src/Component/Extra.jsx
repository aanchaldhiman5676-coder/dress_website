import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { ssss } from "../assets/assets";

const Extra = () => {
  return (
    <div className='my-4 bg-slate-800 text-white '><h1 className='text-center mb-3'><i>From Classic to Trendy- <span className='text-orange-600'>Fashion</span> for Him & Her</i></h1> 
       {/* Carousel */}
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}  
        className="w-full max-w-3xl"
      >
        <SwiperSlide>
          <img
            src={ssss.im4}
            alt="Kurti Palazzo"
            className="w-full h-[350px] object-cover rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={ssss.im3}
            alt="Saree"
            className="w-full h-[350px] object-cover rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={ssss.b1}
            alt="Western Dress"
            className="w-full h-[350px] object-cover rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={ssss.im7}
            alt="Gown"
            className="w-full h-[350px] object-cover rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer"
          />
        </SwiperSlide>
                <SwiperSlide>
          <img
            src={ssss.im8}
            alt="Gown"
            className="w-full h-[350px] object-cover rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer"
          />
        </SwiperSlide>
                <SwiperSlide>
          <img
            src={ssss.dress}
            alt="Gown"
            className="w-full h-[350px] object-cover rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer"
          />
        </SwiperSlide>
                <SwiperSlide>
          <img
            src={ssss.im16}
            alt="Gown"
            className="w-full h-[350px] object-cover rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer"
          />
        </SwiperSlide>
                <SwiperSlide>
          <img
            src={ssss.im17}
            alt="Gown"
            className="w-full h-[350px] object-cover rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer"
          />
        </SwiperSlide>
                <SwiperSlide>
          <img
            src={ssss.w4}
            alt="Gown"
            className="w-full h-[350px] object-cover rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer"
          />
        </SwiperSlide>
                <SwiperSlide>
          <img
            src={ssss.im20}
            alt="Gown"
            className="w-full h-[350px] object-cover rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer"
          />
        </SwiperSlide>
                <SwiperSlide>
          <img
            src={ssss.im22}
            alt="Gown"
            className="w-full h-[350px] object-cover rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer"
          />
        </SwiperSlide>
                <SwiperSlide>
          <img
            src={ssss.im21}
            alt="Gown"
            className="w-full h-[350px] object-cover rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Extra
