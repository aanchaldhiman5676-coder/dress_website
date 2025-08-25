import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { aabt } from "../assets/assets";

const About = () => {
  return (
    <div className="bg-slate-800 min-h-screen flex flex-col items-center text-white py-10 px-4">
      <h2 className="text-3xl font-bold mb-6"><i>About Our Collection</i></h2>

      <p className="text-center max-w-2xl mb-8 text-gray-300">
        We bring you the best fashion trends ranging from traditional wear to
        western styles. Our collection includes Kurtis, Sarees, Gowns, Jeans,
        Crop Tops and much more — crafted with elegance and comfort in mind.
      </p>

      {/* Carousel */}
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={2}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}  
        className="w-full max-w-3xl"
      >
        <SwiperSlide>
          <img
            src={aabt.img1}
            alt="Kurti Palazzo"
            className="w-full h-[350px] object-cover rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={aabt.img2}
            alt="Saree"
            className="w-full h-[350px] object-cover rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={aabt.img3}
            alt="Western Dress"
            className="w-full h-[350px] object-cover rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={aabt.img4}
            alt="Gown"
            className="w-full h-[350px] object-cover rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer"
          />
        </SwiperSlide>
                <SwiperSlide>
          <img
            src={aabt.img5}
            alt="Gown"
            className="w-full h-[350px] object-cover rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer"
          />
        </SwiperSlide>
                <SwiperSlide>
          <img
            src={aabt.img6}
            alt="Gown"
            className="w-full h-[350px] object-cover rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer"
          />
        </SwiperSlide>
                <SwiperSlide>
          <img
            src={aabt.img7}
            alt="Gown"
            className="w-full h-[350px] object-cover rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer"
          />
        </SwiperSlide>
                <SwiperSlide>
          <img
            src={aabt.img8}
            alt="Gown"
            className="w-full h-[350px] object-cover rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer"
          />
        </SwiperSlide>
                <SwiperSlide>
          <img
            src={aabt.img9}
            alt="Gown"
            className="w-full h-[350px] object-cover rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer"
          />
        </SwiperSlide>
                <SwiperSlide>
          <img
            src={aabt.img10}
            alt="Gown"
            className="w-full h-[350px] object-cover rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer"
          />
        </SwiperSlide>
                <SwiperSlide>
          <img
            src={aabt.img11}
            alt="Gown"
            className="w-full h-[350px] object-cover rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer"
          />
        </SwiperSlide>
                <SwiperSlide>
          <img
            src={aabt.img12}
            alt="Gown"
            className="w-full h-[350px] object-cover rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default About;
