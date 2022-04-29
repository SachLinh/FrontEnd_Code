import React from "react";
import { useParams } from "react-router-dom";
import ThongTinSpCon from "../HomeTrangChu/ThongTinSpCon";

export default function DanhMucSP() {
  const params = useParams();

  return (
    <div className="w-full flex flex-row justify-center bg-[#f0f0f0] pb-[50px]">
      <div className="2xl:w-[1300px]  xl:w-[1200px] lg:w-[1000px] md:w-[700px] sm:w-[600px] w-full sm:px-0 px-3
      flex flex-row justify-center items-start mt-[70px] lg:mt-[80px] xl:mt-[100px]">
        <div className="w-full flex flex-row justify-center">
          <div className="w-full lg:mt-[15px] mt-[5px]">
            <ThongTinSpCon idLoai={params.idLoai} />
          </div>
        </div>
      </div>
    </div>
  );
}
