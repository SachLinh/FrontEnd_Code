/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDanhMuc } from "../../Features/MenuSlice";
import ThongTinSp from "./ThongTinSp";

export default function Body() {
  const dispath = useDispatch();
  const listDanhMucSp = useSelector((state) => state.listDanhMuc);
  useEffect(() => {
    dispath(getAllDanhMuc());
  }, []);

  if (listDanhMucSp?.listCata?.catas) {
    var ShowSanPham = listDanhMucSp.listCata.catas.map((item, index) => {
      if (
        item.name === "Apple" ||
        item.name === "Samsung"
      ) {
        return (
          <div key={index} className="w-full">
            <h4 className="inline-block no-underline lg:text-[25px] md:text-[20px] text-[15px]  2xl:text-left xl:text-left lg:text-left md:text-left sm:text-center text-center font-bold ... hover:underline ... ">
              {item.name}
            </h4>
            <div className="mt-[15px] flex-1 text-right w-full">
              <ul className="mb-[10px]">
                <ThongTinSp id={item._id}/>
              </ul>
            </div>
          </div>
        );
      }
    });
  }

  return (
    <div className="w-full">
      <div className="sanPham w-full">
        <div className="dienThoai w-full flex flex-col justify-start items-start">
          { listDanhMucSp.listCata.catas ? ShowSanPham : ""}
        </div>
        <div
          className="mt-[20px] flex flex-col justify-start 
				   2xl:w-[1300px]  xl:w-[1200px] lg:w-[1000px] md:w-[700px] sm:w-[600px] w-full"
        >
          <h3 className="lg:text-[25px] md:text-[20px] text-[15px] m-2 no-underline text-left font-bold ... hover:underline ... ">
            Chuyên gia thương hiệu
          </h3>
          <div
            className=" w-full 
					justify-start items-center flex-col m-auto 
					lg:flex lg:flex-row lg:flex-nowrap
					sm:flex sm:flex-row  sm:flex-wrap sm:justify-center sm:items-center 
					"
          >
            <div
              className="m-1 flex justify-center
						 "
            >
              <img
                alt=""
                src={require(`./Images/CGTH1.png`)}
                className="rounded-lg
								2xl:w-[300px] xl:w-[270px] lg:w-[240px] md:w-[300px] sm:w-[270px] w-[250px]"
              ></img>
            </div>
            <div
              className=" m-1 flex justify-center
						 "
            >
              <img
                alt=""
                src={require(`./Images/CGTH2.png`)}
                className="rounded-lg 
								2xl:w-[300px] xl:w-[270px] lg:w-[240px] md:w-[300px] sm:w-[270px] w-[250px] "
              ></img>
            </div>
            <div
              className="m-1 flex justify-center
						 "
            >
              <img
                alt=""
                src={require(`./Images/CGTH3.png`)}
                className="rounded-lg
								2xl:w-[300px] xl:w-[270px] lg:w-[240px] md:w-[300px] sm:w-[270px] w-[250px]
								"
              ></img>
            </div>
            <div
              className="m-1 flex justify-center
						"
            >
              <img
                alt=""
                src={require(`./Images/CGTH4.png`)}
                className="rounded-lg
								2xl:w-[300px] xl:w-[270px] lg:w-[240px] md:w-[300px] sm:w-[270px] w-[250px]
								"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
