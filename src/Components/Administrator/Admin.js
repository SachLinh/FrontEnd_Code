/** @format */

import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
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
import CreateThongSo from "./ThongSo/AddThongSobyIDProduct";
import ThongSoDetail from "./ThongSo/ThongSoDetail";
import AddUser from "./User/AddUser";
import QuanLyUser from "./User/QuanLyUser";
import UpdateUser from "./User/UpdateUser";
import DeleteUser from "./User/DeleteUser";
import QuanLyPromotion from "./Promotion/QuanLyPromotion";
import AddPromotion from "./Promotion/AddPro";
import UpdatePromotion from "./Promotion/UpdatePromotion";
import DeletePromotion from "./Promotion/DeletePro";

export default function Admin() {
  return (
    <div className="mt-[30px] w-full flex flex-col justify-center items-center">
      <div className="w-full px-[50px] flex flex-row justify-between items-start">
        <NavbarAdmin />
        <div className="ml-64 w-[80%] rounded-xl">
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            {/* Hãng Sản xuất */}
            <Route path="/QuanLyHangSX" element={<QuanLyLoaiSP />}></Route>
            <Route
              path="/QuanLyHangSX/AddNewLoaiSP"
              element={<AddNewLoaiSP />}
            ></Route>
            <Route
              path="/QuanLyHangSX/Update/:idCate"
              element={<UpdateLoaiSP />}
            ></Route>
            <Route
              path="/QuanLyHangSX/Delete/:idCate"
              element={<DeleteLoaiSP />}
            ></Route>
            {/* List sản phẩm */}
            <Route path="/QuanLySanPham" element={<ListSanPham />}></Route>
            <Route path="/QuanLySanPham/AddProd" element={<AddProd />}></Route>
            <Route
              path="/QuanLySanPham/Delete/:idSanPham"
              element={<DeleteProd />}
            ></Route>
            <Route
              path="/QuanLySanPham/Detail/:idSanPham"
              element={<ChiTietSanPham />}
            ></Route>
            {/* Promotion product */}
            <Route
              path="/QuanLySanPham/Detail/Promotion/:idPromotion/:idSanPham"
              element={<PromotionDetail />}
            ></Route>
            {/* Promotion*/}
            <Route
              path="/QuanLyPromotion"
              element={<QuanLyPromotion />}
            ></Route>
            <Route
              path="/QuanLyPromotion/AddNewPros"
              element={<AddPromotion />}
            ></Route>
            <Route
              path="/QuanLyPromotion/UpdatePromotion/:idPromotion"
              element={<UpdatePromotion />}
            ></Route>
            <Route
              path="/QuanLyPromotion/DeletePromotion/:idPromotion"
              element={<DeletePromotion />}
            ></Route>
            {/* Specification Product */}
            <Route
              path="/QuanLySanPham/Detail/Spacification/:idThongSo/:idSanPham"
              element={<ThongSoDetail />}
            ></Route>
            <Route
              path="/QuanLySanPham/Detail/CreateSpect/:idSanPham"
              element={<CreateThongSo />}
            ></Route>
            {/* Promotion */}

            {/* Hoa Don */}
            <Route path="/QuanLyHoaDon" element={<QuanLyHoaDon />}></Route>
            <Route
              path="/ChiTietHoaDon/:idhoadon"
              element={<ChiTietHoaDon />}
            ></Route>
            <Route
              path="/DeleteHoaDon/:idhoaDon"
              element={<DeleteHoaDon />}
            ></Route>
            <Route path="/AddHoaDon" element={<AddHoaDon />}></Route>
            {/* User */}
            <Route path="/QuanLyUser" element={<QuanLyUser />}></Route>
            <Route
              path="/QuanLyUser/UpdateUser/:idUser"
              element={<UpdateUser />}
            ></Route>
            <Route path="/QuanLyUser/AddUser" element={<AddUser />}></Route>
            <Route
              path="/QuanLyUser/DeleteUser/:idUser"
              element={<DeleteUser />}
            ></Route>
          </Routes>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </div>
  );
}
