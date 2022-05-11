/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllPromotion } from "../../Features/PromotionSlice";
import { getAllSanPham } from "../../Features/SanPhamSlice";
import PageProd from "../Administrator/Pagination/PageProd";

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
  // Phan trang
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  if (listTTSp?.listSanPham?.product) {
    var currentPosts = listTTSp?.listSanPham?.product.slice(
      indexOfFirstPost,
      indexOfLastPost
    );
    var ShowLoaiSP = currentPosts.map((itemSP, indexSP) => {
      if (itemSP.ID_Cata === props.id) {
        return (
          <div
            key={indexSP}
            className="text-left mt-3 bg-[#fdfbfb]
            w-[180px] md:w-[200px] lg:w-[230px] xl:w-[290px] 
            h-[300px] md:h-[350px] lg:h-[380px] xl:h-[470px]
             mr-[10px]
            cursor-pointer"
          >
            <Link
              className="relative w-full h-full flex flex-col justify-between items-center"
              to={`/product-detail/${itemSP._id}`}
            >
              <p
                className="bg-[#4b7059] absolute top-[20px] md:top-[45px] left-[-7px] z-30
                            h-[20px] md:h-[25px] lg:h-[30px] w-[100px] text-[13px] md:text-[15px] lg:text-[17px]
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
              <div className="w-full md:h-[210px] lg:h-[290px] xl:h-[400px] overflow-hidden">
                <img
                  alt=""
                  src={itemSP.Image}
                  className="w-full h-full
                        text-center hover:scale-110 hover:rotate-12  transition-all duration-500"
                ></img>
              </div>
              {/* het hang */}
              {itemSP.Count == 0 ? (
                <div
                  className="absolute top-[60px] md:top-[70px] lg:top-[100px] xl:top-[150px] flex flex-col justify-center
              w-full md:h-[50px] lg:h-[70px] text-center bg-[#ebe9e9] text-[#f33333] text-[16px] font-[500]"
                >
                  Hết hàng
                </div>
              ) : (
                ""
              )}

              <h4
                className="font-bold m-[5px] text-gray-800 
                text-[13px] md:text-[13px] lg:text-[14px] xl:text-[16px]"
              >
                {itemSP.Name}
              </h4>
              {/* star */}
              <div className="text-[#f7da36] sm:text-[10px] lg:text-[15px]">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              {/* price */}
              <div className="flex">
                <p
                  className="text-[10px] lg:text-[13px] mt-1 mr-2 line-through
                 text-gray-500 flex flex-row justify-center"
                >
                  {khuyenMai?.listPromotion?.pros
                    ? khuyenMai?.listPromotion?.pros.map((pros) => {
                        if (pros._id === itemSP.ID_Promotion) {
                          return formatPrice(
                            itemSP.Price + (itemSP.Price * pros.value) / 100
                          );
                        }
                      })
                    : ""}

                  <span></span>
                </p>
                <p className="text-[#030303] font-bold text-[13px] lg:text-[15px]">
                  {formatPrice(itemSP.Price)}
                </p>
              </div>
              {/* endow */}
              <div
                className="text-black my-1 flex flex-row justify-center w-full bg-gray-200 rounded-md pt-auto
                overflow-hidden "
              >
                <span
                  className="p-[8px] w-full h-[30px] md:h-[50px]
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
