/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllPromotion } from "../../Features/PromotionSlice";
import { getAllSanPham } from "../../Features/SanPhamSlice";

export default function ThongTinSp(props) {
  const dispath = useDispatch();
  const listTTSp = useSelector((state) => state.listSanPham);
  const khuyenMai = useSelector((state) => state.listPromotion);
  useEffect(() => {
    dispath(getAllSanPham());
    dispath(getAllPromotion());
  }, []);
  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };
  if (listTTSp?.listSanPham?.product) {
    var ShowLoaiSP = listTTSp?.listSanPham?.product.map((itemSP, indexSP) => {
      if (itemSP.ID_Cata === props.id) {
        return (
          <div
            key={indexSP}
            className="text-left mt-3 w-[326px] h-[543px] p-[5px] mr-[10px]
            cursor-pointer"
          >
            <Link
              className="relative w-full h-full flex flex-col justify-start items-center"
              to={`/product-detail/${itemSP._id}`}
            >
              <p
                className="bg-[#4b7059] absolute top-[45px] left-[-7px] z-30
                            h-[30px] w-[100px] text-[17px]
                            text-center rounded-[15px]  text-white font-bold right-2 bottom-1 "
              >
                Giảm{" "}
                <span>
                  {khuyenMai?.listPromotion?.pros
                    ? khuyenMai?.listPromotion?.pros.map((pros) => {
                        if (pros._id === itemSP.ID_Promotion) {
                          return pros.value;
                        }
                      })
                    : ""}
                  %
                </span>
              </p>
              <div className="w-full h-[408px] overflow-hidden">
                <img
                  alt=""
                  src={itemSP.Image}
                  className="w-full h-full
                        text-center hover:scale-110 hover:rotate-12  transition-all duration-500"
                ></img>
              </div>
              <h4 className="m-[5px] text-[#807e7e] text-[16px] ">
                
              </h4>
              <h4
                className="font-bold m-[5px] text-gray-800 text-[16px]
                                          "
              >
                {itemSP.Name}
              </h4>
              <div className="text-[#f7da36]">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              </div>
              <div className="flex">
                <p className="text-[13px] mt-1 ml-2 line-through text-gray-500">
                  {formatPrice(itemSP.Price + 2000000)}
                  <span></span>
                </p>
                <p className="text-[#030303] font-bold  m-1 ">
                  {formatPrice(itemSP.Price)}
                </p>
              </div>
              <div
                className="text-black my-1 flex flex-row justify-center w-full bg-gray-200 rounded-md pt-auto
                              "
              >
                <span
                  className="p-[8px] w-full h-[50px]
                                text-[12px]
                                "
                >
                  {itemSP.Endow}
                </span>
              </div>
            </Link>
          </div>
        );
      }
    });
  }

  return (
    <div className=" w-full">
      <div className="mt-[15px]">
        <span className="flex flex-row justify-center items-center flex-wrap">
          {listTTSp?.listSanPham?.product ? ShowLoaiSP : ""}
        </span>
      </div>{" "}
    </div>
  );
}
