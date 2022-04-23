
import React, { Component } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import AddNewLoaiSP from "./HangSX/AddNewLoaiSP";
import DeleteLoaiSP from "./HangSX/DeleteLoaiSP";
import QuanLyLoaiSP from "./HangSX/QuanLyLoaiSP";
import UpdateLoaiSP from "./HangSX/UpdateLoaiSP";
import NavbarAdmin from "./NavbarAdmin";
import AddHoaDon from "./QuanLyHoaDon/AddHoaDon";
import ChiTietHoaDon from "./QuanLyHoaDon/ChiTietHoaDon";
import DeleteHoaDon from "./QuanLyHoaDon/DeleteHoaDon";
import QuanLyHoaDon from "./QuanLyHoaDon/QuanLyHoaDon";
import UpdateHoaDon from "./QuanLyHoaDon/UpdateHoaDon";


export default function Admin() {
  return (
    <div className="mt-[30px] w-full flex flex-col justify-center items-center">
      <div className="w-full px-[50px] flex flex-row justify-between items-start">
        <NavbarAdmin />
        <div className="w-[80%] rounded-xl shadow-[0_0px_14px_1px_#80bfff] ">
          {Outlet}
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            {/* Hãng Sản xuất */}
            <Route path="/QuanLyHangSX" element={<QuanLyLoaiSP/>}></Route>
            <Route path="/QuanLyHangSX/AddNewLoaiSP" element={<AddNewLoaiSP />}></Route>
            <Route path="/QuanLyHangSX/Update/:idLoai" element={<UpdateLoaiSP />}></Route>
            <Route path="/QuanLyHangSX/Delete/:idLoai" element={<DeleteLoaiSP />}></Route>
            {/* List sản phẩm */}
            {/* <Route path="/QuanLySanPham" element={<ListSanPham />}></Route>
            <Route path="/QuanLySanPham/AddProd" element={<AddProd />}></Route>
            <Route path="/QuanLySanPham/Update/:idSanPham" element={<UpdateProd />}></Route>
            <Route path="/QuanLySanPham/Delete/:idSanPham" element={<DeleteProd />}></Route>
            <Route path="/QuanLySanPham/Detail/:idSanPham" element={<ChiTietSanPham />}></Route> */}
            {/* Hoa Don */}
            <Route path="/QuanLyHoaDon" element={<QuanLyHoaDon />}></Route>
            <Route path="/ChiTietHoaDon/:idhoadon" element={<ChiTietHoaDon />}></Route>
            <Route path="/UpdateHoaDon/:idhoaDon" element={<UpdateHoaDon />}></Route>
            <Route path="/DeleteHoaDon/:idhoaDon" element={<DeleteHoaDon />}></Route>
            <Route path="/AddHoaDon" element={<AddHoaDon />}></Route>

          </Routes>
        </div>
      </div>
    </div>
  );
}
