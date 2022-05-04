/** @format */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Menu from "../HomeTrangChu/Menu";
import {totalPriceState } from '../../Recoil/Recoil';
import { useRecoilState } from "recoil";
export default function Header() {
  const [totalPrice, setTotalPrice] = useRecoilState(totalPriceState);
  let [open, setOpen] = useState(false);
  let [openMenu, setOpenMenu] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const find = (search) => {
    navigate(`/DanhMucSPByName/${search}`);
    setSearch("");
  };
  const formatPrice = (price) => {
		return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)
	}
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <nav className="w-full shadow-[#838383] bg-[#ffffff] shadow-md
        fixed flex flex-col justify-center items-center z-50 text-[#000] h-[80px] md:h-[100px]">
      <div className="2xl:w-[1300px] lg:px-4 relative xl:w-[1200px] lg:w-[1000px] md:w-[700px] sm:w-[600px] w-full sm:px-0 px-[15px] z-50">
        <div
          className="flex flex-row justify-start lg:justify-between items-center
				 sm:py-[6px] md:py-[3px] py-[3px] lg:py-[4px]  text-white w-full text-[12px]"
        >
          {/* Logo */}
          <div className="w-[35%] sm:w-[40%] md:w-[30%] flex flex-row justify-start">
            <h2
              className="sm:text-center lg:text-left
              lg:mt-[0px]  lg:mb-[0px] 
              sm:py-[3px] xl:py-[0px] font-extrabold text-[rgb(255,255,255)] flex flex-col justify-center"
            >
              <Link to="">
                <img
                  src={require("./Images/logo2.png")}
                  className="w-[80px] sm:w-[130px] md:w-[150px]"
                />
              </Link>
            </h2>
            <button
              className="sm:text-center lg:text-left
              lg:mt-[0px]  lg:mb-[0px] 
              sm:text-[16px] xl:text-[20px] text-[12px] 
              sm:py-[3px] xl:py-[0px] 
              font-extrabold text-[rgb(5,5,5)] flex flex-col justify-center ml-[20px] md:ml-[30px] cursor-pointer"
              onClick={() => {
                setOpenMenu(!openMenu);
              }}
            >
              Danh mục
              <div className={`absolute  transition-all duration-1000 w-full flex flex-row justify-center rounded-lg ${openMenu ? "top-[100px] left-[0px]" : "top-[100px] left-[-5000px]"} bg-[#e9e6e0]`}>
                <Menu />
              </div>
            </button>
          </div>
          {/*  input*/}
          <div className="w-[50%] ml-[10px] sm:ml-[50px] sm:w-[40%] md:ml-[60px] lg:w-[30%] h-full leading-[64px] input-group">
            <span
              className="input-group-text cursor-pointer"
              id="basic-addon1"
              onClick={() => {
                find(search);
              }}
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <input
              className="form-control h-[30px] md:h-[40px] pl-3 rounded-xl p-[5px] outline-none
                 text-[#020000] text-[14px] w-full"
              placeholder="Bạn cần tìm gì?"
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
          <div
            onClick={() => {
              setOpen(!open);
            }}
            className=" sm:text-3xl text-xl cursor-pointer text-[#f11b1b] absolute sm:top-[20px] 
            top-[10px] sm:mr-[0px] mr-[8px] left-[90%] sm:left-[95%] md:left-[97%] lg:hidden"
          >
            <i className={open ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
          </div>
          {/* Button */}
          <ul
            className={`lg:w-[30%] absolute  bg-[#e7e4e4] xl:pt-0 h-auto lg:static transition-all duration-500 
						lg:bg-inherit w-[40%] lg:h-full flex lg:flex-row flex-col justify-starts lg:justify-end lg:items-center items-start 
            ${
              open
                ? "top-[60px] sm:top-[80px] md:top-[87px] left-[58%] sm:left-[60%] opacity-100 px-2 py-3"
                : "top-[-490px] left-[58%] sm:left-[60%]"
            }`}
          >
            <li className="w-[70%] sm:w-[60%] lg:w-[30%] h-full leading-[64px] flex flex-col justify-around items-center">
              <Link
                to="/CuaHang"
                className="w-full flex flex-row justify-center items-center text-[#000] hover:bg-[#ebdcdc] px-1 rounded-xl"
              >
                <i className="fa-solid fa-location-dot text-[15px] lg:text-[18px] xl:text-[25px] mr-2"></i>
                <div className="h-[50px] w-auto flex flex-col justify-start items-start">
                  <span className="h-[25px] leading-6">Cửa hàng</span>
                  <span className="h-[25px] leading-6">gần bạn</span>
                </div>
              </Link>
            </li>
            <li className=" w-[70%] sm:w-[60%] lg:w-[30%]  h-full leading-[64px] flex flex-col justify-around items-center">
              <Link
                to="/cart"
                className="flex flex-row justify-center items-center text-[#000] hover:bg-[#ebdcdc] px-1 rounded-xl"
              >
                <i className="fa-solid fa-bag-shopping text-[15px] lg:text-[18px] xl:text-[25px] mr-2"></i>
                <div className="h-[50px] w-auto flex flex-col justify-start items-start">
                  <span className="h-[25px] leading-6">Giỏ hàng</span>
                  <span className="h-[25px] leading-6">{formatPrice(totalPrice)}</span>
                </div>
              </Link>
            </li>
            <li className="w-[70%] sm:w-[60%] lg:w-[30%]  h-full leading-[64px] flex flex-col justify-around items-center">
              <Link
                to={user?.toKen ? "/SmemberMain" : "/Smember"}
                className="w-full h-[50px] flex flex-col justify-start items-center text-[#000] p-[5px] hover:bg-[#ebdcdc] px-1 rounded-xl"
              >
                <i className="fa-solid fa-user text-[20px] h-[25px]"></i>
                <span className="inline-block h-[25px] leading-6">
                  {user?.toKen ? "Infor" : "Login"}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
