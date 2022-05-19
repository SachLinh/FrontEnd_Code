import React from "react";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";

export default function Banner() {
  return (
    <div className="w-full h-full flex flex-col justify-start items-center mt-[60px]">
      <div className="w-full h-[270px] sm:h-[350px] md:h-[450px] lg:h-[600px] xl:h-[700px]">
        <div className="w-full h-full">
        <Swiper
            className="w-full h-full"
            loop={true}
            spaceBetween={10}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[FreeMode, Navigation, Thumbs, Autoplay]}
          >
            <SwiperSlide>
              <img
                src={require('../FooterAndHeader/ImageBanner/banner1.jpg')}
                alt=""
                className="w-full h-full"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require('../FooterAndHeader/ImageBanner/banner2.jpg')}
                alt=""
                className="w-full h-full"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require('../FooterAndHeader/ImageBanner/banner3.jpg')}
                alt=""
                className="w-full h-full"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require('../FooterAndHeader/ImageBanner/banner4.png')}
                alt=""
                className="w-full h-full"
              />
            </SwiperSlide>
          </Swiper>
          {/* <img
                src="https://i.pinimg.com/originals/e3/56/4d/e3564db3fe0e206d9c4e866435e203c7.jpg"
                alt=""
                className="w-full h-full"
              /> */}
        </div>
      </div>
    </div>
  );
}
