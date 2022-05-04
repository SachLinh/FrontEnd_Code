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
                src="https://aroshmart.com/wp-content/uploads/2021/06/mobile-phones-banner.jpg"
                alt=""
                className="w-full h-full"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://static.vecteezy.com/system/resources/previews/001/969/374/large_2x/online-shopping-on-mobile-application-banner-3d-online-store-on-mobile-phone-banner-template-vector.jpg"
                alt=""
                className="w-full h-full"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://i.pinimg.com/originals/e3/56/4d/e3564db3fe0e206d9c4e866435e203c7.jpg"
                alt=""
                className="w-full h-full"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://www.vivoglobal.ph/wp-content/uploads/2020/08/transfer-phone-data-feature-image.jpg"
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
