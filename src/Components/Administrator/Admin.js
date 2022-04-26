
import React, { Component } from "react";
import {Route, Routes } from "react-router-dom";
import AddProd from "./DanhSachSP/AddProd";
import ChiTietSanPham from "./DanhSachSP/ChiTietSanPham";
import DeleteProd from "./DanhSachSP/DeleteProd";
import ListSanPham from "./DanhSachSP/ListSanPham";
import Dashboard from "./Dashboard";
import AddNewLoaiSP from "./HangSX/AddNewLoaiSP";
import DeleteLoaiSP from "./HangSX/DeleteLoaiSP";
import QuanLyLoaiSP from "./HangSX/QuanLyLoaiSP";
import UpdateLoaiSP from "./HangSX/UpdateLoaiSP";
import NavbarAdmin from "./NavbarAdmin";
import PromotionDetail from "./Promotion/PromotionDetail";
import AddHoaDon from "./QuanLyHoaDon/AddHoaDon";
import ChiTietHoaDon from "./QuanLyHoaDon/ChiTietHoaDon";
import DeleteHoaDon from "./QuanLyHoaDon/DeleteHoaDon";
import QuanLyHoaDon from "./QuanLyHoaDon/QuanLyHoaDon";
import UpdateHoaDon from "./QuanLyHoaDon/UpdateHoaDon";
import CreateThongSo from "./ThongSo/AddThongSobyIDProduct";
import ThongSoDetail from "./ThongSo/ThongSoDetail";


export default function Admin() {
  return (
    <div className="mt-[30px] w-full flex flex-col justify-center items-center">
      <div className="w-full px-[50px] flex flex-row justify-between items-start">
        <NavbarAdmin />
        <div className="ml-64 w-[80%] rounded-xl">
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            {/* Hãng Sản xuất */}
            <Route path="/QuanLyHangSX" element={<QuanLyLoaiSP/>}></Route>
            <Route path="/QuanLyHangSX/AddNewLoaiSP" element={<AddNewLoaiSP />}></Route>
            <Route path="/QuanLyHangSX/Update/:idCate" element={<UpdateLoaiSP />}></Route>
            <Route path="/QuanLyHangSX/Delete/:idCate" element={<DeleteLoaiSP />}></Route>
            {/* List sản phẩm */}
            <Route path="/QuanLySanPham" element={<ListSanPham />}></Route>
            <Route path="/QuanLySanPham/AddProd" element={<AddProd />}></Route>
            <Route path="/QuanLySanPham/Delete/:idSanPham" element={<DeleteProd />}></Route>
            <Route path="/QuanLySanPham/Detail/:idSanPham" element={<ChiTietSanPham />}></Route>
            {/* Promotion Product */}
            <Route path="/QuanLySanPham/Detail/Promotion/:idPromotion/:idSanPham" element={<PromotionDetail />}></Route>
            {/* Specification Product */}
            <Route path="/QuanLySanPham/Detail/Spacification/:idThongSo/:idSanPham" element={<ThongSoDetail />}></Route>
            <Route path="/QuanLySanPham/Detail/CreateSpect/:idSanPham" element={<CreateThongSo />}></Route>
            {/* Promotion */}

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
