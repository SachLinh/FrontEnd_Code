/** @format */
import React from "react";
import Banner from "../FooterAndHeader/Banner";
import Body from "./Body";

export default function Content() {
  return (
    <div className="w-full flex flex-col justify-start bg-[#f7f7f7]">
      <Banner />
      <div className="w-full flex flex-col justify-start items-center">
        <div
          className=" 2xl:w-[1300px]  xl:w-[1200px] lg:w-[1000px] md:w-[700px] sm:w-[600px] w-full 
          sm:px-0 2xl:pt-[70px] xl:pt-[70px] lg:pt-[50px] md:pt-[30px] pt-[25px] ">
          <Body/>
        </div>
      </div>
    </div>
  );
}
