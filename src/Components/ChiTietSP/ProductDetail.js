/** @format */

import { ImGift } from "react-icons/im";
import { BsCheckCircle } from "react-icons/bs";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import React from "react";
import SimilarProduct from "./SimilarProduct";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { detailSP } from "../../Features/SanPhamSlice";
import { getAllThongSo } from "../../Features/ThongSoSlice";

function ProductDetail() {
  const params = useParams();
  const dispatch = useDispatch();
  const detailProduct = useSelector((state) => state.listSanPham);
  const thongso = useSelector((state) => state.listThongSo);
  useEffect(() => {
    dispatch(detailSP(params.idSP));
    dispatch(getAllThongSo());
  }, [params.idSP]);
  const keyLocal = "data";
  if (localStorage.getItem(keyLocal) === null) {
    localStorage.setItem(keyLocal, JSON.stringify([]));
  }
  var dataString = JSON.parse(localStorage.getItem(keyLocal) || "[]");

  const storage = () => {
    if (dataString.length === 0) {
      dataString.push(detailProduct?.detailSP?.product);
      localStorage.setItem(keyLocal, JSON.stringify(dataString));
      toast.success("👋 Sản phẩm được thêm vào giỏ hàng!");
    } else {
      let dem = 0;
      for (let i = 0; i < dataString.length; i++) {
        if (dataString[i]._id === detailProduct?.detailSP.product._id) {
          dem += 1;
        }
      }
      if (dem === 0) {
        dataString.push(detailProduct?.detailSP?.product);
        localStorage.setItem(keyLocal, JSON.stringify(dataString));
        toast.success("👋 Sản phẩm được thêm vào giỏ hàng!");
      } else {
        toast.warn("🦄 Sản phẩm đã tồn tại!");
      }
    }
  };
  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };
  return (
    <div className="w-full">
      <div className="flex justify-center items-center text-center">
        <div
          className="font-sans 2xl:w-[1300px] relative xl:w-[1200px] 
				lg:w-[1000px] md:w-[700px] sm:w-[600px] w-[350px]"
        >
          <div
            className="py-[10px] border-solid ml-2 mt-[65px] 
					flex lg:flex-row flex-col justify-start lg:justify-between lg:items-center items-start w-full"
          ></div>
          <div className="border-y-[1px] border-gray-200 pb-[30px] shadow-xl bg-[#ffffff] rounded-xl">
            <div className="flex flex-row justify-around text-center items-start">
              <div className="shadow-sm border-[1px] mt-[10px] ml-[10px] p-[10px] rounded-xl w-[30%]">
                <h3 className="font-bold text-[20px]  mb-[20px] lg:text-[18px] md:text-[17px] ">
                  {detailProduct?.detailSP?.product?.Name}
                </h3>
                <div className="flex justify-center ">
                  <img src={detailProduct?.detailSP?.product?.Image} />
                </div>
                <div className="flex justify-center m-[5px] lg:ml-[10px]">
                  <img
                    className="mt-5 rounded-[40px] w-[100%] "
                    src="https://cdn.cellphones.com.vn/media/wysiwyg/Banner/400-100-product.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="shadow-sm border-[1px] mt-[10px] p-[20px] rounded-xl  w-[30%]">
                <div className="lg:w-[90px] lg:h-6 lg:text-[14px] lg:ml-0 w-[80px] h-[25px] ml-5 text-center text-[14px] text-red-600 bg-red-100 border-[1px] border-red-500 rounded-lg ">
                  <p className="">Trả góp 0%</p>
                </div>
                <div className="flex my-4 text-center text-[14px] lg:ml-0 ml-5">
                  <p className="lg:text-[18px] font-bold text-red-500">
                    {formatPrice(detailProduct?.detailSP?.product?.Price)}
                  </p>
                  <p className="lg:text-[17px] text-gray-400 ml-4 mt-[2px] line-through">
                    {formatPrice(
                      detailProduct?.detailSP?.product?.Price + 2000000
                    )}
                  </p>
                </div>
                <div className="text-left">
                  <p className="lg:text-[17px] font-[500] text-[#fc4444] mt-[2px]">
                    Color:{" "}
                    <span className="text-[#242f91]">
                      {detailProduct?.detailSP?.product?.Color}
                    </span>
                  </p>
                </div>
                <div className="mt-7 border-[1px] rounded-xl ml-3 mr-3 lg:ml-0 lg:mr-0">
                  <div className="flex  text-red-600 bg-red-200 py-[5px] px-3 rounded-t-xl">
                    <div className="mt-1 lg:text-[18px] text-[14px]">
                      <ImGift />
                    </div>
                    <p className=" lg:text-[18px] text-[14px] font-bold">
                      Khuyến mại
                    </p>
                  </div>
                  <div className="hover:text-red-500 lg:text-[16px] text-[14px] px-3 py-2">
                    <a href="/">
                      {detailProduct?.detailSP?.product?.Endow}
                      <span className="text-red-500"> (xem chi tiết)</span>
                    </a>
                  </div>
                </div>
                <div className="mt-5 ">
                  <div>
                    <div
                      className="text-center bg-red-600 rounded-[50px] lg:py-2 text-white cursor-pointer ml-3 mr-3 lg:ml-0 lg:mr-0 md:p-2 sm:p-2 p-2"
                      onClick={storage}
                    >
                      <h1 className="font-bold lg:text-[18px] text-[16px] md:text-[17px]">
                        Thêm vào giỏ hàng
                      </h1>
                      <p className="lg:text-[18px] text-[14px]">
                        (Giao tận nơi hoặc lấy tại cửa hàng)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-3 border-[1px] rounded-xl border-gray-300 ml-3 mr-3 lg:ml-0 lg:mr-0">
                  <div className="bg-gray-300 px-2 py-1 font-bold text-gray-700 rounded-t-xl ">
                    <p className="lg:text-[16px] text-[14px]">ƯU ĐÃI THÊM</p>
                  </div>
                  <div className="my-3 mx-2">
                    <div className="flex">
                      <BsCheckCircle className="text-green-600 mt-1 lg:text-[17px] text-[20px] " />
                      <p className="lg:text-[14px] text-[14px] ml-2">
                        Giảm thêm tới 1% cho thành viên Smember (áp dụng tùy sản
                        phẩm)
                      </p>
                    </div>
                    <div className="flex">
                      <BsCheckCircle className="text-green-600 mt-1 lg:text-[17px] text-[20px]" />
                      <p className="lg:text-[14px] text-[14px] ml-2">
                        Mở thẻ tín dụng Shinhanbank, nhận voucher đến 2.000.000đ
                      </p>
                    </div>
                    <div className="flex">
                      <BsCheckCircle className="text-green-600 mt-1 lg:text-[17px] text-[20px]" />
                      <p className="lg:text-[14px] text-[14px] ml-2">
                        Giảm thêm 5% (tối đa 500k) khi thanh toán qua ví Moca
                        trên ứng dụng Grab
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {thongso?.listThongSo?.spec
                ? thongso?.listThongSo?.spec.map((item) => {
                    if (
                      item._id === detailProduct?.detailSP?.product?.ID_Spec
                    ) {
                      return (
                        <div className="rounded-xl border-[1px] mt-[10px] mr-[10px] h-fit shadow-sm  w-[30%]">
                          <p className="font-bold py-1 px-1 text-gray-600 lg:text-[18px] text-[14px]">
                            Thông số kỹ thuật
                          </p>
                          <div className="lg:text-[16px] text-[14px] m-3 border-[1px] border-gray-300 rounded-xl">
                            <div className="grid grid-cols-3 py-2 px-2 bg-gray-200 rounded-t-xl">
                              <div>
                                Kích thước
                                <br /> màn hình
                              </div>
                              <div className="col-span-2 ">
                                {item?.KichThuocManHinh}
                              </div>
                            </div>
                            <div className="grid grid-cols-3 py-2 px-2 ">
                              <div>
                                Công nghệ
                                <br /> màn hình
                              </div>
                              <div className="col-span-2 ">
                                {item?.CongNgheManHinh}
                              </div>
                            </div>
                            <div className="grid grid-cols-3 py-2 px-2 bg-gray-200">
                              <div>Camera sau</div>
                              <div className="col-span-2 ">
                                {item?.CameraSau}
                              </div>
                            </div>
                            <div className="grid grid-cols-3 py-2 px-2 ">
                              <div>Camera trước</div>
                              <div className="col-span-2 ">
                                {" "}
                                {item?.CameraTruoc}
                              </div>
                            </div>
                            <div className="grid grid-cols-3 py-2 px-2 bg-gray-200">
                              <div>Chipset</div>
                              <div className="col-span-2 ">
                                {item?.ChipXuLy}
                              </div>
                            </div>
                            <div className="grid grid-cols-3 py-2 px-2 ">
                              <div>Dung lượng RAM</div>
                              <div className="col-span-2 ">{item?.RAM}</div>
                            </div>
                            <div className="grid grid-cols-3 py-2 px-2 bg-gray-200">
                              <div>Bộ nhớ trong</div>
                              <div className="col-span-2 ">{item?.ROM}</div>
                            </div>
                            <div className="grid grid-cols-3 py-2 px-2 ">
                              <div>Pin</div>
                              <div className="col-span-2 ">{item?.Pin}</div>
                            </div>
                            <div className="grid grid-cols-3 py-2 px-2 bg-gray-200">
                              <div>Thẻ SIM</div>
                              <div className="col-span-2 ">{item?.SIM}</div>
                            </div>
                            <div className="grid grid-cols-3 py-2 px-2 ">
                              <div>Hệ điều hành</div>
                              <div className="col-span-2 ">
                                {item?.HeDieuHanh}
                              </div>
                            </div>
                            <div className="grid grid-cols-3 py-2 px-2 bg-gray-200">
                              <div>Bluetooth</div>
                              <div className="col-span-2 ">
                                {item?.Bulutooth}
                              </div>
                            </div>
                            <div className="grid grid-cols-3 py-2 px-2">
                              <div>Wifi</div>
                              <div className="col-span-2 ">{item?.Wifi}</div>
                            </div>
                            <div className="grid grid-cols-3 py-2 px-2 bg-gray-200">
                              <div>Tiện ích khác</div>
                              <div className="col-span-2 ">
                                {item?.TienIchKhac}
                              </div>
                            </div>
                            <div className="grid grid-cols-3 py-2 px-2 rounded-xl">
                              <div>Trọng lượng</div>
                              <div className="col-span-2 ">
                                {item?.TrongLuong}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  })
                : "Chưa cập nhật thông số kỹ thuật"}
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center mt-5">
            <h1 className=" font-bold text-[20px] m-3">SẢN PHẨM TƯƠNG TỰ</h1>
            <div className="flex flex-row justify-center items-center flex-wrap w-full">
              {detailProduct?.detailSP?.product ? (
                <SimilarProduct
                  id={detailProduct?.detailSP?.product?.ID_Cata}
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetail;
