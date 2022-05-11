/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { getAllDanhMuc } from "../../Features/MenuSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Menu() {
  const [thums, setThums] = useState();
  const dispatch = useDispatch();
  const listCatas = useSelector((state) => state.listDanhMuc);
  const list = listCatas.listCata.catas;
  useEffect(() => {
    dispatch(getAllDanhMuc());
  }, []);

  if (list) {
    var showListCata = list.map((item, index) => {
      return (
        <li
          className="w-full h-full text-[13px] md:text-[14px]
          hover:bg-[#f5edf5] p-[4px] lg:p-[6px] first:rounded-t-2xl last:rounded-b-2xl 
        pl-[10px] flex flex-row justify-between items-center group transition-transform-[0,25s]"
          key={index}
        >          
        <i className="fa-solid fa-angle-right pl-[10px] lg:pl-[15px]"></i>
          <Link
            className="w-full pl-[5px] lg:pl-[15px]"
            to={`/DanhMucSP/${item._id}`}
          >
            {item.name}
          </Link>
        </li>
      );
    });
  }
  //// render
  return (
    <div className="w-full md:w-full py-[20px] lg:py-[30px] font-Roboto text-[14px] h-[400px] md:h-[500px] rounded-xl">
      <div className="flex flex-row justify-around w-full h-full">
        <div
          className={`text-[#030303] h-full rounded-xl shadow-[0_0px_5px_2px_#9b9a9a]
           w-full md:w-[25%] lg:w-[17%]`}
        >
          <ul className="w-full h-full flex flex-col justify-between font-[500]  bg-[#ffffff] rounded-xl">
            {list ? showListCata : "khong co data"}
          </ul>
        </div>
        <div
          className="hidden md:block md:mt-[0px] mt-[40px] rounded-2xl shadow-[#9e9c9c]  
          w-[68%] lg:w-[78%] shadow-[0_0px_5px_2px_#9b9a9a] sm:mx-[0px] mx-[10px]">
          <Swiper
            className="w-full h-full"
            loop={true}
            spaceBetween={10}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            thumbs={{ swiper: thums }}
            modules={[FreeMode, Navigation, Thumbs, Autoplay]}
          >
            <SwiperSlide>
              <img
                src={require(`./Images/Slide1.png`)}
                alt=""
                className="w-full h-full lg:rounded-t-2xl rounded-2xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require(`./Images/slide2.png`)}
                alt=""
                className="w-full h-full lg:rounded-t-2xl rounded-2xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require(`./Images/slide3.png`)}
                alt=""
                className="w-full h-full lg:rounded-t-2xl rounded-2xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require(`./Images/slide4.png`)}
                alt=""
                className="w-full h-full lg:rounded-t-2xl rounded-2xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require(`./Images/slide5.png`)}
                alt=""
                className="w-full h-full lg:rounded-t-2xl rounded-2xl"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
