import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Banner = () => {
    const images = [
        "https://i.ibb.co/zWFqbhq7/side-1.jpg",
        "https://i.ibb.co/kVj3mBDw/slide-2.jpg",
        "https://i.ibb.co/Lz9qKHNh/slide-3.jpg",
    ];
    return (
        <div data-aos="zoom-in-up" className="my-5 rounded-2xl overflow-hidden">
            <Swiper
                modules={[Navigation, Pagination, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                loop={true}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}>
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={image}></img>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Banner;
